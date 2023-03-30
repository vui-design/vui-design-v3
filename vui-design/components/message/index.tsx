import type { App, AppContext, Plugin, Ref } from "vue";
import type { MessageConfig, Type } from "./types";
import { createVNode, render, ref, reactive } from 'vue';
import { types, icons } from "./constants";
import MessageList from "./message-list";
import Message from "./message";
import is from "../../utils/is";
import getElement from "../../utils/getElement";
import getTeleport from "../../utils/getTeleport";

let MessageMangerInstance: MessageManger | undefined;

class MessageManger {
  private readonly messageIds: Set<string | number>;

  private readonly messages: Ref<MessageConfig[]>;

  private container: HTMLElement | null | undefined;

  private teleport: HTMLElement | null | undefined;

  private count = 0;

  constructor(config: MessageConfig, appContext?: AppContext) {
    const { getPopupContainer = "body" } = config;

    this.messageIds = new Set();
    this.messages = ref([]);
    this.container = getElement(getPopupContainer) ?? document.body;
    this.teleport = getTeleport(Message.name);

    const vm = createVNode(MessageList, {
      messages: this.messages.value,
      onClose: this.remove,
      onAfterClose: this.destroy
    });

    if (appContext ?? Message._context) {
      vm.appContext = appContext ?? Message._context;
    }

    render(vm, this.teleport as HTMLElement);
  
    this.container.appendChild(this.teleport);
  }

  add = (config: MessageConfig) => {
    this.count++;

    const id = config.id ?? `vui-message-${this.count}`;

    if (this.messageIds.has(id)) {
      return this.update(id, config);
    }

    const message = reactive({ id, ...config });

    this.messageIds.add(id);
    this.messages.value.push(message);

    return {
      update: (next: MessageConfig["content"] | MessageConfig) => this.update(id, next),
      close: () => this.remove(id)
    };
  };

  remove = (id: string | number) => {
    for (let i = 0; i < this.messages.value.length; i++) {
      const message = this.messages.value[i];

      if (message.id === id) {
        if (is.function(message.onClose)) {
          message.onClose();
        }

        this.messageIds.delete(id);
        this.messages.value.splice(i, 1);

        break;
      }
    }
  };

  update = (id: string | number, config: MessageConfig["content"] | MessageConfig) => {
    if (!is.string(config) && !is.number(config) && !is.function(config) && !is.object(config)) {
      return;
    }

    if (is.string(config) || is.number(config) || is.function(config)) {
      config = {
        content: config
      };
    }

    for (let i = 0; i < this.messages.value.length; i++) {
      const message = this.messages.value[i];

      if (message.id === id) {
        this.messages.value.splice(i, 1, { ...message, ...config });

        break;
      }
    }

    return {
      update: (next: MessageConfig["content"] | MessageConfig) => this.update(id, next),
      close: () => this.remove(id)
    };
  };

  clear = () => {
    this.messageIds.clear();
    this.messages.value.splice(0);
    this.count = 0;
  };

  destroy = () => {
    if (this.messages.value.length === 0 && this.container && this.teleport) {
      render(null, this.teleport);

      this.container.removeChild(this.teleport);
      this.container = null;
      this.teleport = null;

      MessageMangerInstance = undefined;
    }
  };
};

Message.open = function(
  config: MessageConfig["content"] | MessageConfig
) {
  if (is.server) {
    return;
  }

  if (!is.string(config) && !is.number(config) && !is.function(config) && !is.object(config)) {
    return;
  }

  if (is.string(config) || is.number(config) || is.function(config)) {
    config = {
      content: config
    };
  }

  if (config.type && !config.icon) {
    config.icon = icons[config.type];
  }

  if (!MessageMangerInstance) {
    MessageMangerInstance = new MessageManger(config);
  }

  return MessageMangerInstance.add(config);
};

types.forEach((type: Type) => {
  Message[type] = function(
    content: MessageConfig["content"] | MessageConfig,
    duration?: MessageConfig["duration"],
    onClose?: MessageConfig["onClose"]
  ) {
    if (is.object(content)) {
      return Message.open({ type, ...content });
    }

    if (is.function(duration)) {
      onClose = duration;
      duration = undefined;
    }

    return Message.open({ type, content, duration, onClose });
  };
});

Message.install = function(app: App) {
  app.component(Message.name, Message);
  app.config.globalProperties.$message = Message;

  return app;
};

export type { MessageProps } from "./message";

export { createProps as createMessageProps } from "./message";

export default Message as typeof Message & Plugin;
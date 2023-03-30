import type { App, AppContext, Plugin, Ref } from "vue";
import type { NotificationConfig, Type, Placement } from "./types";
import { createVNode, render, ref, reactive } from 'vue';
import { types, icons } from "./constants";
import NotificationList from "./notification-list";
import Notification from "./notification";
import is from "../../utils/is";
import getElement from "../../utils/getElement";
import getTeleport from "../../utils/getTeleport";

const NotificationMangerInstance: {
  topLeft?: NotificationManger;
  topRight?: NotificationManger;
  bottomLeft?: NotificationManger;
  bottomRight?: NotificationManger;
} = {};

class NotificationManger {
  private readonly notificationIds: Set<string | number>;

  private readonly notifications: Ref<NotificationConfig[]>;

  private container: HTMLElement | null | undefined;

  private teleport: HTMLElement | null | undefined;

  private placement: Placement;

  private count = 0;

  constructor(config: NotificationConfig, appContext?: AppContext) {
    const { getPopupContainer = "body", placement = "topRight" } = config;

    this.notificationIds = new Set();
    this.notifications = ref([]);
    this.container = getElement(getPopupContainer) ?? document.body;
    this.teleport = getTeleport(Notification.name, placement);
    this.placement = placement;

    const vm = createVNode(NotificationList, {
      notifications: this.notifications.value,
      placement: placement,
      onClose: this.remove,
      onAfterClose: this.destroy
    });

    if (appContext ?? Notification._context) {
      vm.appContext = appContext ?? Notification._context;
    }

    render(vm, this.teleport as HTMLElement);
  
    this.container.appendChild(this.teleport);
  }

  add = (config: NotificationConfig) => {
    this.count++;

    const id = config.id ?? `vui-notification-${this.count}`;

    if (this.notificationIds.has(id)) {
      return this.update(id, config);
    }

    const notification = reactive({ id, ...config });

    this.notificationIds.add(id);
    this.notifications.value.push(notification);

    return {
      update: (next: NotificationConfig["title"] | NotificationConfig) => this.update(id, next),
      close: () => this.remove(id)
    };
  };

  remove = (id: string | number) => {
    for (let i = 0; i < this.notifications.value.length; i++) {
      const notification = this.notifications.value[i];

      if (notification.id === id) {
        if (is.function(notification.onClose)) {
          notification.onClose();
        }

        this.notificationIds.delete(id);
        this.notifications.value.splice(i, 1);

        break;
      }
    }
  };

  update = (id: string | number, config: NotificationConfig["title"] | NotificationConfig) => {
    if (!is.string(config) && !is.number(config) && !is.function(config) && !is.object(config)) {
      return;
    }

    if (is.string(config) || is.number(config) || is.function(config)) {
      config = {
        title: config
      };
    }

    for (let i = 0; i < this.notifications.value.length; i++) {
      const notification = this.notifications.value[i];

      if (notification.id === id) {
        this.notifications.value.splice(i, 1, { ...notification, ...config });

        break;
      }
    }

    return {
      update: (next: NotificationConfig["title"] | NotificationConfig) => this.update(id, next),
      close: () => this.remove(id)
    };
  };

  clear = () => {
    this.notificationIds.clear();
    this.notifications.value.splice(0);
    this.count = 0;
  };

  destroy = () => {
    if (this.notifications.value.length === 0 && this.container && this.teleport) {
      render(null, this.teleport);

      this.container.removeChild(this.teleport);
      this.container = null;
      this.teleport = null;

      NotificationMangerInstance[this.placement] = undefined;
    }
  };
};

Notification.open = function(
  config: NotificationConfig["title"] | NotificationConfig
) {
  if (is.server) {
    return;
  }

  if (!is.string(config) && !is.number(config) && !is.function(config) && !is.object(config)) {
    return;
  }

  if (is.string(config) || is.number(config) || is.function(config)) {
    config = {
      title: config
    };
  }

  if (config.type && !config.icon) {
    config.icon = config.description ? icons[config.type] : (icons[config.type] + "-filled");
  }

  const { placement = "topRight" } = config;

  if (!NotificationMangerInstance[placement]) {
    NotificationMangerInstance[placement] = new NotificationManger(config);
  }

  return NotificationMangerInstance[placement].add(config);
};

types.forEach((type: Type) => {
  Notification[type] = function(
    title: NotificationConfig["title"] | NotificationConfig,
    duration?: NotificationConfig["duration"],
    onClose?: NotificationConfig["onClose"]
  ) {
    if (is.object(title)) {
      return Notification.open({ type, ...title });
    }

    if (is.function(duration)) {
      onClose = duration;
      duration = undefined;
    }

    return Notification.open({ type, title, duration, onClose });
  };
});

Notification.install = function(app: App) {
  app.component(Notification.name, Notification);
  app.config.globalProperties.$notification = Notification;

  return app;
};

export type { NotificationProps } from "./notification";

export { createProps as createNotificationProps } from "./notification";

export default Notification as typeof Notification & Plugin;
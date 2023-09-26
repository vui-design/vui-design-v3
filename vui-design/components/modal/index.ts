import type { App, AppContext, Plugin, Ref } from "vue";
import type { ModalConfig, Type } from "./types";
import { createVNode, render, ref } from 'vue';
import { types, icons } from "./constants";
import ModalList from "./modal-list";
import Modal from "./modal";
import is from "../../utils/is";
import noop from "../../utils/noop";
import getElement from "../../utils/getElement";
import getTeleport from "../../utils/getTeleport";

let ModalManagerInstance: ModalManger | undefined;

class ModalManger {
  private readonly modalIds: Set<string | number>;

  private readonly modals: Ref<ModalConfig[]>;

  private container: HTMLElement | null | undefined;

  private teleport: HTMLElement | null | undefined;

  private count = 0;

  constructor(config: ModalConfig, appContext?: AppContext) {
    const { classPrefix, getPopupContainer = "body" } = config;

    this.modalIds = new Set();
    this.modals = ref([]);
    this.container = getElement(getPopupContainer) ?? document.body;
    this.teleport = getTeleport(Modal.name);

    const vm = createVNode(ModalList, {
      classPrefix,
      modals: this.modals.value,
      onCancel: this.close,
      onOk: this.close,
      onBeforeOpen: noop,
      onOpen: noop,
      onAfterOpen: noop,
      onBeforeClose: noop,
      onClose: noop,
      onAfterClose: this.remove
    });

    if (appContext ?? Modal._context) {
      vm.appContext = appContext ?? Modal._context;
    }

    render(vm, this.teleport as HTMLElement);
  
    this.container.appendChild(this.teleport);
  }

  add = (config: ModalConfig) => {
    this.count++;

    const id = config.id ?? `vui-modal-${this.count}`;

    if (this.modalIds.has(id)) {
      return this.update(id, config);
    }

    const modal: ModalConfig = { id, ...config };

    this.modalIds.add(id);
    this.modals.value.push(modal);

    return {
      update: (next: ModalConfig) => this.update(id, next),
      close: () => this.close(id)
    };
  };

  update = (id: string | number, config: ModalConfig) => {
    if (!is.object(config)) {
      return;
    }

    const index = this.modals.value.findIndex(modal => modal.id === id);

    if (index > -1) {
      this.modals.value.splice(index, 1, { ...this.modals.value[index], ...config });
    }

    return {
      update: (next: ModalConfig) => this.update(id, next),
      close: () => this.close(id)
    };
  };

  close = (id: string | number) => {
    this.update(id, { visible: false });
  };

  remove = (id: string | number) => {
    const index = this.modals.value.findIndex(modal => modal.id === id);

    if (index > -1) {
      this.modalIds.delete(id);
      this.modals.value.splice(index, 1);
    }

    this.destroy();
  };

  clear = () => {
    this.modalIds.clear();
    this.modals.value.splice(0);
    this.count = 0;
  };

  destroy = () => {
    if (this.modals.value.length === 0 && this.container && this.teleport) {
      render(null, this.teleport);

      this.container.removeChild(this.teleport);
      this.container = null;
      this.teleport = null;

      ModalManagerInstance = undefined;
    }
  };
};

Modal.open = function(
  config: ModalConfig
) {
  if (is.server || !is.object(config)) {
    return;
  }

  if (config.type && !config.icon) {
    config.icon = icons[config.type];
  }

  if (["info", "warning", "success", "error"].includes(config.type as string)) {
    config.showCancelButton = false;
    config.showOkButton = true;
  }
  else if (config.type === "confirm") {
    config.showCancelButton = true;
    config.showOkButton = true;
  }

  if (!ModalManagerInstance) {
    ModalManagerInstance = new ModalManger(config);
  }

  return ModalManagerInstance.add(config);
};

types.forEach((type: Type) => {
  Modal[type] = function(
    config: ModalConfig
  ) {
    if (!is.object(config)) {
      return;
    }

    return Modal.open({ type, ...config });
  };
});

Modal.install = function(app: App) {
  app.component(Modal.name, Modal);
  app.config.globalProperties.$modal = Modal;

  return app;
};

export type { ModalProps } from "./modal";

export { createProps as createModalProps } from "./modal";

export default Modal as typeof Modal & Plugin;
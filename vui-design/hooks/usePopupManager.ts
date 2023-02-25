import type { Ref } from "vue";
import { getCurrentInstance, ref, watch, onMounted, onBeforeUnmount } from "vue";

export type PopupType = "popup" | "message" | "dialog";

const POPUP_BASE_Z_INDEX = 2000;
const MESSAGE_BASE_Z_INDEX = 5000;
const Z_INDEX_STEP = 1;

class PopupManager {
  private stack = {
    popup: new Set<number>(),
    message: new Set<number>(),
    dialog: new Set<number>()
  };

  private getNextZIndex = (type: PopupType) => {
    if (type === "message") {
      return MESSAGE_BASE_Z_INDEX + this.stack.message.size * Z_INDEX_STEP;
    }

    return POPUP_BASE_Z_INDEX + this.stack.popup.size * Z_INDEX_STEP;
  };

  public add = (id: number, type: PopupType) => {
    this.stack[type].add(id);

    if (type === "dialog") {
      this.stack.popup.add(id);
    }

    return this.getNextZIndex(type);
  };

  public delete = (id: number, type: PopupType) => {
    this.stack[type].delete(id);
  
    if (type === "dialog") {
      this.stack.popup.delete(id);
    }
  };

  public isLastDialog = (id: number) => {
    if (this.stack.dialog.size > 1) {
      const array = Array.from(this.stack.dialog);
      return id === array[array.length - 1];
    }
    return true;
  };
}

const pm = new PopupManager();

export default function usePopupManager(
  type: PopupType,
  {
    visible,
    runOnMounted,
  }: {
    visible?: Ref<boolean>,
    runOnMounted?: boolean
  } = {}
) {
  const id = getCurrentInstance()?.uid ?? Date.now();
  const zIndex = ref(0);
  const open = () => {
    zIndex.value = pm.add(id, type);
  };
  const close = () => {
    pm.delete(id, type);
  };
  const isLastDialog = () => {
    if (type === "dialog") {
      return pm.isLastDialog(id);
    }

    return false;
  };

  watch(() => visible?.value, visible => visible ? open() : close(), {
    immediate: true
  });

  if (runOnMounted) {
    onMounted(() => open());
    onBeforeUnmount(() => close());
  }

  return {
    id,
    zIndex,
    open,
    close,
    isLastDialog
  };
}
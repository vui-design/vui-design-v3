import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import { defineComponent, watch, onBeforeUnmount } from "vue";
import ResizeObserver from "resize-observer-polyfill";
import useFirstElement from "../../hooks/useFirstElement";

export const createProps = () => {
  return {
    // 
    watchOnUpdated: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type ResizeObserverProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-resize-observer",
  props: createProps(),
  emits: ["resize"],
  setup(props, context) {
    const { children, firstElement } = useFirstElement();
    let resizeObserver: ResizeObserver | null;

    const addResizeObserver = (target: HTMLElement) => {
      if (!target) {
        return;
      }

      resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const entry = entries[0];

        context.emit("resize", entry);
      });

      resizeObserver.observe(target);
    };

    const removeResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };

    watch(firstElement, element => {
      if (resizeObserver) {
        removeResizeObserver();
      }

      if (element) {
        addResizeObserver(element);
      }
    });

    onBeforeUnmount(() => {
      if (resizeObserver) {
        removeResizeObserver();
      }
    });

    return () => {
      children.value = context.slots.default?.();

      return children.value;
    };
  }
});
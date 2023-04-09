import type { Ref } from "vue";
import ResizeObserver from 'resize-observer-polyfill';
import { isFunction } from "../utils/is";

export default function useResizeObserver({
  element,
  onResize
}: {
  element: Ref<HTMLElement | null | undefined>;
  onResize: (entry: ResizeObserverEntry) => void;
}) {
  let resizeObserver: ResizeObserver | null;

  return {
    addResizeObserver: () => {
      if (!element.value) {
        return;
      }

      resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const entry = entries[0];

        if (isFunction(onResize)) {
          onResize(entry);
        }
      });

      resizeObserver.observe(element.value);
    },
    removeResizeObserver: () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    }
  };
};
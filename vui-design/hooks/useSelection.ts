import type { Ref } from "vue";

interface ElementFocusOptions extends FocusOptions {
  cursor?: "start" | "end" | "all";
};

export default function useSelection(
  element: Ref<HTMLInputElement | HTMLTextAreaElement | undefined>
) {
  const focus = (
    options?: ElementFocusOptions
  ) => {
    element.value?.focus(options);

    if (element.value && options?.cursor) {
      const length = element.value.value.length;
      const cursor = options.cursor;

      switch(cursor) {
        case "start":
          element.value.setSelectionRange(0, 0);
          break;
        case "end":
          element.value.setSelectionRange(length, length);
          break;
        default:
          element.value.setSelectionRange(0, length);
      }
    }
  };

  const blur = () => {
    element.value?.blur();
  };

  const select = () => {
    element.value?.select();
  };

  const setSelectionRange = (
    start: number,
    end: number,
    direction?: "forward" | "backward" | "none"
  ) => {
    element.value?.setSelectionRange(start, end, direction);
  };

  return {
    focus,
    blur,
    select,
    setSelectionRange
  };
};
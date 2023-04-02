import type { Ref, ComputedRef } from "vue";
import { ref, computed } from "vue";
import { isNumber } from "../utils/is";
import { off, on } from "../utils/dom";

export default function useDraggable({
  wrapperRef,
  modalRef,
  draggable
}: {
  wrapperRef: Ref<HTMLElement | undefined>;
  modalRef: Ref<HTMLElement | undefined>;
  draggable: Ref<boolean>;
}): {
  handleMovedown: (e: MouseEvent) => void;
  dragging: Ref<boolean>;
  dragged: ComputedRef<boolean>;
  dragX: Ref<number | undefined>;
  dragY: Ref<number | undefined>;
} {
  const minX = ref<number>(0);
  const minY = ref<number>(0);
  const maxX = ref<number>(0);
  const maxY = ref<number>(0);
  const startPageX = ref<number>(0);
  const startPageY = ref<number>(0);
  const startDragX = ref<number>(0);
  const startDragY = ref<number>(0);
  const dragX = ref<number>();
  const dragY = ref<number>();
  const dragging = ref<boolean>(false);
  const dragged = computed(() => isNumber(dragX.value) && isNumber(dragY.value));

  const handleMovedown = (e: MouseEvent) => {
    if (wrapperRef.value && modalRef.value && draggable.value) {
      e.preventDefault();

      const { top: wrapperTop, left: wrapperLeft } = wrapperRef.value.getBoundingClientRect();
      const { clientWidth: wrapperWidth, clientHeight: wrapperHeight } = wrapperRef.value;
      const { top, left, width, height } = modalRef.value.getBoundingClientRect();

      maxX.value = wrapperWidth - width;
      maxY.value = wrapperHeight - height;
      startPageX.value = e.x;
      startPageY.value = e.y;
			startDragX.value = left - wrapperLeft;
			startDragY.value = top - wrapperTop;
      dragging.value = true;

      on(window, "mousemove", handleMousemove);
      on(window, "mouseup", handleMouseup);
      on(window, "contextmenu", handleMouseup);
    }
  };

  const handleMousemove = (e: MouseEvent) => {
    if (dragging.value) {
      let x = startDragX.value + e.x - startPageX.value;

      x = x < minX.value ? minX.value : x;
      x = x > maxX.value ? maxX.value : x;

      let y = startDragY.value + e.y - startPageY.value;

      y = y < minY.value ? minY.value : y;
      y = y > maxY.value ? maxY.value : y;

      dragX.value = x;
      dragY.value = y;
    }
  };

  const handleMouseup = () => {
    if (dragging.value) {
      minX.value = 0;
      minY.value = 0;
      maxX.value = 0;
      maxY.value = 0;
      startPageX.value = 0;
      startPageY.value = 0;
      startDragX.value = 0;
      startDragY.value = 0;
      dragging.value = false;

      off(window, "mousemove", handleMousemove);
      off(window, "mouseup", handleMouseup);
      off(window, "contextmenu", handleMouseup);
    }
  };

  return {
    handleMovedown,
    dragging,
    dragged,
    dragX,
    dragY
  };
};
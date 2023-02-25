import type { Slots } from "../types";
import { onMounted, onUpdated, ref } from "vue";
import { getFirstElementFromChildren } from "../utils/vue";

export default function useFirstElement() {
  // only save VNodes reference, not use ref
  const children: Slots = {};
  const firstElement = ref<HTMLElement>();
  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value);

    if (element !== firstElement.value) {
      firstElement.value = element;
    }
  };

  onMounted(() => getFirstElement());
  onUpdated(() => getFirstElement());

  return {
    children,
    firstElement
  };
};
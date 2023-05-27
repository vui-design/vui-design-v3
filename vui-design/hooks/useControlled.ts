import type { ComputedRef } from "vue";
import { getCurrentInstance, computed } from "vue";

export default function useControlled(
  prop: string
): ComputedRef<boolean> {
  const instance = getCurrentInstance();
  const isControlled = computed(() => !!instance?.vnode?.props && (prop in instance?.vnode?.props));

  return isControlled;
};
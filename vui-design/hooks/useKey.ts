import type { ComputedRef } from "vue";
import type { Key } from "../types";
import { getCurrentInstance, computed } from "vue";

const generateKey = (): string => {
  let key: string = "";

  for (let i = 1; i <= 32; i++) {
    let n = Math.floor(Math.random() * 16.0).toString(16);

    key += n;

    if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
      key += "-";
    }
  }

  return key;
};

export default function useKey(): ComputedRef<Key> {
  const instance = getCurrentInstance();
  const key = computed(() => instance?.vnode?.key ?? generateKey());

  return key;
};
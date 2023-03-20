import type { ComputedRef } from "vue";
import { inject, computed } from "vue";
import { SubmenuInjectionKey } from "../context";

export default function useLevel(): ComputedRef<number> {
  const vuiSubmenu = inject(SubmenuInjectionKey, undefined);
  const level = computed(() => vuiSubmenu && vuiSubmenu.level ? (vuiSubmenu.level + 1) : 1);

  return level;
};
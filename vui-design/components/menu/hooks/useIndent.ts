import type { Ref, ComputedRef } from "vue";
import { inject, isRef, computed } from "vue";
import { MenuInjectionKey } from "../context";

export default function useIndent(
  level: number | Ref<number>
): ComputedRef<number> {
  const vuiMenu = inject(MenuInjectionKey, undefined);
  const lvl = computed(() => isRef(level) ? level.value : level);
  const indent = computed(() => {
    const isInline = vuiMenu?.mode === "inline" && !vuiMenu?.collapsed;
    let value = 0;

    if (isInline && vuiMenu?.indent && lvl.value > 1) {
      value = 16 + vuiMenu.indent * (lvl.value - 1);
    }

    return value;
  });

  return indent;
};
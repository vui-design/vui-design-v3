import type { Ref } from "vue";
import type { Breakpoint } from "../utils/responsive-observer";
import { isRef, computed, onMounted, onUnmounted } from "vue";
import responsiveObserver from "../utils/responsive-observer";

export default function useBreakpoint(
  breakpoint: Breakpoint | undefined | Ref<Breakpoint | undefined>,
  callback: (matched: boolean) => void
) {
  const bp = computed(() => isRef(breakpoint) ? breakpoint.value : breakpoint);
  let token: number;

  onMounted(() => {
    token = responsiveObserver.subscribe((screens, matchedBreakpoint) => {
      if (!bp.value) {
        return;
      }

      if (!matchedBreakpoint || matchedBreakpoint === bp.value) {
        callback(!!screens[bp.value]);
      }
    });
  });

  onUnmounted(() => {
    if (token) {
      responsiveObserver.unsubscribe(token);
    }
  });
};
import type { Ref } from "vue";
import type { Screens } from "../utils/responsive-observer";
import { ref, onMounted, onUnmounted } from "vue";
import responsiveObserver from "../utils/responsive-observer";

export default function useResponsive(): Ref<Screens> {
  const screens = ref<Screens>({});
  let token: number;

  onMounted(() => {
    token = responsiveObserver.subscribe((value: Screens) => {
      screens.value = value;
    });
  });

  onUnmounted(() => {
    if (token) {
      responsiveObserver.unsubscribe(token);
    }
  });

  return screens;
};
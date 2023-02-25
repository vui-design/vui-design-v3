import { onMounted, ref } from "vue";
import canUseDom from "../utils/canUseDom";

let cached: boolean | undefined;
const isSupportRowGap = (): boolean => {
  if (!canUseDom()) {
    return false;
  }

  if (cached !== undefined) {
    return cached;
  }

  const flex = document.createElement("div");

  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);

  cached = flex.scrollHeight === 1;

  document.body.removeChild(flex);

  return cached;
};

export default function useSupportRowGap() {
  const isSupport = ref(false);

  onMounted(() => {
    isSupport.value = isSupportRowGap();
  });

  return isSupport;
};
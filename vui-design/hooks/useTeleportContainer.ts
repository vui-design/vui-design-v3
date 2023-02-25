import type { Ref } from "vue";
import { ref, watch, onMounted } from "vue";
import getElement from "../utils/getElement";

export default function useTeleportContainer({
  getPopupContainer,
  visible,
  defaultContainer = "body",
  documentContainer
}: {
  getPopupContainer: Ref<string | HTMLElement | null | undefined>;
  visible: Ref<boolean>;
  defaultContainer?: string;
  documentContainer?: boolean;
}) {
  const teleport = ref(getPopupContainer.value);
  const container = ref<HTMLElement | null>();
  const getContainer = () => {
    const target = getElement(getPopupContainer.value);
    const _teleport = target ? getPopupContainer.value : defaultContainer;
    const _container = target ?? (documentContainer ? document.documentElement : getElement(defaultContainer));

    if (_teleport !== teleport.value) {
      teleport.value = _teleport;
    }

    if (_container !== container.value) {
      container.value = _container;
    }
  };

  watch(visible, visible => {
    if (teleport.value !== getPopupContainer.value && visible) {
      getContainer();
    }
  });

  onMounted(() => getContainer());

  return {
    teleport,
    container
  };
};
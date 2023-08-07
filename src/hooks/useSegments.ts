import type { Ref } from "vue";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default function useSegments(
  path: string
): {
  activeKey: Ref<string>;
  handleChange: (value: string) => void;
} {
  const router = useRouter();
  const route = useRoute();
  const activeKey = ref<string>("");

  watch(route, newRoute => {
    let tab = newRoute.query.tab as string;

    if (!tab) {
      tab = "examples";
    }

    activeKey.value = tab;
  }, {
    immediate: true,
    deep: true
  });

  const handleChange = (value: string) => {
    router.push(`${path}?tab=${value}`);
  };

  return {
    activeKey,
    handleChange
  };
};
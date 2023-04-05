import type { ComputedRef } from "vue";
import { inject, computed } from "vue";
import { classPrefix as classNamePrefix } from "../constants";
import { ConfigProviderInjectionKey } from "../components/config-provider/context";

export default function useClassPrefix(
  name: string,
  props: Record<any, any>
): ComputedRef<string> {
  const VuiConfigProvider = inject(ConfigProviderInjectionKey, undefined);
  const classPrefix = computed(() => {
    return (props.classPrefix ?? VuiConfigProvider?.classPrefix ?? classNamePrefix) + "-" + name;
  });

  return classPrefix;
};
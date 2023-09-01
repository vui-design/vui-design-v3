import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { Authorize } from "../../types";
import { defineComponent, inject, computed } from "vue";
import { ConfigProviderInjectionKey } from "../config-provider/context";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 子元素或子组件需要的权限标识
    value: {
      type: [String, Array] as PropType<string | string[]>,
      default: undefined
    },
    // 自定义权限校验函数
    authorize: {
      type: Function as PropType<Authorize>,
      default: undefined
    }
  };
};

export type AuthorizerProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-authorizer",
  props: createProps(),
  inheritAttrs: false,
  setup(props, context) {
    // 注入祖先组件
    const vuiConfigProvider = inject(ConfigProviderInjectionKey, undefined);

    // 校验函数
    const authorize = computed(() => props.authorize ?? vuiConfigProvider?.authorize);

    // 渲染
    return () => {
      const isAllowed = is.function(authorize.value) ? authorize.value(props.value, context.attrs) : true;

      if (isAllowed) {
        return context.slots.default?.();
      }
      else {
        return context.slots.replacement?.();
      }
    };
  }
});
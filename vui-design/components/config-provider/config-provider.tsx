import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { Size, GetPopupContainer, GetScrollContainer } from "../../types";
import type { Lang } from "../../locale/types";
import { defineComponent, provide, toRefs, reactive } from "vue";
import { classPrefix, sizes } from "../../constants";
import { ConfigProviderInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: classPrefix
    },
    // 设置后代组件尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 反转趋势标记的颜色
    reverseTrendColor: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // Affix 所属滚动容器，值为一个返回对应 DOM 元素的函数
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<GetPopupContainer>,
      default: "body"
    },
    // Affix 所属滚动容器，值为一个返回对应 DOM 元素的函数
    getScrollContainer: {
      type: Function as PropType<GetScrollContainer>,
      default: () => typeof window === "undefined" ? undefined : window
    },
    // 配置语言包
    locale: {
      type: Object as PropType<Lang>,
      default: undefined
    }
  };
};

export type ConfigProviderProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-config-provider",
  props: createProps(),
  setup(props, context) {
    // 解构属性
    const { classPrefix, size, reverseTrendColor, getPopupContainer, getScrollContainer, locale } = toRefs(props);

    // 向后代组件注入当前组件
    provide(ConfigProviderInjectionKey, reactive({
      classPrefix,
      size,
      reverseTrendColor,
      getPopupContainer,
      getScrollContainer,
      locale
    }));

    // 渲染
    return () => {
      return context.slots.default?.();
    };
  }
});
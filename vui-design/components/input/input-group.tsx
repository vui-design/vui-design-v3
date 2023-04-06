import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import { defineComponent, provide, toRefs, reactive, computed } from "vue";
import { sizes } from "../../constants";
import { InputGroupInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否使用紧凑模式
    compact: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 文本框尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 文本框是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type InputGroupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-input-group",
  props: createProps(),
  setup(props, context) {
    // 解构属性
    const { size, disabled } = toRefs(props);

    // 向后代组件注入当前组件
    provide(InputGroupInjectionKey, reactive({
      size,
      disabled
    }));

    // 计算 class 样式
    const classPrefix = useClassPrefix("input-group", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-compact`]: props.compact
      };
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>{context.slots.default?.()}</div>
      );
    };
  }
});
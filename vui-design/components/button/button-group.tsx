import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Type, Shape } from "./types";
import { defineComponent, provide, toRefs, reactive, computed } from "vue";
import { sizes } from "../../constants";
import { types, shapes } from "./constants";
import { ButtonGroupInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 按钮类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 幽灵按钮
    ghost: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 按钮形状
    shape: {
      type: String as PropType<Shape>,
      validator: (shape: Shape) => shapes.includes(shape),
      default: "square"
    },
    // 按钮尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 按钮是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type ButtonGroupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-button-group",
  props: createProps(),
  setup(props, context) {
    // 解构属性
    const { type, ghost, shape, size, disabled } = toRefs(props);

    // 向后代组件注入当前组件
    provide(ButtonGroupInjectionKey, reactive({
      type,
      ghost,
      shape,
      size,
      disabled
    }));

    // 计算 class 样式
    const classPrefix = useClassPrefix("button-group", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>{context.slots.default?.()}</div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Type, Shape, Size } from "./types";
import { defineComponent, provide, toRefs, reactive, computed } from "vue";
import getClassName from "../../utils/getClassName";
import { types, shapes, sizes } from "./constants";
import { ButtonGroupInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
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
      default: undefined
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
    const className = computed(() => getClassName(props.classNamePrefix, "button-group"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>{context.slots.default?.()}</div>
      );
    };
  }
});
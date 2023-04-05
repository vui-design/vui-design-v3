import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Shape } from "../button/types";
import { defineComponent, computed } from "vue";
import { sizes } from "../../constants";
import { shapes } from "../button/constants";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否展示动画效果
    animated: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 使按钮占位图的宽度撑满父元素
    block: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 按钮占位图的形状
    shape: {
      type: String as PropType<Shape>,
      validator: (shape: Shape) => shapes.includes(shape),
      default: undefined
    },
    // 按钮占位图的尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    }
  };
};

export type SkeletonButtonProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-skeleton-button",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("skeleton-button", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-animated`]: props.animated,
        [`${classPrefix.value}-block`]: props.block,
        [`${classPrefix.value}-${props.shape}`]: props.shape,
        [`${classPrefix.value}-${props.size}`]: props.size
      };
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}></div>
      );
    };
  }
});
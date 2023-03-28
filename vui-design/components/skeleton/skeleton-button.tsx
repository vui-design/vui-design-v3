import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Shape, Size } from "../button/types";
import { defineComponent, computed } from "vue";
import { shapes, sizes } from "../button/constants";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
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
    const className = computed(() => getClassName(props.classNamePrefix, "skeleton-button"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-animated`]: props.animated,
        [`${className.value}-block`]: props.block,
        [`${className.value}-${props.shape}`]: props.shape,
        [`${className.value}-${props.size}`]: props.size
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
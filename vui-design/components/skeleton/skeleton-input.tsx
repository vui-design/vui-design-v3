import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import { defineComponent, computed } from "vue";
import { sizes } from "../../constants";
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
    // 使输入框占位图的宽度撑满父元素
    block: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 输入框占位图的尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    }
  };
};

export type SkeletonInputProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-skeleton-input",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("skeleton-input", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-animated`]: props.animated,
        [`${classPrefix.value}-block`]: props.block,
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
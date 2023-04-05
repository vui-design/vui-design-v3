import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, computed } from "vue";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

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
    // 标题占位图的宽度
    width: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    }
  };
};

export type SkeletonTitleProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-skeleton-title",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("skeleton-title", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-animated`]: props.animated
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      return {
        width: is.number(props.width) ? `${props.width}px` : props.width
      };
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value} style={styles.el.value}></div>
      );
    };
  }
});
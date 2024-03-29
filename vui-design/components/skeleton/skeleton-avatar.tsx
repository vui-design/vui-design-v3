import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Size } from "../../types";
import type { Shape } from "../avatar/types";
import { defineComponent, computed } from "vue";
import { sizes } from "../../constants";
import { shapes } from "../avatar/constants";
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
    // 头像占位图的形状
    shape: {
      type: String as PropType<Shape>,
      validator: (shape: Shape) => shapes.includes(shape),
      default: undefined
    },
    // 头像占位图的尺寸
    size: {
      type: [String, Number] as PropType<Size | number>,
      default: "medium"
    }
  };
};

export type SkeletonAvatarProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-skeleton-avatar",
  props: createProps(),
  setup(props, context) {
    // 是否为预设尺寸
    const isPresetSize = computed(() => sizes.includes(props.size as string));

    // 计算 class 样式
    const classPrefix = useClassPrefix("skeleton-avatar", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-animated`]: props.animated,
        [`${classPrefix.value}-${props.shape}`]: props.shape,
        [`${classPrefix.value}-${props.size}`]: isPresetSize.value
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (!isPresetSize.value && props.size) {
        style.width = style.height = `${props.size}px`;
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value} style={styles.el.value}></div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Color } from "./types";
import { defineComponent, computed } from "vue";
import { colors } from "./constants";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 指定轴点颜色
    color: {
      type: String as PropType<Color | string>,
      default: "blue"
    }
  };
};

export type TimelineItemProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-timeline-item",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("timeline-item", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elTail = computed(() => `${classPrefix.value}-tail`);
    classes.elDot = computed(() => {
      return {
        [`${classPrefix.value}-dot`]: true,
        [`${classPrefix.value}-dot-custom`]: context.slots.dot,
        [`${classPrefix.value}-dot-${props.color}`]: props.color && colors.includes(props.color)
      };
    });
    classes.elContent = computed(() => `${classPrefix.value}-content`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elDot = computed(() => {
      let style: CSSProperties = {};

      if (props.color && colors.indexOf(props.color) === -1) {
        style.borderColor = style.color = props.color;
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <div class={classes.elTail.value}></div>
          <div class={classes.elDot.value} style={styles.elDot.value}>{context.slots.dot?.()}</div>
          <div class={classes.elContent.value}>{context.slots.default?.()}</div>
        </div>
      );
    };
  }
});
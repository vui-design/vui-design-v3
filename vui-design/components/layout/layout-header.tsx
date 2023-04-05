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
    // 主题颜色
    color: {
      type: String as PropType<Color>,
      validator: (color: Color) => colors.includes(color),
      default: "light"
    }
  };
};

export type LayoutHeaderProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-layout-header",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("layout-header", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.color}`]: props.color && colors.includes(props.color)
      }
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (props.color && colors.indexOf(props.color) === -1) {
        style.backgroundColor = props.color;
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <header class={classes.el.value} style={styles.el.value}>
          {context.slots.default?.()}
        </header>
      );
    };
  }
});
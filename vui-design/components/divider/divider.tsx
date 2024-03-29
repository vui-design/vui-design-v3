import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { VueNodeAtom } from "../../types";
import type { Type, Direction, Orientation } from "./types";
import { defineComponent, computed } from "vue";
import { types, directions, orientations } from "./constants";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 分割线类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "solid"
    },
    // 分割线的方向
    direction: {
      type: String as PropType<Direction>,
      validator: (direction: Direction) => directions.includes(direction),
      default: "horizontal"
    },
    // 分割线文本的位置
    orientation: {
      type: String as PropType<Orientation>,
      validator: (orientation: Orientation) => orientations.includes(orientation),
      default: "center"
    },
    // 文字是否显示为普通正文样式
    plain: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 分割线的宽度/高度
    size: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 分割线距离两侧内容的间隔
    gutter: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    }
  };
};

export type DividerProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-divider",
  props: createProps(),
  setup(props, context) {
    // 判断是否携带文本
    const withText = computed(() => props.direction === "horizontal" && context.slots.default);

    // 计算 class 样式
    const classPrefix = useClassPrefix("divider", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.type}`]: props.type,
        [`${classPrefix.value}-${props.direction}`]: props.direction,
        [`${classPrefix.value}-with-text`]: withText.value,
        [`${classPrefix.value}-with-text-${props.orientation}`]: withText.value,
        [`${classPrefix.value}-plain`]: props.plain
      };
    });
    classes.elText = computed(() => `${classPrefix.value}-text`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (props.size) {
        const size = is.string(props.size) ? props.size : `${props.size}px`;

        if (props.direction === "horizontal") {
          style.width = size;
        }
        else {
          style.height = size;
        }
      }

      if (props.gutter) {
        const gutter = is.string(props.gutter) ? props.gutter : `${props.gutter}px`;

        if (props.direction === "horizontal") {
          style.marginTop = style.marginBottom = gutter;
        }
        else {
          style.marginLeft = style.marginRight = gutter;
        }
      }

      return style;
    });

    // 渲染
    return () => {
      let children: VueNodeAtom;

      if (withText.value) {
        children = (
          <div class={classes.elText.value}>{context.slots.default?.()}</div>
        );
      }

      return (
        <div class={classes.el.value} style={styles.el.value}>
          {children}
        </div>
      );
    };
  }
});
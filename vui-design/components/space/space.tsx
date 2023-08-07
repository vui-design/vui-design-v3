import type { ExtractPropTypes, PropType, HTMLAttributes, CSSProperties, ComputedRef } from "vue";
import type { Direction, Justify, Align, Gutter } from "./types";
import { defineComponent, computed } from "vue";
import { directions, justifys, aligns } from "./constants";
import { flatten } from "../../utils/vue";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 设置 Space 为块级元素，宽度撑满父元素
    block: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 项目排列方向
    direction: {
      type: String as PropType<Direction>,
      validator: (direction: Direction) => directions.includes(direction),
      default: "horizontal"
    },
    // 是否自动换行
    wrap: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 项目水平排列方式
    justify: {
      type: String as PropType<Justify>,
      validator: (justify: Justify) => justifys.includes(justify),
      default: "start"
    },
    // 项目垂直对齐方式
    align: {
      type: String as PropType<Align>,
      validator: (align: Align) => aligns.includes(align),
      default: "center"
    },
    // 是否在项目间插入分割线，可设置为具体的数值，用于指定分割线高度
    divider: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: false
    },
    // 项目间距
    gutter: {
      type: [String, Number, Array] as PropType<Gutter | [Gutter, Gutter]>,
      default: "medium"
    }
  };
};

export type SpaceProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-space",
  props: createProps(),
  setup(props, context) {
    // 是否显示分割线
    const withDivider = computed(() => props.direction === "horizontal" && !!props.divider);

    // 计算 class 样式
    const classPrefix = useClassPrefix("space", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-block`]: props.block,
        [`${classPrefix.value}-${props.direction}`]: props.direction,
        [`${classPrefix.value}-wrap`]: props.direction === "horizontal" && props.wrap,
        [`${classPrefix.value}-justify-${props.justify}`]: props.direction === "horizontal" && props.justify,
        [`${classPrefix.value}-align-${props.align}`]: props.direction === "horizontal" && props.align,
        [`${classPrefix.value}-with-divider`]: withDivider.value
      };
    });
    classes.elItem = computed(() => `${classPrefix.value}-item`);
    classes.elDivider = computed(() => `${classPrefix.value}-divider`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (is.string(props.gutter) || is.number(props.gutter) || is.array(props.gutter)) {
        const guttets = utils.getGutters(props.gutter, withDivider.value);

        style.columnGap = guttets[0];
        style.rowGap = guttets[1];
      }

      return style; 
    });

    styles.elDivider = computed(() => {
      let style: CSSProperties = {};

      if (props.direction === "horizontal" && props.divider) {
        if (is.string(props.divider) || is.number(props.divider)) {
          style.height = is.string(props.divider) ? (props.divider as string) : `${props.divider}px`;
        }
      }

      return style; 
    });

    // 渲染
    return () => {
      const elements = flatten(context.slots.default?.());

      if (elements.length === 0) {
        return null;
      }

      let children: any[] = [];

      elements.forEach((element: any, elementIndex: number) => {
        const notFirst = elementIndex > 0;

        if (notFirst && props.divider) {
          children.push(
            <i class={classes.elDivider.value} style={styles.elDivider.value}></i>
          );
        }

        children.push(
          <div class={classes.elItem.value}>
            {element}
          </div>
        );
      });

      return (
        <div class={classes.el.value} style={styles.el.value}>
          {children}
        </div>
      );
    };
  }
});
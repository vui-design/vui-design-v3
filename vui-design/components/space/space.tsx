import type { ExtractPropTypes, PropType, HTMLAttributes, CSSProperties, ComputedRef } from "vue";
import type { Direction, Justify, Align, Gutter } from "./types";
import { defineComponent, computed } from "vue";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import { flatten } from "../../utils/vue";
import { directions, justifys, aligns, gutters } from "./constants";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
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
      default: "middle"
    },
    // 是否在项目间插入分割线，可设置为具体的数值，用于指定分割线高度
    divider: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: false
    },
    // 间隔大小
    gutter: {
      type: [String, Number, Array] as PropType<string | number | [string | number, string | number]>,
      default: "medium"
    },
    // 是否自动换行
    wrap: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type SpaceProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-space",
  props: createProps(),
  setup(props, context) {
    // 判断间距大小为预设值，还是自定义值
    const withPresetGutter = computed(() => props.gutter && gutters.includes(props.gutter as string));
    const withCustomGutter = computed(() => props.gutter && gutters.indexOf(props.gutter as string) === -1);

    // 计算间距大小
    const gutter = computed(() => is.string(props.gutter) ? props.gutter : `${props.gutter}px`);

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "space"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-block`]: props.block,
        [`${className.value}-${props.direction}`]: props.direction,
        [`${className.value}-justify-${props.justify}`]: props.direction === "horizontal" && props.justify,
        [`${className.value}-align-${props.align}`]: props.direction === "horizontal" && props.align,
        [`${className.value}-with-divider`]: props.direction === "horizontal" && props.divider,
        [`${className.value}-${props.gutter}`]: withPresetGutter.value
      };
    });
    classes.elItem = computed(() => `${className.value}-item`);
    classes.elDivider = computed(() => `${className.value}-divider`);

    // 计算项目和分割线的 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elItem = computed(() => {
      let style: CSSProperties = {};

      if (!props.divider && withCustomGutter) {
        const property = props.direction === "horizontal" ? "marginLeft" : "marginTop";

        style[property] = gutter.value as string;
      }

      return style;
    });

    styles.elDivider = computed(() => {
      let style: CSSProperties = {};

      if (props.direction === "horizontal" && props.divider) {
        if (is.string(props.divider) || is.number(props.divider)) {
          style.height = is.string(props.divider) ? (props.divider as string) : `${props.divider}px`;
        }
  
        if (withCustomGutter) {
          style.marginLeft = style.marginRight = gutter.value as string;
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
          <div class={classes.elItem.value} style={notFirst ? styles.elItem.value : undefined}>{element}</div>
        );
      });

      return (
        <div class={classes.el.value}>{children}</div>
      );
    };
  }
});
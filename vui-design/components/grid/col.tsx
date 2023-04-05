import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Flex, ColResponsive } from "./types";
import { defineComponent, inject, computed } from "vue";
import { RowInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

const parseFlex = function(flex: Flex): string {
  if (is.number(flex)) {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
};

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // Flex 布局填充
    flex: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 栅格占位格数，可选值为 0~24 的整数，为 0 时相当于 display: none;
    span: {
      type: [String, Number] as PropType<string | number>,
      default: 24
    },
    // 栅格左侧的间隔格数，间隔内不可以有栅格
    offset: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 栅格向右移动格数
    push: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 栅格向左移动格数
    pull: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 栅格顺序，仅在 Flex 布局模式下有效
    order: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // <576px 响应式栅格数或者栅格属性对象，例如 {span: 4, offset: 4}
    xs: {
      type: [String, Number, Object] as PropType<string | number | ColResponsive>,
      default: undefined
    },
    // ≥576px 响应式栅格数或者栅格属性对象，例如 {span: 4, offset: 4}
    sm: {
      type: [String, Number, Object] as PropType<string | number | ColResponsive>,
      default: undefined
    },
    // ≥768px 响应式栅格数或者栅格属性对象，例如 {span: 4, offset: 4}
    md: {
      type: [String, Number, Object] as PropType<string | number | ColResponsive>,
      default: undefined
    },
    // ≥992px 响应式栅格数或者栅格属性对象，例如 {span: 4, offset: 4}
    lg: {
      type: [String, Number, Object] as PropType<string | number | ColResponsive>,
      default: undefined
    },
    // ≥1200px 响应式栅格数或者栅格属性对象，例如 {span: 4, offset: 4}
    xl: {
      type: [String, Number, Object] as PropType<string | number | ColResponsive>,
      default: undefined
    },
    // ≥1600px 响应式栅格数或者栅格属性对象，例如 {span: 4, offset: 4}
    xxl: {
      type: [String, Number, Object] as PropType<string | number | ColResponsive>,
      default: undefined
    },
    // ≥2000px 响应式栅格数或者栅格属性对象，例如 {span: 4, offset: 4}
    xxxl: {
      type: [String, Number, Object] as PropType<string | number | ColResponsive>,
      default: undefined
    }
  };
};

export type ColProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-col",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiRow = inject(RowInjectionKey, undefined);

    // 计算 class 样式
    const classPrefix = useClassPrefix("col", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      let classNames: string[] = [];

      classNames.push(`${classPrefix.value}`);

      ["span", "offset", "push", "pull", "order"].forEach(key => {
        const value = props[key];

        if (is.string(value) || is.number(value)) {
          classNames.push(key === "span" ? `${classPrefix.value}-${value}` : `${classPrefix.value}-${key}-${value}`);
        }
      });

      ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(breakpoint => {
        let size = props[breakpoint];

        if (is.string(size) || is.number(size)) {
          classNames.push(`${classPrefix.value}-${breakpoint}-${size}`);
        }
        else if (is.object(size)) {
          Object.keys(size).forEach(key => {
            classNames.push(key === "span" ? `${classPrefix.value}-${breakpoint}-${size[key]}` : `${classPrefix.value}-${breakpoint}-${key}-${size[key]}`);
          });
        }
      });

      return classNames;
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (vuiRow && vuiRow.gutter && vuiRow.gutter[0] > 0) {
        style.paddingLeft = style.paddingRight = (vuiRow.gutter[0] / 2) + "px";
      }

      if (vuiRow && vuiRow.gutter && vuiRow.gutter[1] > 0 && !vuiRow.isSupportRowGap) {
        style.paddingTop = style.paddingBottom = (vuiRow.gutter[1] / 2) + "px";
      }

      if (props.flex) {
        style.flex = parseFlex(props.flex);

        if (vuiRow && vuiRow.wrap === false && !style.minWidth) {
          style.minWidth = 0;
        }
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value} style={styles.el.value}>{context.slots.default?.()}</div>
      );
    };
  }
});
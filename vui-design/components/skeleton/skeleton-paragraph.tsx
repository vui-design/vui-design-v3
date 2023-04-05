import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent, computed } from "vue";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import range from "../../utils/range";

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
    // 段落占位图的行数
    rows: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 段落占位图的宽度
    width: {
      type: [String, Number, Array] as PropType<string | number | Array<string | number>>,
      default: undefined
    }
  };
};

export type SkeletonParagraphProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-skeleton-paragraph",
  props: createProps(),
  setup(props, context) {
    // 
    const getRowWidth = (index: number) => {
      if (is.array(props.width)) {
        return props.width[index];
      }

      if (index === (props.rows! - 1)) {
        return props.width;
      }

      return undefined;
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("skeleton-paragraph", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-animated`]: props.animated
      };
    });

    // 渲染
    return () => {
      const rows = range(0, props.rows);

      return (
        <div class={classes.el.value}>
          {
            rows.map((row: number, rowIndex: number) => {
              const width = getRowWidth(rowIndex);
              const style: CSSProperties = {
                width: is.number(width) ? `${width}px` : width
              };

              return (
                <div key={rowIndex} style={style}></div>
              );
            })
          }
        </div>
      );
    };
  }
});
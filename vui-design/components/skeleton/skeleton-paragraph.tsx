import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent, computed } from "vue";
import is from "../../utils/is";
import range from "../../utils/range";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
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
    const className = computed(() => getClassName(props.classNamePrefix, "skeleton-paragraph"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-animated`]: props.animated
      };
    });

    // 渲染
    return () => {
      const rows = range(0, props.rows);

      return (
        <div class={classes.el.value}>
          {
            rows.map((row: number, index: number) => {
              const width = getRowWidth(index);
              const style: CSSProperties = {
                width: is.number(width) ? `${width}px` : width
              };

              return (
                <div key={index} style={style}></div>
              );
            })
          }
        </div>
      );
    };
  }
});
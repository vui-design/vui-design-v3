import type { ExtractPropTypes, PropType, HTMLAttributes, ComputedRef } from "vue";
import { defineComponent, computed } from "vue";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import "../../icons";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 图标类型
    type: {
      type: String as PropType<string>,
      default: undefined
    },
    // 图标颜色
    color: {
      type: String as PropType<string>,
      default: undefined
    },
    // 图标尺寸
    size: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    }
  };
};

export type IconProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-icon",
  props: createProps(),
  setup(props) {
    // xlinkHref
    const xlinkHref = computed(() => "#icon-" + props.type);

    // 计算字体大小
    const fontSize = computed(() => is.string(props.size) ? props.size : `${props.size}px`);

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "icon"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${props.type}`]: props.type
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      return {
        color: props.color,
        fontSize: fontSize.value
      };
    });

    // 渲染
    return () => {
      const attributes = {
        class: classes.el.value,
        style: styles.el.value
      };

      return (
        <i {...attributes}>
          <svg aria-hidden="true">
            <use xlinkHref={xlinkHref.value} />
          </svg>
        </i>
      );
    };
  }
});
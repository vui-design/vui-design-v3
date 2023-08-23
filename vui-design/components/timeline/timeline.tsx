import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Mode } from "./types";
import { defineComponent, computed } from "vue";
import { modes } from "./constants";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 设置时间轴点和主体内容的相对位置
    mode: {
      type: String as PropType<Mode>,
      validator: (mode: Mode) => modes.includes(mode),
      default: "left"
    },
    // 节点倒序排列
    reverse: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 设置时间轴点和主体内容的相对位置
    pending: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type TimelineProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-timeline",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("timeline", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.mode}`]: true,
        [`${classPrefix.value}-reverse`]: props.reverse,
        [`${classPrefix.value}-pending`]: props.pending
      };
    });

    // 渲染
    return () => {
      const children = context.slots.default?.() ?? [];

      if (props.reverse) {
        children.reverse();
      }

      return (
        <div class={classes.el.value}>
          {children}
        </div>
      );
    };
  }
});
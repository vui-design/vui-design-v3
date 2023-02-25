import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, computed } from "vue";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type ContentProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-layout-content",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "layout-content"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true
      }
    });

    // 渲染
    return () => {
      return (
        <main class={classes.el.value}>{context.slots.default?.()}</main>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, computed } from "vue";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type LayoutContentProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-layout-content",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("layout-content", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true
      }
    });

    // 渲染
    return () => {
      return (
        <main class={classes.el.value}>
          {context.slots.default?.()}
        </main>
      );
    };
  }
});
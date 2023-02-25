import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import { defineComponent, ref, watch } from "vue";

export const createProps = () => {
  return {
    // 是否渲染
    render: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type LazyRenderProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-lazy-render",
  props: createProps(),
  setup(props, context) {
    const maybeRender = ref(props.render);

    watch(() => props.render, value => {
      if (!value || maybeRender.value) {
        return;
      }

      maybeRender.value = true;
    });

    return () => {
      return maybeRender.value ? context.slots.default?.() : null;
    };
  },
});
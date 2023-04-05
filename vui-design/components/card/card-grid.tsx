import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, inject, computed, onBeforeMount, onBeforeUnmount } from "vue";
import { CardInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";
import guid from "../../utils/guid";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type CardGridProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-card-grid",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiCard = inject(CardInjectionKey, undefined);

    // 基础属性
    const id = guid();

    // 组件挂载之前执行
    onBeforeMount(() => {
      vuiCard?.addGridRef?.(id);
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiCard?.removeGridRef?.(id);
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("card-grid", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
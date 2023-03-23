import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, provide, toRefs, reactive, computed } from "vue";
import getClassName from "../../utils/getClassName";
import { BreadcrumbInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 自定义分隔符
    separator: {
      type: String as PropType<string>,
      default: "/"
    }
  };
};

export type BreadcrumbProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-breadcrumb",
  props: createProps(),
  setup(props, context) {
    // 解构属性
    const { separator } = toRefs(props);

    // 向后代组件注入当前组件
    provide(BreadcrumbInjectionKey, reactive({
      separator
    }));

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "breadcrumb"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);

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
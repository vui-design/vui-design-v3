import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, provide, ref, reactive, computed } from "vue";
import { LayoutInjectionKey } from "./context";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 表示子元素里含有 Sider 组件，一般不用指定；可用于服务端渲染时避免样式闪动
    withSider: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type LayoutProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-layout",
  props: createProps(),
  setup(props, context) {
    // 向后代组件注入当前组件
    const siderRefs = ref<string[]>([]);
    const addSiderRef = (id: string) => siderRefs.value.push(id);
    const removeSiderRef = (id: string) => siderRefs.value.splice(siderRefs.value.indexOf(id), 1);

    provide(LayoutInjectionKey, reactive({
      addSiderRef,
      removeSiderRef
    }));

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "layout"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-with-sider`]: is.boolean(props.withSider) ? props.withSider : (siderRefs.value.length > 0)
      }
    });

    // 渲染
    return () => {
      return (
        <section class={classes.el.value}>
          {context.slots.default?.()}
        </section>
      );
    };
  }
});
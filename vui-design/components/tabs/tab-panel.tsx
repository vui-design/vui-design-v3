import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes } from "vue";
import type { Key } from "../../types";
import type { Tab } from "./types";
import { defineComponent, inject, computed, onMounted, onUpdated, onBeforeUnmount } from "vue";
import { TabsInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";
import useKey from "../../hooks/useKey";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 页签唯一标识
    key: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 页签索引
    index: {
      type: Number as PropType<number>,
      default: 0
    },
    // 页签图标类型/图标
    icon: {
      type: [String, Function] as PropType<string | RenderFunction>,
      default: undefined
    },
    // 页签标题
    title: {
      type: [String, Number, Function] as PropType<string | number | RenderFunction>,
      default: undefined
    },
    // 是否允许关闭当前页签，默认继承父级 Tabs 组件的 closable 属性
    closable: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 是否禁用当前页签
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 隐藏时销毁 TabPanel 的子元素，默认继承父级 Tabs 组件的 destroyOnHide 属性
    destroyOnHide: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type TabPanelProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-tab-panel",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiTabs = inject(TabsInjectionKey, undefined);

    // 唯一标识
    const key = useKey();

    // 内部状态
    const active = computed(() => key.value === vuiTabs?.activeKey);
    const closable = computed(() => props.closable ?? vuiTabs?.closable ?? false);
    const destroyOnHide = computed(() => props.destroyOnHide ?? vuiTabs?.destroyOnHide ?? false);

    // 
    const getTab = () => {
      return {
        key: key.value,
        index: props.index,
        icon: props.icon ?? context.slots.icon,
        title: props.title ?? context.slots.title,
        closable: closable.value,
        disabled: props.disabled
      } as Tab;
    };

    // 组件挂载完成后执行
    onMounted(() => {
      vuiTabs?.addTab(getTab());
    });

    // 组件更新完成后执行
    onUpdated(() => {
      vuiTabs?.addTab(getTab());
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiTabs?.removeTab(key.value);
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("tabs-panel", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-active`]: active.value,
        [`${classPrefix.value}-disabled`]: props.disabled
      };
    });

    // 渲染
    return () => {
      if (!active.value && destroyOnHide.value) {
        return;
      }

      return (
        <div class={classes.el.value}>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent, provide, inject, reactive, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import { DropdownInjectionKey } from "../dropdown/context";
import { SubmenuInjectionKey, MenuItemGroupInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";
import useLevel from "./hooks/useLevel";
import useIndent from "./hooks/useIndent";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标题
    title: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type MenuItemGroupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-menu-item-group",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiDropdown = inject(DropdownInjectionKey, undefined);
    const vuiSubmenu = inject(SubmenuInjectionKey, undefined);
    const vuiMenuItemGroup = inject(MenuItemGroupInjectionKey, undefined);

    // 层级
    const level = useLevel();
    // 缩进
    const indent = useIndent(level);

    // 内部状态
    const disabled = computed(() => vuiSubmenu?.disabled || vuiMenuItemGroup?.disabled || props.disabled);

    // 向后代组件注入当前组件
    provide(MenuItemGroupInjectionKey, reactive({
      disabled
    }));

    // 计算 class 样式
    const classPrefix = useClassPrefix(vuiDropdown ? "dropdown-menu-item-group" : "menu-item-group", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elHeader = computed(() => `${classPrefix.value}-header`);
    classes.elBody = computed(() => `${classPrefix.value}-body`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elHeader = computed(() => {
      let style: CSSProperties = {};

      if (indent.value > 0) {
        style.paddingLeft = `${indent.value}px`;
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <div class={classes.elHeader.value} style={styles.elHeader.value}>
            {getSlotProp(context.slots, props, "title")}
          </div>
          <div class={classes.elBody.value}>
            {context.slots.default?.()}
          </div>
        </div>
      );
    };
  }
});
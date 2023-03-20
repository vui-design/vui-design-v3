import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { Key } from "../../types";
import type { Trigger } from "../popup/types";
import { defineComponent, inject, computed } from "vue";
import VuiSubmenuPopup from "./submenu-popup";
import VuiSubmenuInline from "./submenu-inline";
import useKey from "../../hooks/useKey";
import useLevel from "./hooks/useLevel";
import { triggers } from "../popup/constants";
import { MenuInjectionKey, SubmenuInjectionKey, MenuItemGroupInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 唯一标识
    key: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标题
    title: {
      type: String as PropType<string>,
      default: undefined
    },
    // 触发方式
    trigger: {
      type: String as PropType<Trigger>,
      validator: (trigger: Trigger) => triggers.includes(trigger),
      default: "hover"
    },
    // 弹出框的挂载容器
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<string | HTMLElement>,
      default: "body"
    },
    // 弹出动画
    animations: {
      type: Array as PropType<string[]>,
      default: ["vui-menu-submenu-scale", "vui-menu-submenu-collapse"]
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type SubmenuProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-submenu",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiMenu = inject(MenuInjectionKey, undefined);
    const vuiSubmenu = inject(SubmenuInjectionKey, undefined);
    const vuiMenuItemGroup = inject(MenuItemGroupInjectionKey, undefined);

    // 唯一标识
    const key = useKey();

    // 层级
    const level = useLevel();

    // 内部状态
    const disabled = computed(() => vuiSubmenu?.disabled || vuiMenuItemGroup?.disabled || props.disabled);

    // 渲染
    return () => {
      if (vuiMenu?.mode === "horizontal" || vuiMenu?.mode === "vertical" || (vuiMenu?.mode === "inline" && vuiMenu?.collapsed)) {
        return (
          <VuiSubmenuPopup
            classNamePrefix={props.classNamePrefix}
            key={key.value}
            level={level.value}
            icon={props.icon}
            title={props.title}
            trigger={props.trigger}
            getPopupContainer={props.getPopupContainer}
            animation={props.animations[0]}
            disabled={disabled.value}
            v-slots={{...context.slots}}
          />
        );
      }
      else {
        return (
          <VuiSubmenuInline
            classNamePrefix={props.classNamePrefix}
            key={key.value}
            level={level.value}
            icon={props.icon}
            title={props.title}
            animation={props.animations[1]}
            disabled={disabled.value}
            v-slots={{...context.slots}}
          />
        );
      }
    };
  }
});
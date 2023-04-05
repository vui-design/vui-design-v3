import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Key } from "../../types";
import type { Trigger } from "../popup/types";
import { defineComponent, provide, inject, toRefs, reactive, computed, onBeforeMount, onBeforeUnmount } from "vue";
import { getSlotProp } from "../../utils/vue";
import { triggers } from "../popup/constants";
import { DropdownInjectionKey } from "../dropdown/context";
import { MenuInjectionKey, SubmenuInjectionKey } from "./context";
import VuiIcon from "../icon";
import VuiPopup from "../popup";
import useClassPrefix from "../../hooks/useClassPrefix";
import useKey from "../../hooks/useKey";
import useIndent from "./hooks/useIndent";
import useRefs from "./hooks/useRefs";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 唯一标识
    key: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 层级
    level: {
      type: Number as PropType<number>,
      default: 1
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
    animation: {
      type: String as PropType<string>,
      default: "vui-menu-submenu-scale"
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type SubmenuPopupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-submenu-popup",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiDropdown = inject(DropdownInjectionKey, undefined);
    const vuiMenu = inject(MenuInjectionKey, undefined);
    const vuiSubmenu = inject(SubmenuInjectionKey, undefined);

    // 
    const { level, disabled } = toRefs(props);

    // 唯一标识
    const key = useKey();
    // 缩进
    const indent = useIndent(props.level);
    // 用于更新自身及父级 Submenu 的下属 Submenu 或 MenuItem 集合
    const { menuItems, addSubmenu, removeSubmenu, addMenuItem, removeMenuItem } = useRefs();

    // 内部状态
    const open = computed(() => vuiMenu?.openKeys?.includes(key.value));
    const selected = computed(() => vuiMenu?.selectedKey && menuItems.value.findIndex(menuItem => menuItem.key === vuiMenu?.selectedKey) > -1);

    // 向后代组件注入当前组件
    provide(SubmenuInjectionKey, reactive({
      level,
      disabled,
      addSubmenu,
      removeSubmenu,
      addMenuItem,
      removeMenuItem
    }));

    // onChange 事件回调
    const handleChange = (open: boolean) => {
      if (props.disabled) {
        return;
      }

      vuiMenu?.onToggle?.(key.value, level.value, open);
    };

    // 组件挂载之前执行
    onBeforeMount(() => {
      vuiMenu?.addSubmenu?.(key.value, level.value);
      vuiSubmenu?.addSubmenu?.(key.value, level.value);
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiMenu?.removeSubmenu?.(key.value);
      vuiSubmenu?.removeSubmenu?.(key.value);
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix(vuiDropdown ? "dropdown-menu-submenu" : "menu-submenu", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-open`]: open.value,
        [`${classPrefix.value}-selected`]: selected.value,
        [`${classPrefix.value}-disabled`]: props.disabled
      };
    });
    classes.elHeader = computed(() => `${classPrefix.value}-header`);
    classes.elIcon = computed(() => `${classPrefix.value}-icon`);
    classes.elTitle = computed(() => `${classPrefix.value}-title`);
    classes.elArraw = computed(() => vuiMenu?.mode === "horizontal" && props.level === 1 ? `${classPrefix.value}-arrow-vertical` : `${classPrefix.value}-arrow-horizontal`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elHeader = computed(() => {
      let style: CSSProperties = {};

      if (indent.value > 0) {
        style.paddingLeft = `${indent.value}px`;
      }

      return style;
    });

    // 计算内嵌菜单 class 样式
    const menuClassPrefix = useClassPrefix(vuiDropdown ? "dropdown-menu" : "menu", props);
    let menuClasses: Record<string, ComputedRef> = {};

    menuClasses.el = computed(() => {
      return {
        [`${menuClassPrefix.value}`]: true,
        [`${menuClassPrefix.value}-popup`]: true,
        [`${menuClassPrefix.value}-vertical`]: true,
        [`${menuClassPrefix.value}-${vuiMenu?.color}`]: vuiMenu?.color
      };
    });

    // 渲染
    return () => {
      // 
      let header = [];
      let icon;

      if (context.slots.icon) {
        icon = context.slots.icon();
      }
      else if (props.icon) {
        icon = (
          <VuiIcon type={props.icon} />
        );
      }

      if (icon) {
        header.push(
          <div class={classes.elIcon.value}>
            {icon}
          </div>
        );
      }

      header.push(
        <>
          <div class={classes.elTitle.value}>
            {getSlotProp(context.slots, props, "title")}
          </div>
          <div class={classes.elArraw.value}></div>
        </>
      );

      // 
      const slots = {
        content: () => (
          <div class={menuClasses.el.value}>
            {context.slots.default?.()}
          </div>
        )
      };

      // 
      return (
        <div class={classes.el.value}>
          <VuiPopup
            classPrefix={props.classPrefix}
            name={vuiDropdown ? "dropdown-menu-submenu-body" : "menu-submenu-body"}
            visible={open.value}
            trigger={props.trigger}
            getPopupContainer={props.getPopupContainer}
            placement={vuiMenu?.mode === "horizontal" && props.level === 1 ? "bottom-left" : "right-top"}
            animation={props.animation}
            offset={4}
            showArrow={false}
            autofitPopupMinWidth={vuiMenu?.mode === "horizontal" && props.level === 1}
            disabled={props.disabled}
            onChange={handleChange}
            v-slots={slots}
          >
            <div class={classes.elHeader.value} style={styles.elHeader.value}>
              {header}
            </div>
          </VuiPopup>
        </div>
      );
    };
  }
});
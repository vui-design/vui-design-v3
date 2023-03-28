import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Key } from "../../types";
import { defineComponent, inject, computed, onBeforeMount, onBeforeUnmount } from "vue";
import { DropdownInjectionKey } from "../dropdown/context";
import { MenuInjectionKey, SubmenuInjectionKey, MenuItemGroupInjectionKey } from "./context";
import VuiIcon from "../icon";
import VuiTooltip from "../tooltip";
import useKey from "../../hooks/useKey";
import useLevel from "./hooks/useLevel";
import useIndent from "./hooks/useIndent";
import getClassName from "../../utils/getClassName";

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
    // 点击后的跳转地址，指定此属性后按钮的行为和 a 链接一致
    href: {
      type: String as PropType<string>,
      default: undefined
    },
    // 同 a 链接的 target 属性
    target: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否为危险菜单项
    danger: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type MenuItemProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-menu-item",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiDropdown = inject(DropdownInjectionKey, undefined);
    const vuiMenu = inject(MenuInjectionKey, undefined);
    const vuiSubmenu = inject(SubmenuInjectionKey, undefined);
    const vuiMenuItemGroup = inject(MenuItemGroupInjectionKey, undefined);

    // 唯一标识
    const key = useKey();
    // 层级
    const level = useLevel();
    // 缩进
    const indent = useIndent(level);

    // 内部状态
    const collapsed = computed(() => (vuiMenu?.mode === "vertical" || vuiMenu?.mode === "inline") && vuiMenu?.collapsed && (level.value === 1));
    const selected = computed(() => vuiMenu?.selectedKey === key.value);
    const disabled = computed(() => vuiSubmenu?.disabled || vuiMenuItemGroup?.disabled || props.disabled);

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      if (disabled.value) {
        return e.preventDefault();
      }

      vuiMenu?.onSelect?.(key.value, level.value);
    };

    // 组件挂载之前执行
    onBeforeMount(() => {
      vuiMenu?.addMenuItem?.(key.value, level.value);
      vuiSubmenu?.addMenuItem?.(key.value, level.value);
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiMenu?.removeMenuItem?.(key.value);
      vuiSubmenu?.removeMenuItem?.(key.value);
    });

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, vuiDropdown ? "dropdown-menu-item" : "menu-item"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-danger`]: props.danger,
        [`${className.value}-selected`]: selected.value,
        [`${className.value}-disabled`]: disabled.value
      };
    });
    classes.elIcon = computed(() => `${className.value}-icon`);
    classes.elTitle = computed(() => `${className.value}-title`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (indent.value > 0) {
        style.paddingLeft = `${indent.value}px`;
      }

      return style;
    });

    // 渲染
    return () => {
      // 
      let children = [];
      let icon;
      let title = context.slots.default?.() ?? props.title;

      if (context.slots.icon) {
        icon = context.slots.icon();
      }
      else if (props.icon) {
        icon = (
          <VuiIcon type={props.icon} />
        );
      }

      if (icon) {
        children.push(
          <div class={classes.elIcon.value}>
            {icon}
          </div>
        );
      }

      children.push(
        <div class={classes.elTitle.value}>
          {title}
        </div>
      );

      // 
      let menuItem;
      let menuItemAttributes: Record<string, any> = {
        ...context.attrs,
        class: [classes.el.value, context.attrs.class],
        style: [styles.el.value, context.attrs.style],
        onClick: handleClick
      };

      if (props.href) {
        menuItem = (
          <a href={props.href} target={props.target} {...menuItemAttributes}>
            {children}
          </a>
        );
      }
      else {
        menuItem = (
          <div {...menuItemAttributes}>
            {children}
          </div>
        );
      }

      // 
      if (collapsed.value) {
        const slots = {
          content: () => title
        };

        return (
          <VuiTooltip placement="right" color={vuiMenu?.color} disabled={disabled.value} v-slots={slots}>
            {menuItem}
          </VuiTooltip>
        );
      }
      else {
        return menuItem;
      }
    };
  }
});
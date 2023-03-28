import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Key } from "../../types";
import { Transition, defineComponent, provide, inject, toRefs, reactive, computed, onBeforeMount, onBeforeUnmount } from "vue";
import { getSlotProp } from "../../utils/vue";
import { DropdownInjectionKey } from "../dropdown/context";
import { MenuInjectionKey, SubmenuInjectionKey } from "./context";
import VuiIcon from "../icon";
import useKey from "../../hooks/useKey";
import useIndent from "./hooks/useIndent";
import useRefs from "./hooks/useRefs";
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
    // 弹出动画
    animation: {
      type: String as PropType<string>,
      default: "vui-menu-submenu-collapse"
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type SubmenuInlineProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-submenu-inline",
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

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      vuiMenu?.onToggle?.(key.value, level.value, !open.value);
    };

    // 打开前事件回调
    const handleBeforeOpen = (el: Element) => {
      (el as HTMLDivElement).style.height = "0px";
    };

    // 打开事件回调
    const handleOpen = (el: Element) => {
      (el as HTMLDivElement).style.height = el.scrollHeight + "px";
    };

    // 打开后事件回调
    const handleAfterOpen = (el: Element) => {
      (el as HTMLDivElement).style.height = "";
    };

    // 关闭前事件回调
    const handleBeforeClose = (el: Element) => {
      (el as HTMLDivElement).style.height = el.scrollHeight + "px";
    };

    // 关闭事件回调
    const handleClose = (el: Element) => {
      (el as HTMLDivElement).style.height = "0px";
    };

    // 关闭后事件回调
    const handleAfterClose = (el: Element) => {
      (el as HTMLDivElement).style.height = "";
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
    const className = computed(() => getClassName(props.classNamePrefix, vuiDropdown ? "dropdown-menu-submenu" : "menu-submenu"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-open`]: open.value,
        [`${className.value}-selected`]: selected.value,
        [`${className.value}-disabled`]: props.disabled
      };
    });
    classes.elHeader = computed(() => `${className.value}-header`);
    classes.elIcon = computed(() => `${className.value}-icon`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elArraw = computed(() => `${className.value}-arrow-vertical`);
    classes.elBody = computed(() => `${className.value}-body`);

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
    const mClassName = computed(() => getClassName(props.classNamePrefix, vuiDropdown ? "dropdown-menu" : "menu"));
    let mClasses: Record<string, ComputedRef> = {};

    mClasses.el = computed(() => {
      return {
        [`${mClassName.value}`]: true,
        [`${mClassName.value}-inline`]: true,
        [`${mClassName.value}-vertical`]: true,
        [`${mClassName.value}-${vuiMenu?.color}`]: vuiMenu?.color
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
      return (
        <div class={classes.el.value}>
          <div class={classes.elHeader.value} style={styles.elHeader.value} onClick={handleClick}>
            {header}
          </div>
          <Transition
            name={props.animation}
            onBeforeEnter={handleBeforeOpen}
            onEnter={handleOpen}
            onAfterEnter={handleAfterOpen}
            onBeforeLeave={handleBeforeClose}
            onLeave={handleClose}
            onAfterLeave={handleAfterClose}
          >
            <div v-show={open.value} class={classes.elBody.value}>
              <div class={mClasses.el.value}>
                {context.slots.default?.()}
              </div>
            </div>
          </Transition>
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Key } from "../../types";
import type { Trigger } from "../popup/types";
import { defineComponent, provide, inject, ref, reactive, computed, onBeforeMount, onBeforeUnmount } from "vue";
import VuiIcon from "../icon";
import VuiPopup from "../popup";
import useKey from "../../hooks/useKey";
import useIndent from "./hooks/useIndent";
import getClassName from "../../utils/getClassName";
import { getSlotProp } from "../../utils/vue";
import { triggers } from "../popup/constants";
import { colors } from "./constants";
import { MenuInjectionKey, SubmenuInjectionKey } from "./context";

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
    const vuiMenu = inject(MenuInjectionKey, undefined);
    const vuiSubmenu = inject(SubmenuInjectionKey, undefined);

    // 唯一标识
    const key = useKey();
    // 缩进
    const indent = useIndent(props.level);

    // 内部状态
    const submenus = ref<Key[]>([]);
    const items = ref<Key[]>([]);
    const open = computed(() => vuiMenu?.openKeys?.includes(key.value));
    const selected = computed(() => vuiMenu?.selectedKey && items.value.includes(vuiMenu?.selectedKey));

    // 用于更新自身及父级 Submenu 的下属 Submenu 集合
    const addSubmenu = (key: Key) => {
      submenus.value.push(key);
      vuiSubmenu?.addSubmenu?.(key);
    };
    const removeSubmenu = (key: Key) => {
      submenus.value.splice(submenus.value.indexOf(key), 1);
      vuiSubmenu?.removeSubmenu?.(key);
    };

    // 用于更新自身及父级 Submenu 的下属 MenuItem 集合
    const addMenuItem = (key: Key) => {
      items.value.push(key);
      vuiSubmenu?.addMenuItem?.(key);
    };
    const removeMenuItem = (key: Key) => {
      items.value.splice(items.value.indexOf(key), 1);
      vuiSubmenu?.removeSubmenu?.(key);
    };

    // 向后代组件注入当前组件
    provide(SubmenuInjectionKey, reactive({
      level: props.level,
      disabled: props.disabled,
      addSubmenu,
      removeSubmenu,
      addMenuItem,
      removeMenuItem
    }));

    // onChange 事件回调
    const handleChange = (visible: boolean) => {
      if (props.disabled) {
        return;
      }

      vuiMenu?.onToggle?.(key.value, visible);
    };

    // 组件挂载之前执行
    onBeforeMount(() => {
      vuiMenu?.addSubmenu?.(key.value);
      vuiSubmenu?.addSubmenu?.(key.value);
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiMenu?.removeSubmenu?.(key.value);
      vuiSubmenu?.removeSubmenu?.(key.value);
    });

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "menu-submenu"));
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
    classes.elArraw = computed(() => vuiMenu?.mode === "horizontal" && props.level === 1 ? `${className.value}-arrow-vertical` : `${className.value}-arrow-horizontal`);

    // 计算 style 样式
    const styles: Record<string, ComputedRef> = {};

    styles.elHeader = computed(() => {
      let style: CSSProperties = {};

      if (indent.value > 0) {
        style.paddingLeft = `${indent.value}px`;
      }

      return style;
    });

    // 计算内嵌菜单 class 样式
    const mClassName = computed(() => getClassName(props.classNamePrefix, "menu"));
    let mClasses: Record<string, ComputedRef> = {};

    mClasses.el = computed(() => {
      return {
        [`${mClassName.value}`]: true,
        [`${mClassName.value}-popup`]: true,
        [`${mClassName.value}-vertical`]: true,
        [`${mClassName.value}-${vuiMenu?.color}`]: vuiMenu?.color && colors.includes(vuiMenu.color)
      };
    });

    // 计算内嵌菜单 style 样式
    const mStyles: Record<string, ComputedRef> = {};

    mStyles.el = computed(() => {
      let style: CSSProperties = {};

      if (vuiMenu?.color && colors.indexOf(vuiMenu.color) === -1) {
        style.backgroundColor = vuiMenu.color;
      }

      return style;
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
          <div class={mClasses.el.value} style={mStyles.el.value}>
            {context.slots.default?.()}
          </div>
        )
      };

      // 
      return (
        <div class={classes.el.value}>
          <VuiPopup
            classNamePrefix={props.classNamePrefix}
            name="menu-submenu-body"
            visible={open.value}
            trigger={props.trigger}
            getPopupContainer={props.getPopupContainer}
            placement={vuiMenu?.mode === "horizontal" && props.level === 1 ? "bottom-left" : "right-top"}
            animation={props.animation}
            offset={10}
            showArrow={false}
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
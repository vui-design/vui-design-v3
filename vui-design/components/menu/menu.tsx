import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Key } from "../../types";
import type { Mode, Color } from "./types";
import { defineComponent, provide, ref, reactive, computed, watch } from "vue";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import { colors } from "./constants";
import { MenuInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 菜单类型
    mode: {
      type: String as PropType<Mode>,
      default: "horizontal"
    },
    // 主题颜色
    color: {
      type: String as PropType<string | Color>,
      default: "light"
    },
    // 层级之间的缩进量
    indent: {
      type: Number as PropType<number>,
      default: 22
    },
    // 默认是否折叠收起菜单
    defaultCollapsed: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否折叠收起菜单
    collapsed: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 默认展开的 Submenu 子菜单 key 值数组
    defaultOpenKeys: {
      type: Array as PropType<Key[]>,
      default: []
    },
    // 当前展开的 Submenu 子菜单 key 值数组
    openKeys: {
      type: Array as PropType<Key[]>,
      default: undefined
    },
    // 默认选中的 MenuItem 菜单项 key 值数组
    defaultSelectedKey: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 当前选中的 MenuItem 菜单项 key 值数组
    selectedKey: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    }
  };
};

export type MenuProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-menu",
  props: createProps(),
  emits: ["update:collapsed", "update:openKeys", "update:selectedKey", "toggle", "select"],
  setup(props, context) {
    // 内部状态
    const submenus =ref<Key[]>([]);
    const items =ref<Key[]>([]);
    const direction = computed(() => props.mode === "horizontal" ? "horizontal" : "vertical");

    // 折叠状态
    const defaultCollapsed = ref(props.defaultCollapsed);
    const collapsed = computed(() => props.collapsed ?? defaultCollapsed.value);

    watch(() => props.collapsed, newValue => {
      if (is.boolean(newValue)) {
        defaultCollapsed.value = newValue;
      }
    });

    // 展开的 Submenu 子菜单 key 值数组
    const defaultOpenKeys = ref(props.defaultOpenKeys);
    const openKeys = computed(() => props.openKeys ?? defaultOpenKeys.value);

    watch(() => props.openKeys, newValue => {
      if (is.array(newValue)) {
        defaultOpenKeys.value = newValue;
      }
    });

    // 选中的 MenuItem 菜单项 key 值数组
    const defaultSelectedKey = ref(props.defaultSelectedKey);
    const selectedKey = computed(() => props.selectedKey ?? defaultSelectedKey.value);

    watch(() => props.selectedKey, newValue => {
      if (is.string(newValue) || is.number(newValue)) {
        defaultSelectedKey.value = newValue;
      }
    });

    // 用于更新自身的下属 Submenu 集合
    const addSubmenu = (key: Key) => submenus.value.push(key);
    const removeSubmenu = (key: Key) => submenus.value.splice(submenus.value.indexOf(key), 1);

    // 用于更新自身的下属 MenuItem 集合
    const addMenuItem = (key: Key) => items.value.push(key);
    const removeMenuItem = (key: Key) => items.value.splice(items.value.indexOf(key), 1);

    // 
    const handleToggle = (key: Key, open: boolean) => {
      const index = defaultOpenKeys.value.indexOf(key);

      if (open && index === -1) {
        defaultOpenKeys.value.push(key);
      }
      else if (!open && index > -1) {
        defaultOpenKeys.value.splice(index, 1);
      }

      context.emit("update:openKeys", defaultOpenKeys.value);
      context.emit("toggle", key, open);
    };

    // 
    const handleSelect = (key: Key) => {
      // if (props.mode === "horizontal" || props.mode === "vertical" || (props.mode === "inline" && collapsed.value)) {
      //   defaultOpenKeys.value = [];
      // }

      defaultSelectedKey.value = key;

      context.emit("update:selectedKey", key);
      context.emit("select", key);
    };

    // 向后代组件注入当前组件
    provide(MenuInjectionKey, reactive({
      mode: props.mode,
      color: props.color,
      indent: props.indent,
      collapsed,
      openKeys,
      selectedKey,
      addSubmenu,
      removeSubmenu,
      addMenuItem,
      removeMenuItem,
      onToggle: handleToggle,
      onSelect: handleSelect
    }));

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "menu"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-root`]: true,
        [`${className.value}-${direction.value}`]: direction.value,
        [`${className.value}-${props.color}`]: props.color && colors.includes(props.color),
        [`${className.value}-collapsed`]: (props.mode === "vertical" || props.mode === "inline") && collapsed.value
      };
    });

    // 计算 style 样式
    const styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (props.color && colors.indexOf(props.color) === -1) {
        style.backgroundColor = props.color;
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value} style={styles.el.value}>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
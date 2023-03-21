import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Key } from "../../types";
import type { Mode, Color } from "./types";
import { defineComponent, provide, toRefs, ref, reactive, computed, watch } from "vue";
import useRefs from "./hooks/useRefs";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import { modes, colors } from "./constants";
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
      validator: (mode: Mode) => modes.includes(mode),
      default: "horizontal"
    },
    // 主题颜色
    color: {
      type: String as PropType<string | Color>,
      validator: (color: Color) => colors.includes(color),
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
    // 
    const { mode, color, indent } = toRefs(props);

    // 用于更新自身的下属 Submenu 或 MenuItem 集合
    const { addSubmenu, removeSubmenu, addMenuItem, removeMenuItem } = useRefs();

    // 内部状态
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

    // 打开 & 关闭 Submenu 事件回调
    const handleToggle = (key: Key, open: boolean) => {
      const index = defaultOpenKeys.value.indexOf(key);
      let nextOpenKeys = [...defaultOpenKeys.value];

      if (open && index === -1) {
        nextOpenKeys.push(key);
      }
      else if (!open && index > -1) {
        nextOpenKeys.splice(index, 1);
      }

      defaultOpenKeys.value = nextOpenKeys;

      context.emit("update:openKeys", nextOpenKeys);
      context.emit("toggle", nextOpenKeys, key, open);
    };

    // 点击 MenuItem 事件回调
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
      mode,
      color,
      indent,
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
        [`${className.value}-${props.color}`]: props.color,
        [`${className.value}-collapsed`]: (props.mode === "vertical" || props.mode === "inline") && collapsed.value
      };
    });

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
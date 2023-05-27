import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Key } from "../../types";
import type { Mode, Color } from "./types";
import { defineComponent, provide, inject, toRefs, ref, reactive, computed, watch } from "vue";
import { modes, colors } from "./constants";
import { DropdownInjectionKey } from "../dropdown/context";
import { MenuInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import useRefs from "./hooks/useRefs";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
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
    // 开启手风琴效果
    accordion: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否允许选中
    selectable: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 默认是否折叠收起菜单
    defaultCollapsed: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否折叠收起菜单
    collapsed: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 默认展开的 Submenu 子菜单 key 值数组
    defaultOpenKeys: {
      type: Array as PropType<Key[]>,
      default: []
    },
    // 当前展开的 Submenu 子菜单 key 值数组
    openKeys: {
      type: Array as PropType<Key[]>,
      default: []
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
  emits: ["update:collapsed", "update:openKeys", "update:selectedKey", "toggle", "select", "click"],
  setup(props, context) {
    // 注入祖先组件
    const vuiDropdown = inject(DropdownInjectionKey, undefined);

    // 
    const { color, indent } = toRefs(props);

    // 用于更新自身的下属 Submenu 或 MenuItem 集合
    const { submenus, addSubmenu, removeSubmenu, addMenuItem, removeMenuItem } = useRefs();

    // 内部状态
    const mode = computed(() => vuiDropdown ? "vertical" : props.mode);
    const selectable = computed(() => vuiDropdown ? false : props.selectable);

    // 是否为受控模式
    const isCollapsedControlled = useControlled("collapsed");
    const isOpenKeysControlled = useControlled("openKeys");
    const isSelectedKeyControlled = useControlled("selectedKey");

    // 折叠状态（defaultCollapsed 非受控模式，collapsed 受控模式）
    const defaultCollapsed = ref(props.defaultCollapsed);
    const collapsed = computed(() => isCollapsedControlled.value ? props.collapsed : defaultCollapsed.value);

    // 展开的 Submenu 子菜单 key 值数组（defaultOpenKeys 非受控模式，openKeys 受控模式）
    const defaultOpenKeys = ref(props.defaultOpenKeys);
    const openKeys = computed(() => isOpenKeysControlled.value ? props.openKeys : defaultOpenKeys.value);

    // 选中的 MenuItem 菜单项 key 值数组（defaultSelectedKey 非受控模式，selectedKey 受控模式）
    const defaultSelectedKey = ref(props.defaultSelectedKey);
    const selectedKey = computed(() => isSelectedKeyControlled.value ? props.selectedKey : defaultSelectedKey.value);

    // 监听 mode 及 collapsed 属性变化
    watch([mode, collapsed], ([newMode, newCollapsed]) => {
      if (newMode === "inline" && !newCollapsed) {
        return;
			}

      const nextOpenKeys: Key[] = [];

      if (!isOpenKeysControlled.value) {
        defaultOpenKeys.value = nextOpenKeys;
      }

      context.emit("update:openKeys", nextOpenKeys);
      context.emit("toggle", nextOpenKeys);
    });

    // 打开 & 关闭 Submenu 事件回调
    const handleToggle = (key: Key, level: number, open: boolean) => {
      const index: number = openKeys.value.indexOf(key);
      let nextOpenKeys: Key[] = [...openKeys.value];

      if (open && index === -1) {
        nextOpenKeys.push(key);
      }
      else if (!open && index > -1) {
        nextOpenKeys.splice(index, 1);
      }

      if (open && props.accordion) {
        const siblings = submenus.value.filter(submenu => submenu.key !== key && submenu.level === level);
        const siblingKeys = siblings.map(sibling => sibling.key);

        if (siblingKeys.length > 0) {
          siblingKeys.forEach(siblingKey => {
            const i: number = nextOpenKeys.indexOf(siblingKey as Key);

            if (i > -1) {
              nextOpenKeys.splice(i, 1);
            }
          });
        }
      }

      if (!isOpenKeysControlled.value) {
        defaultOpenKeys.value = nextOpenKeys;
      }

      context.emit("update:openKeys", nextOpenKeys);
      context.emit("toggle", nextOpenKeys);
    };

    // 点击 MenuItem 事件回调
    const handleSelect = (key: Key, level: number) => {
      if (selectable.value) {
        if (!isSelectedKeyControlled.value) {
          defaultSelectedKey.value = key;
        }

        context.emit("update:selectedKey", key);
        context.emit("select", key);
      }

      // 
      context.emit("click", key);
      vuiDropdown?.onChange?.(false);

      // 
      if ((mode.value === "horizontal" || mode.value === "vertical" || (mode.value === "inline" && collapsed.value)) && openKeys.value.length > 0) {
        const nextOpenKeys: Key[] = [];

        if (!isOpenKeysControlled.value) {
          defaultOpenKeys.value = nextOpenKeys;
        }

        context.emit("update:openKeys", nextOpenKeys);
        context.emit("toggle", nextOpenKeys);
      }
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
    const classPrefix = useClassPrefix(vuiDropdown ? "dropdown-menu" : "menu", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      const direction = mode.value === "horizontal" ? "horizontal" : "vertical";

      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-root`]: true,
        [`${classPrefix.value}-${direction}`]: true,
        [`${classPrefix.value}-${color.value}`]: color.value,
        [`${classPrefix.value}-collapsed`]: (mode.value === "vertical" || mode.value === "inline") && collapsed.value
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
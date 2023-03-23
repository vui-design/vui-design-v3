import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Breakpoint } from "../../utils/responsive-observer";
import type { Color } from "./types";
import { defineComponent, provide, inject, toRefs, ref, reactive, computed, watch, onBeforeMount, onBeforeUnmount } from "vue";
import VuiIcon from "../icon";
import useBreakpoint from "../../hooks/useBreakpoint";
import is from "../../utils/is";
import guid from "../../utils/guid";
import getScrollbarSize from "../../utils/getScrollbarSize";
import getClassName from "../../utils/getClassName";
import { breakpoints } from "../../utils/responsive-observer";
import { colors } from "./constants";
import { LayoutInjectionKey, LayoutSiderInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 主题颜色
    color: {
      type: String as PropType<Color>,
      validator: (color: Color) => colors.includes(color),
      default: "light"
    },
    // 宽度
    width: {
      type: [String, Number] as PropType<string | number>,
      default: 200
    },
    // 触发响应式布局的断点
    breakpoint: {
      type: String as PropType<Breakpoint>,
      validator: (breakpoint: Breakpoint) => breakpoints.includes(breakpoint),
      default: undefined
    },
    // 是否可折叠
    collapsible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否默认折叠
    defaultCollapsed: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 当前折叠状态
    collapsed: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 折叠宽度
    collapsedWidth: {
      type: [String, Number] as PropType<string | number>,
      default: 80
    },
    // 可折叠状态下是否显示折叠触发器
    showTrigger: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 
    trigger: {
      type: String as PropType<string>,
      default: undefined
    },
    // 内容超出时是否显示纵向滚动条
    showScrollbar: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type LayoutSiderProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-layout-sider",
  props: createProps(),
  emits: ["update:collapsed", "collapse", "breakpoint"],
  setup(props, context) {
    // 注入祖先组件
    const vuiLayout = inject(LayoutInjectionKey, undefined);

    // 基础属性
    const { color, collapsedWidth } = toRefs(props);
    const id = guid();
    const showTrigger = computed(() => props.collapsible && props.showTrigger);
    const scrollbarSize = computed(() => props.showScrollbar ? 0 : getScrollbarSize());

    // 折叠状态
    const defaultCollapsed = ref(props.defaultCollapsed);
    const collapsed = computed(() => props.collapsed ?? defaultCollapsed.value);

    // 
    watch(() => props.collapsed, newValue => {
      if (is.boolean(newValue)) {
        defaultCollapsed.value = newValue;
      }
    });

    // 宽度
    const width = computed(() => {
      const value = collapsed.value ? props.collapsedWidth : props.width;

      return is.string(value) ? value : `${value}px`;
    });

    // 向后代组件注入当前组件
    provide(LayoutSiderInjectionKey, reactive({
      color,
      collapsed,
      collapsedWidth
    }));

    // 折叠按钮点击事件回调
    const handleTriggerClick = () => {
      const value = !defaultCollapsed.value;

      defaultCollapsed.value = value;

      context.emit("update:collapsed", value);
      context.emit("collapse", value, "trigger");
    };

    // 订阅响应
    useBreakpoint(props.breakpoint, (matched: boolean) => {
      const value = !matched;

      if (defaultCollapsed.value !== value) {
        defaultCollapsed.value = value;

        context.emit("update:collapsed", value);
        context.emit("collapse", value, "responsive");
        context.emit("breakpoint", value);
      }
    });

    // 组件挂载之前执行
    onBeforeMount(() => {
      vuiLayout?.addSiderRef?.(id);
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiLayout?.removeSiderRef?.(id);
    });

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "layout-sider"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${color.value}`]: color.value && colors.includes(color.value)
      }
    });
    classes.elBody = computed(() => `${className.value}-body`);
    classes.elBodyScroller = computed(() => `${className.value}-body-scroller`);
    classes.elFooter = computed(() => `${className.value}-footer`);
    classes.elTrigger = computed(() => `${className.value}-trigger`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {
        flex: `0 0 ${width.value}`,
        width: `${width.value}`,
        minWidth: `${width.value}`,
        maxWidth: `${width.value}`
      };

      if (color.value && colors.indexOf(color.value) === -1) {
        style.backgroundColor = color.value;
      }

      return style;
    });
    styles.elBodyScroller = computed(() => {
      return {
        marginRight: `-${scrollbarSize.value}px`
      };
    });

    // 渲染
    return () => {
      let children = [];

      children.push(
        <div class={classes.elBody.value}>
          <div class={classes.elBodyScroller.value} style={styles.elBodyScroller.value}>
            {context.slots.default?.()}
          </div>
        </div>
      );
  
      if (context.slots.footer) {
        children.push(
          <div class={classes.elFooter.value}>
            {context.slots.footer?.()}
          </div>
        );
      }
  
      if (showTrigger.value) {
        let trigger;
  
        if (context.slots.trigger) {
          trigger = context.slots.trigger?.();
        }
        else {
          const type = props.trigger ?? (collapsed.value ? "menu-unfold" : "menu-fold");

          trigger = (
            <VuiIcon type={type} />
          );
        }
  
        children.push(
          <div class={classes.elTrigger.value} onClick={handleTriggerClick}>
            {trigger}
          </div>
        );
      }

      return (
        <aside class={classes.el.value} style={styles.el.value}>
          {children}
        </aside>
      );
    };
  }
});
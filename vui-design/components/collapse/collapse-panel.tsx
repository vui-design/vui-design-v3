import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Key } from "../../types";
import { Transition, defineComponent, inject, ref, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import { CollapseInjectionKey } from "./context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import useKey from "../../hooks/useKey";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 面板唯一标识
    key: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 面板标题
    title: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 面板标题右侧的附加内容
    extra: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 是否显示面板的箭头图标
    showArrow: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 自定义头部区域样式
    headerStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义内容区域样式
    bodyStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 是否禁用面板，禁用后的面板展开与否将无法通过用户交互改变
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 展开&收起动画
    animation: {
      type: String,
      default: "vui-collapse-panel-collapse"
    }
  };
};

export type CollapsePanelProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-collapse-panel",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiCollapse = inject(CollapseInjectionKey, undefined);

    // DOM 引用
    const arrowRef = ref<HTMLDivElement>();
    const headerRef = ref<HTMLDivElement>();

    // 唯一标识
    const key = useKey();

    // 内部状态
    const showArrow = computed(() => props.showArrow ?? vuiCollapse?.showArrow ?? true);
    const disabled = computed(() => props.disabled ?? vuiCollapse?.disabled ?? false);

    // 展开状态
    const active = computed(() => {
      if (vuiCollapse?.accordion) {
        return key.value === vuiCollapse.activeKeys;
      }
      else {
        return (vuiCollapse?.activeKeys as Key[]).includes(key.value);
      }
    });

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      if (disabled.value) {
        return;
      }

      const target = e.target as Node;
      const clickOnHeader = vuiCollapse?.clickHeaderToCollapse && headerRef.value && (target === headerRef.value || headerRef.value.contains(target));
      const clickOnArrow = arrowRef.value && (target === arrowRef.value || arrowRef.value.contains(target));

      if (clickOnHeader || clickOnArrow) {
        vuiCollapse?.onChange?.(key.value);
      }
    };

    // 展开前事件回调
    const handleBeforeOpen = (el: Element) => {
      (el as HTMLDivElement).style.height = "0px";
    };

    // 展开事件回调
    const handleOpen = (el: Element) => {
      (el as HTMLDivElement).style.height = el.scrollHeight + "px";
    };

    // 展开后事件回调
    const handleAfterOpen = (el: Element) => {
      (el as HTMLDivElement).style.height = "";
    };

    // 收起前事件回调
    const handleBeforeClose = (el: Element) => {
      (el as HTMLDivElement).style.height = el.scrollHeight + "px";
    };

    // 收起事件回调
    const handleClose = (el: Element) => {
      (el as HTMLDivElement).style.height = "0px";
    };

    // 收起后事件回调
    const handleAfterClose = (el: Element) => {
      (el as HTMLDivElement).style.height = "";
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("collapse-panel", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-active`]: active.value,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });
    classes.elHeader = computed(() => `${classPrefix.value}-header`);
    classes.elArrow = computed(() => {
      return {
        [`${classPrefix.value}-arrow`]: true,
        [`${classPrefix.value}-arrow-${vuiCollapse?.arrowAlign}`]: vuiCollapse?.arrowAlign
      };
    });
    classes.elTitle = computed(() => `${classPrefix.value}-title`);
    classes.elExtra = computed(() => `${classPrefix.value}-extra`);
    classes.elBodyWrapper = computed(() => `${classPrefix.value}-body-wrapper`);
    classes.elBody = computed(() => `${classPrefix.value}-body`);

    // 获取头部模块
    const getHeader = () => {
      // 标题
      let title;

      if (context.slots.title || props.title) {
        title = (
          <div class={classes.elTitle.value}>
            {getSlotProp(context.slots, props, "title")}
          </div>
        );
      }

      // 附加内容
      let extra;

      if (context.slots.extra || props.extra) {
        extra = (
          <div class={classes.elExtra.value}>
            {getSlotProp(context.slots, props, "extra")}
          </div>
        );
      }

      // 展开&收起图标
      let arrow;

      if (showArrow.value) {
        arrow = (
          <div ref={arrowRef} class={classes.elArrow.value}>
            <VuiIcon type="chevron-right" />
          </div>
        );
      }

      // 无标题、附件内容等信息时，不渲染头部
      if (!title && !extra && !arrow) {
        return;
      }

      // 返回头部
      return (
        <div ref={headerRef} class={classes.elHeader.value} style={props.headerStyle} onClick={handleClick}>
          {vuiCollapse?.arrowAlign === "left" ? arrow : null}
          {title}
          {extra}
          {vuiCollapse?.arrowAlign === "right" ? arrow : null}
        </div>
      );
    };

    // 获取主体模块
    const getBody = () => {
      const body = (
        <div v-show={active.value} class={classes.elBodyWrapper.value}>
          <div class={classes.elBody.value} style={props.bodyStyle}>
            {context.slots.default?.()}
          </div>
        </div>
      );

      return (
        <Transition
          name={props.animation}
          onBeforeEnter={handleBeforeOpen}
          onEnter={handleOpen}
          onAfterEnter={handleAfterOpen}
          onBeforeLeave={handleBeforeClose}
          onLeave={handleClose}
          onAfterLeave={handleAfterClose}
        >
          {!vuiCollapse?.destroyInactivePanel || active.value ? body : null}
        </Transition>
      );
    };

    // 渲染
    return () => {
      const header = getHeader();
      const body = getBody();

      return (
        <div class={classes.el.value}>
          {header}
          {body}
        </div>
      );
    };
  }
});
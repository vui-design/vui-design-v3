import type { ExtractPropTypes, PropType, Ref, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Trigger, Placement, Position } from "./types";
import { Teleport, Transition, defineComponent, provide, inject, toRefs, ref, reactive, computed, watch, nextTick, onMounted, onUpdated, onBeforeUnmount, onDeactivated } from "vue";
import { on, off } from "../../utils/dom";
import { getValidElements, mergeFirstChild } from "../../utils/vue";
import { triggers, placements, listeners } from "./constants";
import { PopupInjectionKey } from "./context";
import { getMouseScrollRect, getElementScrollRect, getPopupStyle, getScrollElements } from "./utils";
import VuiResizeObserver from "../resize-observer";
import VuiLazyRender from "../lazy-render";
import useClassPrefix from "../../hooks/useClassPrefix";
import useFirstElement from "../../hooks/useFirstElement";
import useTeleportContainer from "../../hooks/useTeleportContainer";
import usePopupManager from "../../hooks/usePopupManager";
import useResizeObserver from "../../hooks/useResizeObserver";
import is from "../../utils/is";
import omit from "../../utils/omit";
import throttleByRaf from "../../utils/throttleByRaf";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 组件名称
    name: {
      type: String as PropType<string>,
      default: "popup"
    },
    // 弹出框默认是否可见（非受控模式）
    defaultVisible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 弹出框是否可见（受控模式）
    visible: {
      type: Boolean as PropType<boolean>,
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
    // 弹出框的弹出位置
    placement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "top"
    },
    // 弹出动画
    animation: {
      type: String as PropType<string>,
      default: undefined
    },
    // 弹出框的偏移量（弹出框距离触发器的偏移距离）
    offset: {
      type: Number as PropType<number>,
      default: 0
    },
    // 弹出框是否显示箭头
    showArrow: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否将弹出框的宽度设置为触发器宽度
    autofitPopupWidth: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否将弹出框的最小宽度设置为触发器宽度
    autofitPopupMinWidth: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 弹出框是否跟随鼠标
    alignMousePoint: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 事件 mouseenter 延时触发的时间（毫秒）
    mouseEnterDelay: {
      type: Number as PropType<number>,
      default: 100
    },
    // 事件 mouseleave 延时触发的时间（毫秒）
    mouseLeaveDelay: {
      type: Number as PropType<number>,
      default: 100
    },
    // 是否在触发器失去焦点时关闭弹出框
    blurTriggerToClose: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否在点击触发器时关闭弹出框
    clickTriggerToClose: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否在右击触发器时关闭弹出框
    contextmenuTriggerToClose: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否在点击外部区域时关闭弹出框
    clickOutsideToClose: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否在关闭时卸载提示框
    destroyOnClose: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 弹出框标题的样式类名
    titleClassName: {
      type: [String, Object, Array] as PropType<string | object | Array<string | object>>,
      default: undefined
    },
    // 弹出框标题的样式
    titleStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 弹出框内容的样式类名
    contentClassName: {
      type: [String, Object, Array] as PropType<string | object | Array<string | object>>,
      default: undefined
    },
    // 弹出框内容的样式
    contentStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 弹出框箭头的样式类名
    arrowClassName: {
      type: [String, Object, Array] as PropType<string | object | Array<string | object>>,
      default: undefined
    },
    // 弹出框箭头的样式
    arrowStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type PopupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-popup",
  props: createProps(),
  inheritAttrs: false,
  emits: ["update:visible", "change", "open", "close", "resize"],
  setup(props, context) {
    const { getPopupContainer } = toRefs(props);
    const attributes = computed(() => omit(context.attrs, listeners));
    let scrollElements: HTMLElement[] | undefined;

    // 可见状态相关变量（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => props.visible ?? defaultVisible.value);
    const toggling = ref(false);
    const closed = ref(visible.value ? false : true);

    // 触发器相关变量
    const { children, firstElement } = useFirstElement();
    const events = computed(() => ([] as Array<Trigger>).concat(props.trigger));

    // 弹出框相关变量
    const placement = ref(props.placement);

    // 挂载容器相关变量
    const { teleport, container } = useTeleportContainer({
      getPopupContainer,
      visible,
      documentContainer: true
    });

    // 样式相关变量
    const { zIndex } = usePopupManager("popup", { visible });
    const elStyle = ref<CSSProperties>({});

    // DOM 引用相关变量
    const popup = ref<HTMLElement>();
    const arrow = ref<HTMLElement>();

    // 更新鼠标位置
    const mouse = ref<Position>({ top: 0, left: 0 });
    const changeMousePosition = (e: MouseEvent) => {
      if (props.alignMousePoint) {
        mouse.value = {
          top: e.pageY,
          left: e.pageX
        };
      }
    };

    // 更新弹出框样式
    const changePopupStyle = () => {
      if (!firstElement.value || !popup.value || !container.value) {
        return;
      }

      let rects: Record<string, any> = {};

      rects.container = container.value.getBoundingClientRect();
      rects.trigger = props.alignMousePoint ? getMouseScrollRect(mouse.value) : getElementScrollRect(firstElement.value, rects.container);
      rects.popup = getElementScrollRect(popup.value, rects.container);

      const { style, position } = getPopupStyle(props.placement, rects.container, rects.trigger, rects.popup, props.offset);

      if (props.autofitPopupWidth) {
        style.width = `${rects.trigger.width}px`;
      }
      else if (props.autofitPopupMinWidth) {
        style.minWidth = `${rects.trigger.width}px`;
      }

      if (placement.value !== position) {
        placement.value = position;
      }

      elStyle.value = style;
    };

    // 更新可见状态
    let delayer = 0;

    const cleanDelayer = () => {
      if (delayer) {
        window.clearTimeout(delayer);
        delayer = 0;
      }
    };

    const changeVisible = (value: boolean, delay?: number) => {
      if (value === visible.value && delayer === 0) {
        return;
      }

      const change = () => {
        defaultVisible.value = value;

        context.emit("update:visible", value);
        context.emit("change", value);

        if (value) {
          nextTick(() => changePopupStyle());
        }
      };

      if (delay) {
        cleanDelayer();

        if (value !== visible.value) {
          delayer = window.setTimeout(change, delay);
        }
      }
      else {
        change();
      }
    };

    // 触发器鼠标移入事件回调
    const handleTriggerMouseenter = (e: MouseEvent) => {
      (context.attrs as any).onMouseenter?.(e);

      if (props.disabled || !events.value.includes("hover")) {
        return;
      }

      changeMousePosition(e);
      changeVisible(true, props.mouseEnterDelay);
    };

    // 触发器鼠标移除事件回调
    const handleTriggerMouseleave = (e: MouseEvent) => {
      (context.attrs as any).onMouseleave?.(e);

      if (props.disabled || !events.value.includes("hover")) {
        return;
      }

      changeVisible(false, props.mouseLeaveDelay);
    };

    // 触发器点击事件回调
    const handleTriggerClick = (e: MouseEvent) => {
      (context.attrs as any).onClick?.(e);

      if (props.disabled || (visible.value && !props.clickTriggerToClose)) {
        return;
      }

      if (events.value.includes("click")) {
        changeMousePosition(e);
        changeVisible(!visible.value);
      }
      else if (events.value.includes("contextmenu") && visible.value) {
        changeVisible(false);
      }
    };

    // 触发器获得光标事件回调
    const handleTriggerFocusin = (e: FocusEvent) => {
      (context.attrs as any).onFocusin?.(e);

      if (props.disabled || !events.value.includes("focus")) {
        return;
      }

      changeVisible(true);
    };

    // 触发器失去光标事件回调
    const handleTriggerFocusout = (e: FocusEvent) => {
      (context.attrs as any).onFocusout?.(e);

      if (props.disabled || !events.value.includes("focus")) {
        return;
      }

      if (!props.blurTriggerToClose) {
        return;
      }

      changeVisible(false);
    };

    // 触发器鼠标右键事件回调
    const handleTriggerContextmenu = (e: MouseEvent) => {
      (context.attrs as any).onContextmenu?.(e);

      if (props.disabled || !events.value.includes("contextmenu")) {
        return;
      }

      e.preventDefault();
      changeMousePosition(e);

      if (visible.value && !props.contextmenuTriggerToClose) {
        return changePopupStyle();
      }

      changeVisible(!visible.value);
    };

    // 触发器尺寸改变事件回调
    const handleTargetResize = () => {
      handleResize();
    };

    // 鼠标移入事件回调
    const handleMouseenter = (e: MouseEvent) => {
      vuiPopup?.onMouseenter(e);
      handleTriggerMouseenter(e);
    };

    // 鼠标移除事件回调
    const handleMouseleave = (e: MouseEvent) => {
      vuiPopup?.onMouseleave(e);
      handleTriggerMouseleave(e);
    };

    // 鼠标按下事件回调
    const handleMousedown = (e: Event) => {
      e.preventDefault();
    };

    // 外部点击事件回调
    let outsideListener = false;
    const removeOutsideListener = () => {
      off(document.documentElement, "mousedown", handleOutsideClick);
      outsideListener = false;
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (firstElement.value?.contains(e.target as HTMLElement) || popup.value?.contains(e.target as HTMLElement)) {
        return;
      }

      for (const childrenRef of childrenRefs) {
        if (childrenRef.value?.contains(e.target as HTMLElement)) {
          return;
        }
      }

      removeOutsideListener();
      changeVisible(false);
    };

    // 尺寸改变事件回调
    const handleResize = () => {
      if (visible.value) {
        changePopupStyle();
      }

      context.emit("resize");
    };

    // 滚动事件回调
    const handleScroll = throttleByRaf(() => {
      if (visible.value) {
        changePopupStyle();
      }
    });

    // 打开前事件回调
    const handleBeforeOpen = () => {
      toggling.value = true
      closed.value = false;
    };

    // 打开事件回调
    const handleOpen = () => {
      toggling.value = false;

      if (visible.value) {
        context.emit("open");
      }
    };

    // 关闭前事件回调
    const handleBeforeClose = () => {
      toggling.value = true
    };

    // 关闭事件回调
    const handleClose = () => {
      toggling.value = false;
      closed.value = true;

      if (!visible.value) {
        context.emit("close");
      }
    };

    // 监听 popup 可见状态
    watch(visible, value => {
      // 修改外部点击事件监听
      if (props.clickOutsideToClose) {
        if (!value && outsideListener) {
          removeOutsideListener();
        }
        else if (value && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
      }

      // 修改滚动事件监听
      if (value) {
        scrollElements = getScrollElements(firstElement.value);

        for (const scrollElement of scrollElements) {
          scrollElement.addEventListener("scroll", handleScroll);
        }
      }
      else if (scrollElements) {
        for (const scrollElement of scrollElements) {
          scrollElement.removeEventListener("scroll", handleScroll);
        }

        scrollElements = undefined;
      }
    });

    // 影响 popup 显示的参数变化时，更新 popup 样式
    watch(() => [props.autofitPopupWidth, props.autofitPopupMinWidth], () => {
      if (visible.value) {
        changePopupStyle();
      }
    });

    // 
    const { addResizeObserver, removeResizeObserver } = useResizeObserver({
      element: container,
      onResize: handleResize
    });

    // 组件挂载完成后执行
    onMounted(() => {
      addResizeObserver();

      // 默认显示时，更新 popup 位置
      if (visible.value) {
        changePopupStyle();

        if (props.clickOutsideToClose && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }

        scrollElements = getScrollElements(firstElement.value);

        for (const scrollElement of scrollElements) {
          scrollElement.addEventListener("scroll", handleScroll);
        }
      }
    });

    // 组件更新完成之后执行
    onUpdated(() => {
      if (visible.value) {
        changePopupStyle();
      }
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiPopup?.removeChildRef?.(popup);

      if (outsideListener) {
        removeOutsideListener();
      }

      if (scrollElements) {
        for (const scrollElement of scrollElements) {
          scrollElement.removeEventListener("scroll", handleScroll);
        }

        scrollElements = undefined;
      }

      removeResizeObserver();
    });

    // 组件消失时执行
    onDeactivated(() => {
      changeVisible(false);
    });

    // 用于多个 Popup 组件嵌套时，保持打开状态
    const childrenRefs = new Set<Ref<HTMLElement>>();
    const vuiPopup = inject(PopupInjectionKey, undefined);
    const addChildRef = (childrenRef: any) => {
      childrenRefs.add(childrenRef);
      vuiPopup?.addChildRef?.(childrenRef);
    };
    const removeChildRef = (childrenRef: any) => {
      childrenRefs.delete(childrenRef);
      vuiPopup?.removeChildRef?.(childrenRef);
    };

    provide(PopupInjectionKey, reactive({
      addChildRef,
      removeChildRef,
      onMouseenter: handleMouseenter,
      onMouseleave: handleMouseleave
    }));

    vuiPopup?.addChildRef?.(popup);

    // 计算 class 样式
    const classPrefix = useClassPrefix(props.name, props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-placement-${placement.value}`]: true
      };
    });
    classes.elTitle = computed(() => {
      return {
        [`${classPrefix.value}-title`]: true,
        [`${props.titleClassName}`]: props.titleClassName
      };
    });
    classes.elContent = computed(() => {
      return {
        [`${classPrefix.value}-content`]: true,
        [`${props.contentClassName}`]: props.contentClassName
      };
    });
    classes.elArrow = computed(() => {
      return {
        [`${classPrefix.value}-arrow`]: true,
        [`${props.arrowClassName}`]: props.arrowClassName
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      return {
        ...elStyle.value,
        position: "absolute",
        zIndex: zIndex.value,
        pointerEvents: toggling.value ? "none" : undefined
      };
    });
    styles.elTitle = computed(() => props.titleStyle);
    styles.elContent = computed(() => props.contentStyle);
    styles.elArrow = computed(() => props.arrowStyle);

    // 渲染
    return () => {
      const title = getValidElements(context.slots.title?.());
      const content = getValidElements(context.slots.content?.());

      children.value = context.slots.default?.() ?? [];

      mergeFirstChild(children.value, {
        onMouseenter: handleTriggerMouseenter,
        onMouseleave: handleTriggerMouseleave,
        onFocusin: handleTriggerFocusin,
        onFocusout: handleTriggerFocusout,
        onClick: handleTriggerClick,
        onContextmenu: handleTriggerContextmenu
      });

      return (
        <>
          <VuiResizeObserver onResize={handleTargetResize}>
            {children.value}
          </VuiResizeObserver>
          <VuiLazyRender render={visible.value}>
            <Teleport to={teleport.value}>
              {
                props.destroyOnClose && !visible.value && closed.value ? null : (
                  <VuiResizeObserver onResize={handleResize}>
                    <Transition appear name={props.animation} onBeforeEnter={handleBeforeOpen} onAfterEnter={handleOpen} onBeforeLeave={handleBeforeClose} onAfterLeave={handleClose}>
                      <div ref={popup} data-placement={placement.value} v-show={visible.value} class={classes.el.value} style={styles.el.value} {...attributes.value} onMouseenter={handleMouseenter} onMouseleave={handleMouseleave} onMousedown={handleMousedown}>
                        {
                          !(is.array(title) ? title.length : title) ? null : (
                            <div class={classes.elTitle.value} style={styles.elTitle.value}>{title}</div>
                          )
                        }
                        <div class={classes.elContent.value} style={styles.elContent.value}>{content}</div>
                        {
                          !props.showArrow ? null : (
                            <div ref={arrow} class={classes.elArrow.value} style={styles.elArrow.value}></div>
                          )
                        }
                      </div>
                    </Transition>
                  </VuiResizeObserver>
                )
              }
            </Teleport>
          </VuiLazyRender>
        </>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { ButtonProps } from "../button";
import type { AutofocusButton, Placement } from "./types";
import { Teleport, Transition, defineComponent, provide, inject, toRefs, ref, reactive, computed, watch, nextTick } from "vue";
import { useI18n } from "../../locale";
import { keyCodes } from "../../constants";
import { autofocusButtons, placements } from "./constants";
import { DrawerInjectionKey } from "./context";
import VuiLazyRender from "../lazy-render";
import VuiIcon from "../icon";
import VuiButton from "../button";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import useTeleportContainer from "../../hooks/useTeleportContainer";
import is from "../../utils/is";
import guid from "../../utils/guid";
import addScrollbarEffect from "../../utils/addScrollbarEffect";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 默认是否可见
    defaultVisible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否可见
    visible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 标题左侧的图标类型/图标
    icon: {
      type: [String, Function] as PropType<string | RenderFunction>,
      default: undefined
    },
    // 抽屉标题
    title: {
      type: [String, Function] as PropType<string | RenderFunction>,
      default: undefined
    },
    // 自定义抽屉底部内容
    footer: {
      type: [Boolean, String, Function] as PropType<boolean | string | number | RenderFunction>,
      default: undefined
    },
    // 是否显示取消按钮
    showCancelButton: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 自定义取消按钮的属性
    cancelButtonProps: {
      type: Object as PropType<ButtonProps>,
      default: undefined
    },
    // 取消按钮文字
    cancelText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否显示确定按钮
    showOkButton: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 自定义确定按钮的属性
    okButtonProps: {
      type: Object as PropType<ButtonProps>,
      default: undefined
    },
    // 确定按钮文字
    okText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 指定自动获得焦点的按钮，可选值为 cancel、ok 或者不设
    autofocusButton: {
      type: String as PropType<AutofocusButton>,
      validator: (autofocusButton: AutofocusButton) => autofocusButtons.includes(autofocusButton),
      default: undefined
    },
    // 抽屉位置
    placement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "right"
    },
    // 是否显示右上角的关闭按钮
    closable: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 关闭按钮文字
    closeText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 抽屉宽度
    width: {
      type: [String, Number] as PropType<string | number>,
      default: 480
    },
    // 抽屉高度
    height: {
      type: [String, Number] as PropType<string | number>,
      default: 480
    },
    // 子抽屉打开时，父级抽屉的位置偏移量
    offset: {
      type: Number as PropType<number>,
      default: 160
    },
    // 是否显示背景遮罩
    backdrop: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 点击背景遮罩是否关闭抽屉
    clickBackdropToClose: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 按下 ESC 键关闭对话框
    escToClose: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 关闭时销毁抽屉内容（抽屉里的子元素）
    destroyOnClose: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 指定抽屉挂载的 HTML 节点
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<string | HTMLElement | null>,
      default: "body"
    },
    // 抽屉的打开/关闭动画
    animations: {
      type: Array as PropType<Array<string>>,
      default: () => ["vui-drawer-backdrop-fade", "vui-drawer-slide"]
    },
    // 自定义抽屉样式类名
    class: {
      type: String as PropType<string>,
      default: undefined
    },
    // 自定义抽屉样式
    style: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义抽屉头部样式
    headerStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义抽屉内容部分样式
    bodyStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义抽屉底部样式
    footerStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义背景遮罩样式类名
    backdropClassName: {
      type: String as PropType<string>,
      default: undefined
    },
    // 自定义背景遮罩样式
    backdropStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 点击取消按钮（或右上角关闭按钮、背景遮罩）的事件回调函数
    onCancel: {
      type: Function as PropType<() => any>,
      default: undefined
    },
    // 点击确定按钮的事件回调函数
    onOk: {
      type: Function as PropType<() => any>,
      default: undefined
    }
  };
};

export type DrawerProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-drawer",
  props: createProps(),
  emits: ["update:visible", "change", "beforeOpen", "open", "afterOpen", "beforeClose", "close", "afterClose"],
  setup(props, context) {
    // 注入祖先组件
    const vuiDrawer = inject(DrawerInjectionKey, undefined);

    // 向后代组件注入当前组件
    const drawerRefs = ref<string[]>([]);
    const addDrawerRef = (id: string) => {
      if (drawerRefs.value.indexOf(id) === -1) {
        drawerRefs.value.push(id);
      }

      vuiDrawer?.addDrawerRef?.(id);
    };
    const removeDrawerRef = (id: string) => {
      if (drawerRefs.value.includes(id)) {
        drawerRefs.value.splice(drawerRefs.value.indexOf(id), 1);
      }

      vuiDrawer?.removeDrawerRef?.(id);
    };

    provide(DrawerInjectionKey, reactive({
      addDrawerRef,
      removeDrawerRef
    }));

    // 国际化
    const { translate } = useI18n();

    // DOM 引用
    const wrapperRef = ref<HTMLDivElement>();

    // 
    const id = guid();

    // 是否为受控模式
    const isControlled = useControlled("visible");

    // 可见状态（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => isControlled.value ? props.visible : defaultVisible.value);
    const closed = ref(visible.value ? false : true);

    // 监听 visible 属性变化
    watch(visible, newValue => {
      if (is.boolean(newValue) && newValue && props.escToClose) {
        nextTick(() => wrapperRef.value?.focus());
      }
    });

    // 挂载容器相关变量
    const { getPopupContainer } = toRefs(props);
    const { teleport } = useTeleportContainer({
      getPopupContainer,
      visible,
      documentContainer: true
    });

    // 取消 & 确定按钮 loading 状态
    const cancelLoading = ref(false);
    const okLoading = ref(false);

    // 用于在抽屉弹出时，为挂载容器添加滚动条占位符
    const scrollbarEffect = ref();

    // 切换可见状态
    const toggle = (visible: boolean) => {
      if (!isControlled.value) {
        defaultVisible.value = visible;
      }

      context.emit("update:visible", visible);
      context.emit("change", visible);
    };

    // 点击抽屉遮罩时的事件回调
    const handleBackdropClick = () => {
      if (!props.clickBackdropToClose) {
        return;
      }

      handleCancel();
    };

    // 点击抽屉容器时的事件回调
    const handleWrapperClick = (e: Event) => {
      const target = (e || window.event).target;

      if (!props.clickBackdropToClose || !target || !wrapperRef.value || target !== wrapperRef.value) {
        return;
      }

      handleCancel();
    };

    // 按下 ESC 键时的事件回调
    const handleWrapperKeydown = (e: KeyboardEvent) => {
      if (!props.escToClose || e.keyCode !== keyCodes.esc) {
        return;
      }

      e.stopPropagation();
      handleCancel();
    };

    // 点击取消按钮时的事件回调
    const handleCancel = () => {
      const hook = props.onCancel?.();

      if (is.boolean(hook) && hook === false) {
        return;
      }

      if (is.promise(hook)) {
        const resolve = () => {
          okLoading.value = false;
          toggle(false);
        };
        const reject = () => okLoading.value = false;

        okLoading.value = true;
        hook.then(resolve).catch(reject);
      }
      else {
        toggle(false);
      }
    };

    // 点击确定按钮时的事件回调
    const handleOk = () => {
      const hook = props.onOk?.();

      if (is.boolean(hook) && hook === false) {
        return;
      }

      if (is.promise(hook)) {
        const resolve = () => {
          okLoading.value = false;
          toggle(false);
        };
        const reject = () => okLoading.value = false;

        okLoading.value = true;
        hook.then(resolve).catch(reject);
      }
      else {
        toggle(false);
      }
    };

    // 打开前的事件回调
    const handleBeforeOpen = () => {
      closed.value = false;
      context.emit("beforeOpen");
    };

    // 打开时的事件回调
    const handleOpen = () => {
      if (vuiDrawer) {
        vuiDrawer.addDrawerRef(id);
      }
      else if (props.getPopupContainer) {
        scrollbarEffect.value = addScrollbarEffect();
      }

      context.emit("open");
    };

    // 打开后的事件回调
    const handleAfterOpen = () => {
      context.emit("afterOpen");
    };

    // 关闭前的事件回调
    const handleBeforeClose = () => {
      context.emit("beforeClose");
    };

    // 关闭时的事件回调
    const handleClose = () => {
      if (vuiDrawer) {
        vuiDrawer.removeDrawerRef(id);
      }

      context.emit("close");
    };

    // 关闭后的事件回调
    const handleAfterClose = () => {
      if (scrollbarEffect.value) {
        scrollbarEffect.value.remove();
      }

      closed.value = true;
      context.emit("afterClose");
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("drawer", props);
    let classes: Record<string, ComputedRef> = {};

    classes.elBackdrop = computed(() => `${classPrefix.value}-backdrop`);
    classes.elWrapper = computed(() => `${classPrefix.value}-wrapper`);
    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-with-header`]: context.slots.icon || props.icon || context.slots.title || props.title,
        [`${classPrefix.value}-with-footer`]: props.footer !== false,
        [`${classPrefix.value}-${props.placement}`]: props.placement
      };
    });
    classes.elHeader = computed(() => `${classPrefix.value}-header`);
    classes.elBody = computed(() => `${classPrefix.value}-body`);
    classes.elFooter = computed(() => `${classPrefix.value}-footer`);
    classes.elIcon = computed(() => `${classPrefix.value}-icon`);
    classes.elTitle = computed(() => `${classPrefix.value}-title`);
    classes.elBtnClose = computed(() => `${classPrefix.value}-btn-close`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elBackdrop = computed(() => {
      let style: CSSProperties = {};

      if (!props.getPopupContainer) {
        style.position = "absolute";
      }

      return style;
    });
    styles.elWrapper = computed(() => {
      let style: CSSProperties = {};

      if (!props.getPopupContainer) {
        style.position = "absolute";
      }

      return style;
    });
    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (!props.getPopupContainer) {
        style.position = "absolute";
      }

      if (["left", "right"].includes(props.placement)) {
        style.width = is.string(props.width) ? props.width : `${props.width}px`;

        if (drawerRefs.value.length > 0) {
          const translate = drawerRefs.value.length * props.offset;

          style.transform = props.placement === "left" ? `translateX(${translate}px)` : `translateX(-${translate}px)`
        }
      }
      else {
        style.height = is.string(props.height) ? props.height : `${props.height}px`;

        if (drawerRefs.value.length > 0) {
          const translate = drawerRefs.value.length * props.offset;

          style.transform = props.placement === "top" ? `translateY(${translate}px)` : `translateY(-${translate}px)`
        }
      }

      return style;
    });

    // 获取抽屉遮罩
    const getBackdrop = () => {
      if (!props.backdrop) {
        return;
      }

      let attributes: HTMLAttributes = {
        class: [classes.elBackdrop.value, props.backdropClassName],
        style: [styles.elBackdrop.value, props.backdropStyle]
      };

      if (props.clickBackdropToClose) {
        attributes.onClick = handleBackdropClick;
      }

      return (
        <Transition appear name={props.animations[0]}>
          <div v-show={visible.value} {...attributes}></div>
        </Transition>
      );
    };

    // 获取抽屉
    const getDrawer = () => {
      const attributes: HTMLAttributes = {
        ...context.attrs,
        class: [classes.el.value, props.class],
        style: [styles.el.value, props.style]
      };

      const header = getDrawerHeader();
      const body = getDrawerBody();
      const footer = getDrawerFooter();
      const btnClose = getDrawerBtnClose();

      return (
        <Transition appear name={props.animations[0]}>
          <div ref={wrapperRef} v-show={visible.value} tabindex={-1} class={classes.elWrapper.value} style={styles.elWrapper.value} onClick={handleWrapperClick} onKeydown={handleWrapperKeydown}>
            <Transition appear name={props.animations[1]} onBeforeEnter={handleBeforeOpen} onEnter={handleOpen} onAfterEnter={handleAfterOpen} onBeforeLeave={handleBeforeClose} onLeave={handleClose} onAfterLeave={handleAfterClose}>
              <div v-show={visible.value} {...attributes}>
                {header}
                {body}
                {footer}
                {btnClose}
              </div>
            </Transition>
          </div>
        </Transition>
      )
    };

    // 获取抽屉头部
    const getDrawerHeader = () => {
      if (!context.slots.icon && !props.icon && !context.slots.title && !props.title) {
        return;
      }

      let icon;

      if (context.slots.icon || props.icon) {
        icon = (
          <div class={classes.elIcon.value}>
            {
              context.slots.icon ? context.slots.icon() : (
                is.function(props.icon) ? props.icon() : (
                  <VuiIcon type={props.icon} />
                )
              )
            }
          </div>
        );
      }

      let title;

      if (context.slots.title || props.title) {
        title = (
          <div class={classes.elTitle.value}>
            {
              context.slots.title ? context.slots.title() : (
                is.function(props.title) ? props.title() : props.title
              )
            }
          </div>
        );
      }

      return (
        <div class={classes.elHeader.value} style={props.headerStyle}>
          {icon}
          {title}
        </div>
      );
    };

    // 获取抽屉内容
    const getDrawerBody = () => {
      return (
        <div class={classes.elBody.value} style={props.bodyStyle}>
          {
            props.destroyOnClose && closed.value ? null : context.slots.default?.()
          }
        </div>
      );
    };

    // 获取抽屉底部
    const getDrawerFooter = () => {
      if (props.footer === false) {
        return;
      }

      let content;

      if (context.slots.footer || props.footer) {
        content = context.slots.footer ? context.slots.footer() : (
          is.function(props.footer) ? props.footer() : props.footer
        );
      }
      else {
        content = [];

        if (props.showCancelButton) {
          const cancelButtonProps = {
            ...props.cancelButtonProps,
            loading: cancelLoading.value,
            autofocus: props.autofocusButton === "cancel",
            onClick: handleCancel
          };

          content.push(
            <VuiButton {...cancelButtonProps}>
              {props.cancelText ?? translate("drawer.cancelText")}
            </VuiButton>
          );
        }

        if (props.showOkButton) {
          const okButtonProps = {
            ...props.okButtonProps,
            loading: okLoading.value,
            autofocus: props.autofocusButton === "ok",
            onClick: handleOk
          };

          content.push(
            <VuiButton type="primary" {...okButtonProps}>
              {props.okText ?? translate("drawer.okText")}
            </VuiButton>
          );
        }
      }

      return (
        <div class={classes.elFooter.value} style={props.footerStyle}>
          {content}
        </div>
      );
    };

    // 获取抽屉关闭按钮
    const getDrawerBtnClose = () => {
      if (!props.closable) {
        return;
      }

      return (
        <div class={classes.elBtnClose.value} onClick={handleCancel}>
          {
            props.closeText ?? (
              <VuiIcon type="crossmark" />
            )
          }
        </div>
      );
    };

    // 渲染
    return () => {
      const backdrop = getBackdrop();
      const drawer = getDrawer();

      return (
        <VuiLazyRender render={visible.value}>
          <Teleport to={teleport.value} disabled={!props.getPopupContainer}>
            <div>
              {backdrop}
              {drawer}
            </div>
          </Teleport>
        </VuiLazyRender>
      );
    };
  }
});
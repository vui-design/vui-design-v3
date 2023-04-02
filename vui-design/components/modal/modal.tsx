import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { ButtonProps } from "../button";
import type { AutofocusButton } from "./types";
import { Teleport, Transition, defineComponent, toRefs, ref, computed, watch, nextTick } from "vue";
import { useI18n } from "../../locale";
import { autofocusButtons } from "./constants";
import VuiLazyRender from "../lazy-render";
import VuiIcon from "../icon";
import VuiButton from "../button";
import useDraggable from "../../hooks/useDraggable";
import useTeleportContainer from "../../hooks/useTeleportContainer";
import is from "../../utils/is";
import keyCodes from "../../utils/keyCodes";
import addScrollbarEffect from "../../utils/addScrollbarEffect";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 唯一标识
    id: {
      type: [String, Number] as PropType<string | number>,
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
      default: undefined
    },
    // 标题左侧的图标类型/图标
    icon: {
      type: [String, Function] as PropType<string | RenderFunction>,
      default: undefined
    },
    // 对话框标题
    title: {
      type: [String, Function] as PropType<string | RenderFunction>,
      default: undefined
    },
    // 自定义对话框底部内容
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
    // 是否开启简洁模式
    simple: {
      type: Boolean as PropType<boolean>,
      default: false
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
    // 对话框宽度；对话框的宽度是响应式的，当屏幕宽度小于 768px 时，宽度会被强制设为 auto
    width: {
      type: [String, Number] as PropType<string | number>,
      default: 480
    },
    // 对话框距离页面顶部的距离，垂直居中或全屏显示对话框时该属性无效
    top: {
      type: [String, Number] as PropType<string | number>,
      default: 128
    },
    // 是否垂直居中显示对话框
    centered: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否全屏显示对话框
    fullscreen: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否支持拖动
    draggable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否显示背景遮罩
    backdrop: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 点击背景遮罩是否关闭对话框
    clickBackdropToClose: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 按下 ESC 键关闭对话框
    escToClose: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 关闭时销毁对话框内容（对话框里的子元素）
    destroyOnClose: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 指定对话框挂载的 HTML 节点
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<string | HTMLElement | null>,
      default: "body"
    },
    // 对话框的打开/关闭动画
    animations: {
      type: Array as PropType<Array<string>>,
      default: ["vui-modal-backdrop-fade", "vui-modal-zoom"]
    },
    // 自定义对话框样式类名
    class: {
      type: String as PropType<string>,
      default: undefined
    },
    // 自定义对话框样式
    style: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义对话框头部样式
    headerStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义对话框内容部分样式
    bodyStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义对话框底部样式
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

export type ModalProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-modal",
  props: createProps(),
  emits: ["update:visible", "change", "beforeOpen", "open", "afterOpen", "beforeClose", "close", "afterClose"],
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // DOM 引用
    const wrapperRef = ref<HTMLDivElement>();
    const modalRef = ref<HTMLDivElement>();

    // 可见状态（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => props.visible ?? defaultVisible.value);
    const closed = ref(visible.value ? false : true);

    // 监听 defaultVisible 属性变化
    watch(() => props.defaultVisible, newValue => {
      if (is.boolean(newValue)) {
        defaultVisible.value = newValue;
      }
    });

    // 监听 visible 属性变化
    watch(visible, newValue => {
      if (is.boolean(newValue) && newValue && props.escToClose) {
        nextTick(() => wrapperRef.value?.focus());
      }
    });

    // 是否支持拖动
    const draggable = computed(() => !props.fullscreen && props.draggable);
    const { handleMovedown, dragged, dragX, dragY } = useDraggable({
      wrapperRef,
      modalRef,
      draggable
    });

    // 全屏状态下不支持拖动
    watch(() => props.fullscreen, newValue => {
      if (is.boolean(newValue) && newValue && dragged.value) {
        dragX.value = undefined;
        dragY.value = undefined;
      }
    });

    // 关闭后重置拖动状态
    watch(closed, newValue => {
      if (is.boolean(newValue) && newValue && dragged.value) {
        dragX.value = undefined;
        dragY.value = undefined;
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

    // 用于在对话框弹出时，为挂载容器添加滚动条占位符
    const scrollbarEffect = ref();

    // 切换可见状态
    const toggle = (visible: boolean) => {
      defaultVisible.value = visible;

      context.emit("update:visible", visible);
      context.emit("change", visible);
    };

    // 点击对话框遮罩时的事件回调
    const handleBackdropClick = () => {
      if (!props.clickBackdropToClose) {
        return;
      }

      handleCancel();
    };

    // 点击对话框容器时的事件回调
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
      context.emit("beforeOpen", props.id);
    };

    // 打开时的事件回调
    const handleOpen = () => {
      scrollbarEffect.value = addScrollbarEffect();
      context.emit("open", props.id);
    };

    // 打开后的事件回调
    const handleAfterOpen = () => {
      context.emit("afterOpen", props.id);
    };

    // 关闭前的事件回调
    const handleBeforeClose = () => {
      context.emit("beforeClose", props.id);
    };

    // 关闭时的事件回调
    const handleClose = () => {
      context.emit("close", props.id);
    };

    // 关闭后的事件回调
    const handleAfterClose = () => {
      closed.value = true;
      scrollbarEffect.value?.remove?.();
      context.emit("afterClose", props.id);
    };

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "modal"));
    let classes: Record<string, ComputedRef> = {};

    classes.elBackdrop = computed(() => `${className.value}-backdrop`);
    classes.elWrapper = computed(() => {
      return {
        [`${className.value}-wrapper`]: true,
        [`${className.value}-wrapper-centered`]: props.centered && !props.fullscreen && !dragged.value,
        [`${className.value}-wrapper-fullscreen`]: props.fullscreen,
        [`${className.value}-wrapper-dragged`]: draggable.value && dragged.value
      };
    });
    classes.elDragger = computed(() => {
      return {
        [`${className.value}-dragger`]: true
      };
    });
    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-with-header`]: context.slots.icon || props.icon || context.slots.title || props.title,
        [`${className.value}-with-footer`]: props.footer !== false,
        [`${className.value}-simple`]: props.simple,
        [`${className.value}-draggable`]: draggable.value
      };
    });
    classes.elHeader = computed(() => `${className.value}-header`);
    classes.elBody = computed(() => `${className.value}-body`);
    classes.elFooter = computed(() => `${className.value}-footer`);
    classes.elIcon = computed(() => `${className.value}-icon`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elBtnClose = computed(() => `${className.value}-btn-close`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elWrapper = computed(() => {
      let style: CSSProperties = {};

      if (!props.centered && !props.fullscreen && !dragged.value) {
        style.paddingTop = style.paddingBottom = is.string(props.top) ? props.top : `${props.top}px`;
      }

      return style;
    });
    styles.elDragger = computed(() => {
      let style: CSSProperties = {};

      if (props.fullscreen || !draggable.value) {
        return;
      }

      style.width = is.string(props.width) ? props.width : `${props.width}px`;

      if (dragged.value) {
        style.transform = `translate(${dragX.value}px, ${dragY.value}px)`;
      }

      return style;
    });
    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (!props.fullscreen) {
        style.width = is.string(props.width) ? props.width : `${props.width}px`;
      }

      return style;
    });

    // 获取对话框遮罩
    const getBackdrop = () => {
      if (!props.backdrop) {
        return;
      }

      let attributes: HTMLAttributes = {
        class: [classes.elBackdrop.value, props.backdropClassName],
        style: props.backdropStyle
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

    // 获取对话框
    const getModal = () => {
      const attributes: HTMLAttributes = {
        ...context.attrs,
        class: [classes.el.value, props.class],
        style: [styles.el.value, props.style]
      };

      const header = getModalHeader();
      const body = getModalBody();
      const footer = getModalFooter();
      const btnClose = getModalBtnClose();

      const modal = (
        <Transition appear name={props.animations[1]} onBeforeEnter={handleBeforeOpen} onEnter={handleOpen} onAfterEnter={handleAfterOpen} onBeforeLeave={handleBeforeClose} onLeave={handleClose} onAfterLeave={handleAfterClose}>
          <div ref={modalRef} v-show={visible.value} {...attributes}>
            {header}
            {body}
            {footer}
            {btnClose}
          </div>
        </Transition>
      );

      return (
        <Transition appear name={props.animations[0]}>
          <div ref={wrapperRef} v-show={visible.value} tabindex={-1} class={classes.elWrapper.value} style={styles.elWrapper.value} onClick={handleWrapperClick} onKeydown={handleWrapperKeydown}>
            {
              !draggable.value ? modal : (
                <div class={classes.elDragger.value} style={styles.elDragger.value}>{modal}</div>
              )
            }
          </div>
        </Transition>
      )
    };

    // 获取对话框头部
    const getModalHeader = () => {
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
        <div class={classes.elHeader.value} style={props.headerStyle} onMousedown={handleMovedown}>
          {icon}
          {title}
        </div>
      );
    };

    // 获取对话框内容
    const getModalBody = () => {
      return (
        <div class={classes.elBody.value} style={props.bodyStyle}>
          {
            props.destroyOnClose && closed.value ? null : context.slots.default?.()
          }
        </div>
      );
    };

    // 获取对话框底部
    const getModalFooter = () => {
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
              {props.cancelText ?? translate("modal.cancelText")}
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
              {props.okText ?? translate("modal.okText")}
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

    // 获取对话框关闭按钮
    const getModalBtnClose = () => {
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
      const modal = getModal();

      return (
        <VuiLazyRender render={visible.value}>
          <Teleport to={teleport.value} disabled={!props.getPopupContainer}>
            <div>
              {backdrop}
              {modal}
            </div>
          </Teleport>
        </VuiLazyRender>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { ModalConfig } from "./types";
import { defineComponent } from "vue";
import is from "../../utils/is";
import VuiModal from "./modal";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import createChainedFunction from "../../utils/createChainedFunction";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 对话框队列
    modals: {
      type: Array as PropType<ModalConfig[]>,
      default: () => []
    },
    // 打开前事件回调
    onBeforeOpen: {
      type: Function as PropType<(id: string | number) => any>,
      default: undefined
    },
    // 打开事件回调
    onOpen: {
      type: Function as PropType<(id: string | number) => any>,
      default: undefined
    },
    // 打开后事件回调
    onAfterOpen: {
      type: Function as PropType<(id: string | number) => any>,
      default: undefined
    },
    // 关闭前事件回调
    onBeforeClose: {
      type: Function as PropType<(id: string | number) => any>,
      default: undefined
    },
    // 关闭事件回调
    onClose: {
      type: Function as PropType<(id: string | number) => any>,
      default: undefined
    },
    // 关闭后事件回调
    onAfterClose: {
      type: Function as PropType<(id: string | number) => any>,
      default: undefined
    }
  };
};

export type ModalListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-modal-list",
  props: createProps(),
  setup(props, context) {
    // 
    const handleBeforeOpen = (id: string | number) => props.onBeforeOpen?.(id);
    const handleOpen = (id: string | number) => props.onOpen?.(id);
    const handleAfterOpen = (id: string | number) => props.onAfterOpen?.(id);
    const handleBeforeClose = (id: string | number) => props.onBeforeClose?.(id);
    const handleClose = (id: string | number) => props.onClose?.(id);
    const handleAfterClose = (id: string | number) => props.onAfterClose?.(id);

    // 
    const classPrefix = useClassPrefix("modal-notice", props);

    // 渲染
    return () => {
      return (
        <>
          {
            props.modals.map((modal: ModalConfig) => {
              const onBeforeOpen = createChainedFunction(handleBeforeOpen, modal.onBeforeOpen);
              const onOpen = createChainedFunction(handleOpen, modal.onOpen);
              const onAfterOpen = createChainedFunction(handleAfterOpen, modal.onAfterOpen);
              const onBeforeClose = createChainedFunction(handleBeforeClose, modal.onBeforeClose);
              const onClose = createChainedFunction(handleClose, modal.onClose);
              const onAfterClose = createChainedFunction(handleAfterClose, modal.onAfterClose);

              const attributes = {
                key: modal.id,
                id: modal.id,
                visible: modal.visible ?? true,
                showCancelButton: modal.showCancelButton,
                cancelButtonProps: modal.cancelButtonProps,
                cancelText: modal.cancelText,
                showOkButton: modal.showOkButton,
                okButtonProps: modal.okButtonProps,
                okText: modal.okText,
                autofocusButton: modal.autofocusButton,
                simple: true,
                closable: false,
                width: modal.width ?? 360,
                top: modal.top,
                centered: modal.centered,
                backdrop: modal.backdrop,
                clickBackdropToClose: modal.clickBackdropToClose ?? false,
                escToClose: modal.escToClose ?? false,
                destroyOnClose: modal.destroyOnClose,
                getPopupContainer: null,
                class: modal.class,
                style: modal.style,
                bodyStyle: modal.bodyStyle,
                footerStyle: modal.footerStyle,
                backdropClassName: modal.backdropClassName,
                backdropStyle: modal.backdropStyle,
                onCancel: modal.onCancel,
                onOk: modal.onOk,
                onBeforeOpen,
                onOpen,
                onAfterOpen,
                onBeforeClose,
                onClose,
                onAfterClose
              };

              let classes: Record<string, any> = {};

              classes.elNotice = {
                [`${classPrefix.value}`]: true,
                [`${classPrefix.value}-${modal.type}`]: modal.type
              };
              classes.elNoticeTitle = `${classPrefix.value}-title`;
              classes.elNoticeDescription = `${classPrefix.value}-description`;
              classes.elNoticeIcon = `${classPrefix.value}-icon`;

              return (
                <VuiModal {...attributes}>
                  <div class={classes.elNotice}>
                    <div class={classes.elNoticeIcon}>
                      {
                        is.function(modal.icon) ? modal.icon() : (
                          <VuiIcon type={modal.icon} />
                        )
                      }
                    </div>
                    <div class={classes.elNoticeTitle}>
                      {
                        is.function(modal.title) ? modal.title() : modal.title
                      }
                    </div>
                    <div class={classes.elNoticeDescription}>
                      {
                        is.function(modal.description) ? modal.description() : modal.description
                      }
                    </div>
                  </div>
                </VuiModal>
              );
            })
          }
        </>
      )
    };
  }
});
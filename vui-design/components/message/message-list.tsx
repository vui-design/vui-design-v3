import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { MessageConfig } from "./types";
import { TransitionGroup, defineComponent } from "vue";
import VuiMessage from "./message";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 消息提示队列
    messages: {
      type: Array as PropType<MessageConfig[]>,
      default: []
    },
    // 动画
    animation: {
      type: String as PropType<string>,
      default: "vui-message-fade"
    },
    // 关闭前事件回调
    onBeforeClose: {
      type: Function as PropType<(id: string | number) => void>,
      default: undefined
    },
    // 关闭事件回调
    onClose: {
      type: Function as PropType<(id: string | number) => void>,
      default: undefined
    },
    // 关闭后事件回调
    onAfterClose: {
      type: Function as PropType<(id: string | number) => void>,
      default: undefined
    }
  };
};

export type MessageListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-message-list",
  props: createProps(),
  setup(props, context) {
    // 
    const handleBeforeClose = () => props.onBeforeClose?.();
    const handleClose = (id: string | number) => props.onClose?.(id);
    const handleAfterClose = () => props.onAfterClose?.();

    // 渲染
    return () => {
      return (
        <TransitionGroup name={props.animation} onBeforeLeave={handleBeforeClose} onAfterLeave={handleAfterClose}>
          {
            props.messages.map((message: MessageConfig) => {
              return (
                <VuiMessage
                  key={message.id}
                  id={message.id}
                  type={message.type}
                  icon={message.icon}
                  content={message.content}
                  closable={message.closable}
                  closeText={message.closeText}
                  duration={message.duration}
                  background={message.background}
                  onClose={handleClose}
                />
              );
            })
          }
        </TransitionGroup>
      )
    };
  }
});
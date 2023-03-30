import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { MessageProps } from "./message";
import { TransitionGroup, defineComponent, computed } from "vue";
import VuiMessage from "./message";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 消息提示队列
    messages: {
      type: Array as PropType<MessageProps[]>,
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

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "message-list"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <TransitionGroup name={props.animation} onBeforeLeave={handleBeforeClose} onAfterLeave={handleAfterClose}>
            {
              props.messages.map((message: MessageProps) => {
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
        </div>
      )
    };
  }
});
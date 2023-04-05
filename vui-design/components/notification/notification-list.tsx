import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { NotificationConfig } from "./types";
import { TransitionGroup, defineComponent } from "vue";
import VuiNotification from "./notification";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 通知提醒队列
    notifications: {
      type: Array as PropType<NotificationConfig[]>,
      default: []
    },
    // 动画
    animation: {
      type: String as PropType<string>,
      default: "vui-notification-fade"
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

export type NotificationListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-notification-list",
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
            props.notifications.map((notification: NotificationConfig) => {
              return (
                <VuiNotification
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  icon={notification.icon}
                  title={notification.title}
                  description={notification.description}
                  closable={notification.closable}
                  closeText={notification.closeText}
                  duration={notification.duration}
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
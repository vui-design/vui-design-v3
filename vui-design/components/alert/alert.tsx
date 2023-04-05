import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Type } from "./types";
import { Transition, defineComponent, ref, computed } from "vue";
import { types } from "./constants";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";

const iconTypes = {
  info: "info",
  warning: "warning",
  success: "checkmark-circle",
  error: "crossmark-circle"
};

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 警告提示类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "info"
    },
    // 是否应用顶部公告样式
    banner: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否显示图标
    showIcon: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 自定义图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否可以关闭
    closable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 自定义关闭按钮
    closeText: {
      type: String as PropType<Type>,
      default: undefined
    },
    // 警告提示内容
    message: {
      type: String as PropType<string>,
      default: undefined
    },
    // 警告提示的辅助性描述信息
    description: {
      type: String as PropType<string>,
      default: undefined
    },
    // 关闭动画
    animation: {
      type: String as PropType<string>,
      default: "vui-alert-slide-up"
    }
  };
};

export type AlertProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-alert",
  props: createProps(),
  emits: ["close", "afterClose"],
  setup(props, context) {
    // DOM 引用
    const alertRef = ref<HTMLDivElement>();

    // 关闭状态
    const closing = ref(false);
    const closed = ref(false);

    // 
    const withIcon = computed(() => props.showIcon && (context.slots.icon || props.icon || props.type));
    const withDescription = computed(() => context.slots.description || props.description);

    // 
    const handleClose = (e: MouseEvent) => {
      e.preventDefault();

      if (alertRef.value) {
        alertRef.value.style.height = `${alertRef.value.offsetHeight}px`;
        // 重复一次才能正确设置 height 高度，why？
        alertRef.value.style.height = `${alertRef.value.offsetHeight}px`;
      }

      closing.value = true;

      context.emit("close", e);
    };

    // 
    const handleAfterClose = () => {
      closing.value = false;
      closed.value = true;

      context.emit("afterClose");
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("alert", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.type}`]: props.type,
        [`${classPrefix.value}-banner`]: props.banner,
        [`${classPrefix.value}-with-icon`]: withIcon.value,
        [`${classPrefix.value}-with-description`]: withDescription.value,
        [`${classPrefix.value}-closable`]: props.closable,
        [`${classPrefix.value}-closing`]: closing.value
      };
    });
    classes.elIcon = computed(() => `${classPrefix.value}-icon`);
    classes.elMessage = computed(() => `${classPrefix.value}-message`);
    classes.elDescription = computed(() => `${classPrefix.value}-description`);
    classes.elBtnClose = computed(() => `${classPrefix.value}-btn-close`);

    // 渲染
    return () => {
      if (closed.value) {
        return;
      }

      let children = [];

      if (props.showIcon) {
        let icon;

        if (context.slots.icon) {
          icon = context.slots.icon();
        }
        else if (props.icon) {
          icon = (
            <VuiIcon type={props.icon} />
          );
        }
        else {
          let iconType = iconTypes[props.type];

          if (!withDescription.value) {
            iconType = iconType + "-filled";
          }

          icon = (
            <VuiIcon type={iconType} />
          );
        }

        children.push(
          <div class={classes.elIcon.value}>
            {icon}
          </div>
        );
      }

      children.push(
        <div class={classes.elMessage.value}>
          {context.slots.default?.() ?? context.slots.message?.() ?? props.message}
        </div>
      );

      if (withDescription.value) {
        children.push(
          <div class={classes.elDescription.value}>
            {context.slots.description?.() ?? props.description}
          </div>
        );
      }

      if (props.closable) {
        let btnClose;

        if (props.closeText) {
          btnClose = props.closeText;
        }
        else {
          btnClose = (
            <VuiIcon type="crossmark" />
          );
        }

        children.push(
          <div class={classes.elBtnClose.value} onClick={handleClose}>
            {btnClose}
          </div>
        );
      }

      return (
        <Transition name={props.animation} onAfterLeave={handleAfterClose}>
          <div ref={alertRef} v-show={!closing.value} class={classes.el.value}>
            {children}
          </div>
        </Transition>
      );
    };
  }
});
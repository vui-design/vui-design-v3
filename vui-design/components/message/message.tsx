import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes } from "vue";
import type { Type } from "./types";
import { defineComponent, ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { types } from "./constants";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 唯一标识
    id: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 提示类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "info"
    },
    // 自定义图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 提示内容
    content: {
      type: [String, Number, Function] as PropType<string | number | RenderFunction>,
      default: false
    },
    // 是否显示手动关闭按钮
    closable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 关闭按钮文本
    closeText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 自动关闭的延时时长
    duration: {
      type: Number as PropType<number>,
      default: 3000
    },
    // 是否显示背景色
    background: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 关闭事件回调
    onClose: {
      type: Function as PropType<(id: string | number) => void>,
      default: undefined
    }
  };
};

export type MessageProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-message",
  props: createProps(),
  setup(props, context) {
    // 自动关闭定时器
    const token = ref<number>();
    const countdown = {
      start: () => {
        if (props.duration > 0) {
          token.value = window.setTimeout(handleClose, props.duration);
        }
      },
      stop: () => {
        if (token.value) {
          window.clearTimeout(token.value);
          token.value = 0;
        }
      }
    };

    // 消息内容或自动关闭的延时时长发生变更时，重置自动关闭定时器
    watch(() => [props.content, props.duration], () => {
      countdown.stop();
      countdown.start();
    });

    // 关闭按钮点击事件回调
    const handleClose = () => props.onClose?.(props.id);

    // 组件挂载完成后启动自动关闭定时器，并在卸载前清除
    onMounted(() => countdown.start());
    onBeforeUnmount(() => countdown.stop());

    // 计算 class 样式
    const classPrefix = useClassPrefix("message", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.type}`]: props.type,
        [`${classPrefix.value}-with-background`]: props.background
      };
    });
    classes.elIcon = computed(() => `${classPrefix.value}-icon`);
    classes.elContent = computed(() => `${classPrefix.value}-content`);
    classes.elBtnClose = computed(() => `${classPrefix.value}-btn-close`);

    // 渲染
    return () => {
      // 图标
      let icon;

      if (context.slots.icon || props.icon) {
        icon = (
          <div class={classes.elIcon.value}>
            {
              context.slots.icon ? context.slots.icon() : (
                <VuiIcon type={props.icon} />
              )
            }
          </div>
        );
      }

      // 内容
      let content = (
        <div class={classes.elContent.value}>
          {
            context.slots.default ? context.slots.default() : (is.function(props.content) ? props.content() : props.content)
          }
        </div>
      );

      // 关闭按钮
      let btnClose;

      if (props.closable) {
        btnClose = (
          <div class={classes.elBtnClose.value} onClick={handleClose}>
            {
              props.closeText ? props.closeText : (
                <VuiIcon type="crossmark" />
              )
            }
          </div>
        );
      }

      // 
      return (
        <div class={classes.el.value}>
          {icon}
          {content}
          {btnClose}
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Type } from "../button/types";
import type { Trigger, Placement } from "../popup/types";
import { defineComponent, ref, computed } from "vue";
import { useI18n } from "../../locale";
import { types } from "../button/constants";
import { triggers, placements } from "../popup/constants";
import VuiIcon from "../icon";
import VuiButton from "../button";
import VuiPopup from "../popup";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 提示框默认是否可见（非受控模式）
    defaultVisible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 提示框是否可见（受控模式）
    visible: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 气泡确认框图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 气泡确认框标题
    title: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 触发方式
    trigger: {
      type: String as PropType<Trigger>,
      validator: (trigger: Trigger) => triggers.includes(trigger),
      default: "click"
    },
    // 气泡确认框的挂载容器
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<string | HTMLElement>,
      default: "body"
    },
    // 气泡确认框的弹出位置
    placement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "top"
    },
    // 弹出动画
    animation: {
      type: String as PropType<string>,
      default: "vui-popconfirm-scale"
    },
    // 取消按钮类型
    cancelType: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 取消按钮文本
    cancelText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 确认按钮类型
    okType: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "primary"
    },
    // 确认按钮文本
    okText: {
      type: String as PropType<string>,
      default: undefined
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
    // 是否在关闭时卸载气泡确认框
    destroyOnClose: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 气泡确认框标题的样式类名
    titleClassName: {
      type: [String, Object, Array] as PropType<string | object | Array<string | object>>,
      default: undefined
    },
    // 气泡确认框标题的样式
    titleStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 气泡确认框内容的样式类名
    contentClassName: {
      type: [String, Object, Array] as PropType<string | object | Array<string | object>>,
      default: undefined
    },
    // 气泡确认框内容的样式
    contentStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 气泡确认框箭头的样式类名
    arrowClassName: {
      type: [String, Object, Array] as PropType<string | object | Array<string | object>>,
      default: undefined
    },
    // 气泡确认框箭头的样式
    arrowStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 取消按钮点击事件回调
    onCancel: {
      type: Function as PropType<() => void | boolean | Promise<void | boolean>>,
      default: undefined
    },
    // 确认按钮点击事件回调
    onOk: {
      type: Function as PropType<() => void | boolean | Promise<void | boolean>>,
      default: undefined
    }
  };
};

export type PopconfirmProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-popconfirm",
  props: createProps(),
  emits: ["update:visible", "change", "open", "close", "resize"],
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // 可见状态（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => props.visible ?? defaultVisible.value);

    // 确认按钮 loading 状态
    const okLoading = ref(false);

    // 切换可见状态
    const toggle = (visible: boolean) => {
      defaultVisible.value = visible;

      context.emit("update:visible", visible);
      context.emit("change", visible);
    };

    // onChange 事件回调
    const handleChange = (visible: boolean) => toggle(visible);

    // onOpen 事件回调
    const handleOpen = () => {
      context.emit("open");
    };

    // onClose 事件回调
    const handleClose = () => {
      context.emit("close");
    };

    // onResize 事件回调
    const handleResize = () => {
      context.emit("resize");
    };

    // 取消按钮点击事件回调
    const handleCancel = () => {
      toggle(false);
      props.onCancel?.();
    };

    // 确认按钮点击事件回调
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

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "popconfirm"));
    let classes: Record<string, ComputedRef> = {};

    classes.elIcon = computed(() => `${className.value}-icon`);

    // 渲染
    return () => {
      // 图标
      const icon = context.slots.icon?.() ?? (
        <VuiIcon type={props.icon ?? "help-filled"} />
      );

      // 标题
      const title = context.slots.title?.() ?? props.title;

      // 插槽
      const slots = {
        title: () => {
          return (
            <>
              <div class={classes.elIcon.value}>{icon}</div>
              {title}
            </>
          );
        },
        content: () => {
          const cancelText = props.cancelText ?? translate("popconfirm.cancelText");
          const okText = props.okText ?? translate("popconfirm.okText");

          return (
            <>
              <VuiButton size="small" type={props.cancelType} onClick={handleCancel}>{cancelText}</VuiButton>
              <VuiButton size="small" type={props.okType} loading={okLoading.value} onClick={handleOk}>{okText}</VuiButton>
            </>
          );
        }
      };

      // 
      return (
        <VuiPopup
          classNamePrefix={props.classNamePrefix}
          name="popconfirm"
          visible={visible.value}
          trigger={props.trigger}
          getPopupContainer={props.getPopupContainer}
          placement={props.placement}
          animation={props.animation}
          offset={8}
          showArrow={true}
          mouseEnterDelay={props.mouseEnterDelay}
          mouseLeaveDelay={props.mouseLeaveDelay}
          destroyOnClose={props.destroyOnClose}
          titleClassName={props.titleClassName}
          titleStyle={props.titleStyle}
          contentClassName={props.contentClassName}
          contentStyle={props.contentStyle}
          arrowClassName={props.arrowClassName}
          arrowStyle={props.arrowStyle}
          disabled={props.disabled}
          onChange={handleChange}
          onOpen={handleOpen}
          onClose={handleClose}
          onResize={handleResize}
          v-slots={slots}
        >
          {context.slots.default?.()}
        </VuiPopup>
      );
    };
  }
});
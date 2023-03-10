import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Trigger, Placement } from "../popup/types";
import { defineComponent, ref, computed } from "vue";
import VuiPopup from "../popup";
import getClassName from "../../utils/getClassName";
import { triggers, placements } from "../popup/constants";

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
    // 气泡卡片标题
    title: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 气泡卡片内容
    content: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 触发方式
    trigger: {
      type: String as PropType<Trigger>,
      validator: (trigger: Trigger) => triggers.includes(trigger),
      default: "hover"
    },
    // 气泡卡片的挂载容器
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<string | HTMLElement>,
      default: "body"
    },
    // 气泡卡片的弹出位置
    placement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "top"
    },
    // 弹出动画
    animation: {
      type: String as PropType<string>,
      default: "vui-popover-scale"
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
    // 是否在关闭时卸载气泡卡片
    destroyOnClose: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type PopoverProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-popover",
  props: createProps(),
  emits: ["update:visible", "change", "show", "hide", "resize"],
  setup(props, context) {
    // 显示状态（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => props.visible ?? defaultVisible.value);

    // onChange 事件回调
    const handleChange = (visible: boolean) => {
      defaultVisible.value = visible;

      context.emit("update:visible", visible);
      context.emit("change", visible);
    };

    // 渲染
    return () => {
      const slots = {
        title: () => context.slots.title?.() ?? props.title,
        content: () => context.slots.content?.() ?? props.content
      };

      return (
        <VuiPopup
          classNamePrefix={props.classNamePrefix}
          name="popover"
          visible={visible.value}
          trigger={props.trigger}
          getPopupContainer={props.getPopupContainer}
          placement={props.placement}
          animation={props.animation}
          offset={10}
          showArrow={true}
          mouseEnterDelay={props.mouseEnterDelay}
          mouseLeaveDelay={props.mouseLeaveDelay}
          destroyOnClose={props.destroyOnClose}
          disabled={props.disabled}
          onChange={handleChange}
          v-slots={slots}
        >
          {context.slots.default?.()}
        </VuiPopup>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Trigger, Placement } from "../popup/types";
import type { Color } from "./types";
import { defineComponent, ref, computed } from "vue";
import VuiPopup from "../popup";
import getClassName from "../../utils/getClassName";
import { triggers, placements } from "../popup/constants";
import { colors } from "./constants";

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
    // 颜色
    color: {
      type: String as PropType<string | Color>,
      default: "dark"
    },
    // 提示框内容
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
    // 提示框的挂载容器
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<string | HTMLElement>,
      default: "body"
    },
    // 提示框的弹出位置
    placement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "top"
    },
    // 弹出动画
    animation: {
      type: String as PropType<string>,
      default: "vui-tooltip-scale"
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
    // 是否在关闭时卸载提示框
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

export type TooltipProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-tooltip",
  props: createProps(),
  emits: ["update:visible", "change", "open", "close", "resize"],
  setup(props, context) {
    // 显示状态（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => props.visible ?? defaultVisible.value);

    // 颜色
    const withPresetColor = computed(() => props.color && colors.indexOf(props.color) > -1);
    const withCustomColor = computed(() => props.color && colors.indexOf(props.color) === -1);

    // onChange 事件回调
    const handleChange = (visible: boolean) => {
      defaultVisible.value = visible;

      context.emit("update:visible", visible);
      context.emit("change", visible);
    };

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

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "tooltip"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}-${props.color}`]: withPresetColor.value
      };
    });

    // 计算 style 样式
    const styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      const style: CSSProperties = {};

      if (withCustomColor.value) {
        style.backgroundColor = props.color;
      }

      return style;
    });
    styles.elContent = computed(() => {
      const style: CSSProperties = {};

      if (withCustomColor.value) {
        style.color = "#fff";
      }

      return style;
    });
    styles.elArrow = computed(() => {
      const style: CSSProperties = {};

      if (withCustomColor.value) {
        style.backgroundColor = props.color;
      }

      return style;
    });

    // 渲染
    return () => {
      const slots = {
        content: () => context.slots.content?.() ?? props.content
      };

      return (
        <VuiPopup
          classNamePrefix={props.classNamePrefix}
          name="tooltip"
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
          disabled={props.disabled}
          class={classes.el.value}
          style={styles.el.value}
          contentStyle={styles.elContent.value}
          arrowStyle={styles.elArrow.value}
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
import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Trigger, Placement } from "../popup/types";
import type { Color } from "./types";
import { defineComponent, ref, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import { triggers, placements } from "../popup/constants";
import { colors } from "./constants";
import VuiPopup from "../popup";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
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
      default: false
    },
    // 颜色
    color: {
      type: String as PropType<string | Color>,
      default: "dark"
    },
    // 提示框内容
    content: {
      type: [String, Number, Function] as PropType<string | number | RenderFunction>,
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
    // 提示框内容的样式类名
    bodyClassName: {
      type: [String, Object, Array] as PropType<string | object | Array<string | object>>,
      default: undefined
    },
    // 提示框内容的样式
    bodyStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 提示框箭头的样式类名
    arrowClassName: {
      type: [String, Object, Array] as PropType<string | object | Array<string | object>>,
      default: undefined
    },
    // 提示框箭头的样式
    arrowStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
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
    // 是否为受控模式
    const isControlled = useControlled("visible");

    // 可见状态（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => isControlled.value ? props.visible : defaultVisible.value);

    // 颜色
    const withPresetColor = computed(() => props.color && colors.indexOf(props.color) > -1);
    const withCustomColor = computed(() => props.color && colors.indexOf(props.color) === -1);

    // onChange 事件回调
    const handleChange = (visible: boolean) => {
      if (!isControlled.value) {
        defaultVisible.value = visible;
      }

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
    const classPrefix = useClassPrefix("tooltip", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}-${props.color}`]: withPresetColor.value
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (withCustomColor.value) {
        style.backgroundColor = props.color;
        style.color = "#fff";
      }

      return style;
    });

    // 渲染
    return () => {
      const slots = {
        body: () => getSlotProp(context.slots, props, "content")
      };

      return (
        <VuiPopup
          classPrefix={props.classPrefix}
          name="tooltip"
          class={classes.el.value}
          style={styles.el.value}
          visible={visible.value}
          trigger={props.trigger}
          getPopupContainer={props.getPopupContainer}
          placement={props.placement}
          animation={props.animation}
          offset={12}
          showArrow={true}
          mouseEnterDelay={props.mouseEnterDelay}
          mouseLeaveDelay={props.mouseLeaveDelay}
          destroyOnClose={props.destroyOnClose}
          bodyClassName={props.bodyClassName}
          bodyStyle={props.bodyStyle}
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
import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { Trigger, Placement } from "../popup/types";
import { defineComponent, provide, ref, reactive, computed } from "vue";
import { triggers, placements } from "../popup/constants";
import { DropdownInjectionKey } from "./context";
import VuiPopup from "../popup";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 下拉菜单默认是否可见（非受控模式）
    defaultVisible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 下拉菜单是否可见（受控模式）
    visible: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 触发方式
    trigger: {
      type: String as PropType<Trigger>,
      validator: (trigger: Trigger) => triggers.includes(trigger),
      default: "hover"
    },
    // 下拉菜单的挂载容器
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<string | HTMLElement>,
      default: "body"
    },
    // 下拉菜单的弹出位置
    placement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "bottom-left"
    },
    // 弹出动画
    animation: {
      type: String as PropType<string>,
      default: "vui-dropdown-scale"
    },
    // 是否将下拉菜单的宽度设置为触发器宽度
    autofitPopupWidth: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否将下拉菜单的最小宽度设置为触发器宽度
    autofitPopupMinWidth: {
      type: Boolean as PropType<boolean>,
      default: true
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

export type DropdownProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-dropdown",
  props: createProps(),
  emits: ["update:visible", "change", "open", "close", "resize"],
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

    // 向后代组件注入当前组件
    provide(DropdownInjectionKey, reactive({
      onChange: handleChange
    }));

    // 渲染
    return () => {
      // 菜单
      const slots = {
        content: () => context.slots.menu?.()
      };

      // 
      return (
        <VuiPopup
          classPrefix={props.classPrefix}
          name="dropdown"
          visible={visible.value}
          trigger={props.trigger}
          getPopupContainer={props.getPopupContainer}
          placement={props.placement}
          animation={props.animation}
          autofitPopupWidth={props.autofitPopupWidth}
          autofitPopupMinWidth={props.autofitPopupMinWidth}
          offset={props.trigger === "contextmenu" ? 0 : 4}
          showArrow={false}
          alignMousePoint={props.trigger === "contextmenu"}
          mouseEnterDelay={props.mouseEnterDelay}
          mouseLeaveDelay={props.mouseLeaveDelay}
          contextmenuTriggerToClose={props.trigger === "contextmenu" ? false : true}
          destroyOnClose={props.destroyOnClose}
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
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Type, Shape, Size } from "../button/types";
import type { Trigger, Placement } from "../popup/types";
import { defineComponent, ref, computed } from "vue";
import VuiIcon from "../icon";
import VuiButton, { ButtonGroup as VuiButtonGroup } from "../button";
import VuiDropdown from "./dropdown";
import getClassName from "../../utils/getClassName";
import { types, shapes, sizes } from "../button/constants";
import { triggers, placements } from "../popup/constants";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 按钮类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 幽灵按钮
    ghost: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 按钮形状
    shape: {
      type: String as PropType<Shape>,
      validator: (shape: Shape) => shapes.includes(shape),
      default: undefined
    },
    // 按钮尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 按钮图标类型
    icon: {
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
      default: "bottom-right"
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
    // 设置按钮为加载状态
    loading: {
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

export type DropdownButtonProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-dropdown-button",
  props: createProps(),
  emits: ["click", "update:visible", "change", "open", "close", "resize"],
  setup(props, context) {
    // 显示状态（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => props.visible ?? defaultVisible.value);

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      context.emit("click", e);
    };

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
    const className = computed(() => getClassName(props.classNamePrefix, "dropdown-button"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);

    // 渲染
    return () => {
      let icon;

      if (context.slots.icon) {
        icon = context.slots.icon();
      }
      else {
        icon = (
          <VuiIcon type={props.icon ?? "more-x"} />
        );
      }

      // 
      const slots = {
        menu: () => context.slots.menu?.()
      };

      // 
      return (
        <VuiButtonGroup
          type={props.type}
          ghost={props.ghost}
          shape={props.shape}
          size={props.size}
          disabled={props.disabled}
          class={classes.el.value}
        >
          <VuiButton loading={props.loading} onClick={handleClick}>
            {context.slots.default?.()}
          </VuiButton>
          <VuiDropdown
            classNamePrefix={props.classNamePrefix}
            visible={visible.value}
            trigger={props.trigger}
            getPopupContainer={props.getPopupContainer}
            placement={props.placement}
            animation={props.animation}
            autofitPopupWidth={props.autofitPopupWidth}
            autofitPopupMinWidth={props.autofitPopupMinWidth}
            mouseEnterDelay={props.mouseEnterDelay}
            mouseLeaveDelay={props.mouseLeaveDelay}
            destroyOnClose={props.destroyOnClose}
            disabled={props.disabled}
            onChange={handleChange}
            onOpen={handleOpen}
            onClose={handleClose}
            onResize={handleResize}
            v-slots={slots}
          >
            <VuiButton>{icon}</VuiButton>
          </VuiDropdown>
        </VuiButtonGroup>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Trigger, Placement } from "../popup/types";
import { defineComponent, inject, ref, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import { triggers, placements } from "../popup/constants";
import { BreadcrumbInjectionKey } from "./context";
import VuiIcon from "../icon";
import VuiDropdown from "../dropdown";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 项目图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 项目标题
    title: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 点击后的跳转地址，指定此属性后按钮的行为和 a 链接一致
    href: {
      type: String as PropType<string>,
      default: undefined
    },
    // 同 a 链接的 target 属性
    target: {
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
      default: "bottom"
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

export type BreadcrumbItemProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-breadcrumb-item",
  props: createProps(),
  emits: ["click", "update:visible", "change", "open", "close", "resize"],
  setup(props, context) {
    // 注入祖先组件
    const vuiBreadcrumb = inject(BreadcrumbInjectionKey, undefined);

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
    const classPrefix = useClassPrefix("breadcrumb-item", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-with-menu`]: context.slots.menu
      };
    });
    classes.elLink = computed(() => `${classPrefix.value}-link`);
    classes.elArrow = computed(() => `${classPrefix.value}-arrow`);
    classes.elSeparator = computed(() => `${classPrefix.value}-separator`);

    // 渲染
    return () => {
      // 
      let icon;

      if (context.slots.icon) {
        icon = context.slots.icon?.();
      }
      else if (props.icon) {
        icon = (
          <VuiIcon type={props.icon} />
        );
      }

      // 
      let title = context.slots.default?.() ?? getSlotProp(context.slots, props, "title");

      // 
      let arrow;

      if (context.slots.menu) {
        arrow = (
          <div class={classes.elArrow.value}>
            <VuiIcon type="chevron-down" />
          </div>
        );
      }

      // 
      let link;

      if (props.href) {
        link = (
          <a href={props.href} target={props.target} class={classes.elLink.value} onClick={handleClick}>
            {icon}
            {title}
            {arrow}
          </a>
        );
      }
      else {
        link = (
          <label class={classes.elLink.value} onClick={handleClick}>
            {icon}
            {title}
            {arrow}
          </label>
        );
      }

      // 
      const slots = {
        menu: () => context.slots.menu?.()
      };

      // 
      return (
        <div class={classes.el.value}>
          {
            context.slots.menu ? (
              <VuiDropdown
                classPrefix={props.classPrefix}
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
                {link}
              </VuiDropdown>
            ) : link
          }
          <div class={classes.elSeparator.value}>
            {vuiBreadcrumb?.separator}
          </div>
        </div>
      );
    };
  }
});
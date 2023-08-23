import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes } from "vue";
import type { Key } from "../../types";
import { defineComponent, inject, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import { TabsInjectionKey } from "./context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import useKey from "../../hooks/useKey";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 页签唯一标识
    key: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 页签图标类型/图标
    icon: {
      type: [String, Function] as PropType<string | RenderFunction>,
      default: undefined
    },
    // 页签标题
    title: {
      type: [String, Number, Function] as PropType<string | number | RenderFunction>,
      default: undefined
    },
    // 是否允许关闭当前页签
    closable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否禁用当前页签
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type TabNavProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-tab-nav",
  props: createProps(),
  emits: ["click", "close"],
  setup(props, context) {
    // 注入祖先组件
    const vuiTabs = inject(TabsInjectionKey, undefined);

    // 唯一标识
    const key = useKey();

    // 
    const handleClick = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("click", key.value);
    };

    // 
    const handleClose = (e: MouseEvent) => {
      e.stopPropagation();

      if (props.disabled) {
        return;
      }

      context.emit("close", key.value);
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("tabs-nav", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-active`]: key.value === vuiTabs?.activeKey,
        [`${classPrefix.value}-disabled`]: props.disabled
      };
    });
    classes.elIcon = computed(() => `${classPrefix.value}-icon`);
    classes.elTitle = computed(() => `${classPrefix.value}-title`);
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
                is.function(props.icon) ? props.icon() : (
                  <VuiIcon type={props.icon} />
                )
              )
            }
          </div>
        );
      }

      // 标题
      let title = (
        <div class={classes.elTitle.value}>
          {getSlotProp(context.slots, props, "title")}
        </div>
      );

      // 关闭按钮
      let btnClose;

      if (props.closable && !props.disabled) {
        btnClose = (
          <div class={classes.elBtnClose.value} onClick={handleClose}>
            <VuiIcon type="crossmark" />
          </div>
        );
      }

      // 
      return (
        <div class={classes.el.value} onClick={handleClick}>
          {icon}
          {title}
          {btnClose}
        </div>
      );
    };
  }
});
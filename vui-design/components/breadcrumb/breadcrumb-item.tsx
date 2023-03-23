import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, inject, computed } from "vue";
import VuiIcon from "../icon";
import getClassName from "../../utils/getClassName";
import { getSlotProp } from "../..//utils/vue";
import { BreadcrumbInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
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
    }
  };
};

export type BreadcrumbItemProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-breadcrumb-item",
  props: createProps(),
  emits: ["click"],
  setup(props, context) {
    // 注入祖先组件
    const vuiBreadcrumb = inject(BreadcrumbInjectionKey, undefined);

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      context.emit("click", e);
    };

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "breadcrumb-item"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);
    classes.elLink = computed(() => `${className.value}-link`);
    classes.elSeparator = computed(() => `${className.value}-separator`);

    // 渲染
    return () => {
      // 图标
      let icon;

      if (context.slots.icon) {
        icon = context.slots.icon?.();
      }
      else if (props.icon) {
        icon = (
          <VuiIcon type={props.icon} />
        );
      }

      // 标题
      let title = context.slots.default?.() ?? getSlotProp(context.slots, props, "title");

      // 
      let children = [];

      if (props.href) {
        children.push(
          <a href={props.href} target={props.target} class={classes.elLink.value} onClick={handleClick}>
            {icon}
            {title}
          </a>
        );
      }
      else {
        children.push(
          <label class={classes.elLink.value} onClick={handleClick}>
            {icon}
            {title}
          </label>
        );
      }

      children.push(
        <div class={classes.elSeparator.value}>
          {vuiBreadcrumb?.separator}
        </div>
      );

      return (
        <div class={classes.el.value}>
          {children}
        </div>
      );
    };
  }
});
import type { VNode, ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Type, Size } from "./types";
import { Text, defineComponent, computed } from "vue";
import VuiIcon from "../icon";
import getClassName from "../../utils/getClassName";
import { types, sizes } from "./constants";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 链接类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 链接是否为块级元素
    block: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 链接尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 链接图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 链接点击后的跳转地址，指定此属性后链接的行为和 a 链接一致
    href: {
      type: String as PropType<string>,
      default: undefined
    },
    // 同 a 链接的 target 属性
    target: {
      type: String as PropType<string>,
      default: undefined
    },
    // 鼠标移入时是否显示下划线
    underline: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 链接是否为加载状态
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 链接是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type LinkProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-link",
  inheritAttrs: false,
  props: createProps(),
  emits: ["click"],
  setup(props, context) {
    // 将纯文本子元素使用 span 标签包裹
    const insertTextIntoSpan = (target: VNode) => {
      if (target?.type === Text) {
        let text = target?.children;

        if (text) {
          text = (text as string).trim();
        }

        return (
          <span>{text}</span>
        );
      }
      else {
        return target;
      }
    };

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      if (props.loading || props.disabled) {
        return e.preventDefault();
      }

      context.emit("click", e);
    };

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "link"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${props.type}`]: props.type,
        [`${className.value}-${props.size}`]: props.size,
        [`${className.value}-block`]: props.block,
        [`${className.value}-underline`]: props.underline,
        [`${className.value}-loading`]: props.loading,
        [`${className.value}-disabled`]: props.disabled
      };
    });

    // 渲染
    return () => {
      // 图标
      let icon;

      if (props.icon || props.loading) {
        icon = (
          <VuiIcon type={props.loading ? "loading" : props.icon} />
        );
      }

      // 内容
      const children = context.slots.default?.();
      const kids = children?.map(child => insertTextIntoSpan(child));

      // 
      const attributes = {
        ...context.attrs,
        href: props.href,
        target: props.target,
        class: [classes.el.value, context.attrs.class],
        onClick: handleClick
      };

      // 
      return (
        <a {...attributes}>
          {icon}
          {kids}
        </a>
      );
    };
  }
});
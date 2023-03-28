import type { VNode, ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { HTMLType, Type, Shape, Size } from "./types";
import { Text, defineComponent, inject, ref, computed, onMounted, onBeforeUnmount } from "vue";
import { types, shapes, sizes } from "./constants";
import { FormInjectionKey } from "../form/context";
import { ButtonGroupInjectionKey, InputGroupInjectionKey } from "./context";
import VuiIcon from "../icon";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 按钮的原生 type 属性
    htmlType: {
      type: String as PropType<HTMLType>,
      default: "button"
    },
    // 按钮类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 按钮是否为块级元素
    block: {
      type: Boolean as PropType<boolean>,
      default: false
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
    // 按钮点击后的跳转地址，指定此属性后按钮的行为和 a 链接一致
    href: {
      type: String as PropType<string>,
      default: undefined
    },
    // 同 a 链接的 target 属性
    target: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否自动获得焦点
    autofocus: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 按钮是否为加载状态
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 按钮是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-button",
  inheritAttrs: false,
  props: createProps(),
  emits: ["click"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiButtonGroup = inject(ButtonGroupInjectionKey, undefined);
    const vuiInputGroup = inject(InputGroupInjectionKey, undefined);

    // DOM 引用
    const buttonRef = ref<HTMLLinkElement | HTMLButtonElement>();

    // 基础属性
    const type = computed(() => vuiButtonGroup?.type ?? props.type ?? "default");
    const ghost = computed(() => vuiButtonGroup?.ghost ?? props.ghost ?? false);
    const shape = computed(() => vuiButtonGroup?.shape ?? props.shape);
    const size = computed(() => props.size ?? vuiButtonGroup?.size ?? vuiInputGroup?.size ?? vuiForm?.size ?? "medium");
    const disabled = computed(() => vuiForm?.disabled || vuiButtonGroup?.disabled || vuiInputGroup?.disabled || props.disabled);

    // 定时器，用于自动聚焦
    const timeout = ref();

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

    // 组件挂载完成之后执行
    onMounted(() => {
      if (props.autofocus && buttonRef.value) {
        timeout.value = setTimeout(() => buttonRef?.value?.focus());
      }
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      timeout.value && clearTimeout(timeout.value);
    });

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "button"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${type.value}`]: type.value,
        [`${className.value}-block`]: props.block,
        [`${className.value}-ghost`]: ghost.value,
        [`${className.value}-${shape.value}`]: shape.value,
        [`${className.value}-${size.value}`]: size.value,
        [`${className.value}-loading`]: props.loading,
        [`${className.value}-disabled`]: disabled.value
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
        class: [classes.el.value, context.attrs.class],
        onClick: handleClick
      };

      // 
      if (props.href) {
        return (
          <a ref={buttonRef} href={props.href} target={props.target} {...attributes}>
            {icon}
            {kids}
          </a>
        );
      }
      else {
        return (
          <button ref={buttonRef} type={props.htmlType} {...attributes} disabled={disabled.value}>
            {icon}
            {kids}
          </button>
        );
      }
    };
  }
});
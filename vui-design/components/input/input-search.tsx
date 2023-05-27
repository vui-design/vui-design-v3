import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Type } from "../button/types";
import { defineComponent, ref, computed } from "vue";
import { sizes } from "../../constants";
import { types } from "../button/constants";
import VuiInput from "./input";
import VuiButton from "../button";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 默认值（非受控模式）
    defaultValue: {
      type: [String, Number] as PropType<string | number>,
      default: ""
    },
    // 值（受控模式）
    value: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 按钮类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 按钮图标类型
    icon: {
      type: [String, Boolean] as PropType<string | boolean>,
      default: "search"
    },
    // 按钮文本
    text: {
      type: String as PropType<string>,
      default: undefined
    },
    // 输入框占位文本
    placeholder: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否含有边框
    bordered: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 输入框尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 是否自动获得焦点
    autofocus: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否允许清空
    clearable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 按钮是否为加载中状态
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 输入框是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type InputSearchProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-input-search",
  props: createProps(),
  emits: ["update:value", "change", "search"],
  setup(props, context) {
    // 是否为受控模式
    const isControlled = useControlled("value");

    // 值（defaultValue 非受控模式，value 受控模式）
    const defaultValue = ref(props.defaultValue);
    const value = computed(() => isControlled.value ? props.value : defaultValue.value);

    // 
    const change = (newValue: string | number) => {
      if (value.value === newValue) {
        return;
      }

      if (!isControlled.value) {
        defaultValue.value = newValue;
      }

      context.emit("update:value", newValue);
      context.emit("change", newValue);
    };

    // 
    const handleChange = (newValue: string | number) => {
      change(newValue);
    };

    // 
    const handleClick = () => {
      context.emit("search", value.value);
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("input-search", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 渲染
    return () => {
      const slots = {
        addonAfter: () => {
          const buttonAttributes = {
            type: props.type,
            icon: props.icon === false ? undefined : (props.icon === true ? "search" : props.icon),
            size: props.size,
            loading: props.loading,
            disabled: props.disabled,
            onClick: handleClick
          };

          return (
            <VuiButton {...buttonAttributes}>
              {props.text}
            </VuiButton>
          );
        }
      };

      return (
        <VuiInput
          classPrefix={props.classPrefix}
          class={classes.el.value}
          value={value.value}
          placeholder={props.placeholder}
          size={props.size}
          bordered={props.bordered}
          autofocus={props.autofocus}
          clearable={props.clearable}
          disabled={props.disabled}
          validator={false}
          v-slots={slots}
          onChange={handleChange}
          onEnter={handleClick}
        />
      );
    };
  }
});
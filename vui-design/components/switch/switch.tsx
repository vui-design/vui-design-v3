import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Size } from "../../types";
import type { Type } from "./types";
import { defineComponent, inject, ref, computed } from "vue";
import { sizes } from "../../constants";
import { types } from "./constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import colours from "../../utils/colours";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 开关类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "circle"
    },
    // 开关尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 开关是否为加载状态
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 默认是否打开（非受控模式）
    defaultChecked: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: false
    },
    // 是否打开（受控模式）
    checked: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined
    },
    // 是否禁用开关
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 用于设置开关打开时的值，例如使用 0 和 1 来标记开关的打开状态
    checkedValue: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: true
    },
    // 用于设置开关关闭时的值，例如使用 0 和 1 来标记开关的打开状态
    uncheckedValue: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: false
    },
    // 用于设置开关打开时的 16 进制颜色值
    checkedColor: {
      type: String as PropType<string>,
      default: undefined
    },
    // 用于设置开关关闭时的 16 进制颜色值
    uncheckedColor: {
      type: String as PropType<string>,
      default: undefined
    },
    // 用于设置开关打开时的显示内容
    checkedText: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 用于设置开关关闭时的显示内容
    uncheckedText: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 打开状态变化时是否触发父级表单验证
    validator: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type SwitchProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-switch",
  inheritAttrs: false,
  props: createProps(),
  emits: ["update:checked", "change", "focus", "blur"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);

    // 基础属性
    const size = computed(() => props.size ?? vuiForm?.size ?? "medium");
    const focused = ref(false);
    const disabled = computed(() => vuiForm?.disabled || props.disabled);

    // 打开状态
    const defaultChecked = ref(props.defaultChecked);
    const checked = computed(() => (props.checked ?? defaultChecked.value) === props.checkedValue);

    // 颜色
    const color = computed(() => {
      const colour = checked.value ? props.checkedColor : props.uncheckedColor;

      if (!colour) {
        return;
      }

      return props.loading || disabled.value ? colours.rgba2hex(colours.hex2rgba(colour, 0.6)) : colour;
    });

    // onFocus 事件回调
    const handleFocus = (e: FocusEvent) => {
      focused.value = true;
      context.emit("focus", e);
    };

    // onBlur 事件回调
    const handleBlur = (e: FocusEvent) => {
      focused.value = false;
      context.emit("blur", e);
    };

    // onChange 事件回调
    const handleChange = (e: MouseEvent) => {
      if (props.loading || disabled.value) {
        return;
      }

      const newValue = checked.value ? props.uncheckedValue : props.checkedValue;

      if (!is.existy(props.checked)) {
        defaultChecked.value = newValue;
      }

      context.emit("update:checked", newValue);
      context.emit('change', newValue);

      if (props.validator) {
        vuiFormItem?.onChange(newValue);
      }
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("switch", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.type}`]: props.type,
        [`${classPrefix.value}-${size.value}`]: size.value,
        [`${classPrefix.value}-loading`]: props.loading,
        [`${classPrefix.value}-focused`]: focused.value,
        [`${classPrefix.value}-checked`]: checked.value,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });
    classes.elInput = computed(() => `${classPrefix.value}-input`);
    classes.elInputSpin = computed(() => `${classPrefix.value}-input-spin`);
    classes.elLabel = computed(() => `${classPrefix.value}-label`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (color.value) {
        style.backgroundColor = color.value;
      }

      return style;
    });
    styles.elInputSpin = computed(() => {
      let style: CSSProperties = {};

      if (color.value && props.loading) {
        style.borderBottomColor = color.value;
      }

      return style;
    });

    // 渲染
    return () => {
      const label = checked.value ? (context.slots.checkedText?.() ?? props.checkedText) : (context.slots.uncheckedText?.() ?? props.uncheckedText);
      const attributes = {
        ...context.attrs,
        class: [classes.el.value, context.attrs.class],
        style: [styles.el.value, context.attrs.style],
        disabled: props.loading || disabled.value,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onClick: handleChange
      };

      return (
        <button type="button" {...attributes}>
          <div class={classes.elInput.value}>
            {
              !props.loading ? null : (
                <div class={classes.elInputSpin.value} style={styles.elInputSpin.value} />
              )
            }
          </div>
          {
            props.type === "line" || label === undefined ? null : (
              <div class={classes.elLabel.value}>{label}</div>
            )
          }
        </button>
      );
    };
  }
});
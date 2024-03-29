import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Size } from "../../types";
import type { Type } from "./types";
import { defineComponent, inject, ref, computed, nextTick } from "vue";
import { sizes } from "../../constants";
import { types } from "./constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import { RadioGroupInjectionKey } from "./context";
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
    // 原生 input[type="radio"] 元素名称
    name: {
      type: String as PropType<string>,
      default: undefined
    },
    // 单选框样式类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 单选框尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 该属性仅在 type 为 button 时有效，用于指定单选按钮的最小宽度
    minWidth: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 单选框文本
    label: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 该属性仅在单选组合中有效，用于指定单选框的 value 值，组合会自动判断是否选中
    value: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined
    },
    // 默认是否选中（非受控模式）
    defaultChecked: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: false
    },
    // 是否选中（受控模式）
    checked: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: false
    },
    // 是否禁用单选框
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 该属性仅在单独使用时有效，用于设置选中时的值，例如使用 0 和 1 来标记单选框的选中状态
    checkedValue: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: true
    },
    // 该属性仅在单独使用时有效，用于设置未选中时的值，例如使用 0 和 1 来标记单选框的选中状态
    uncheckedValue: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: false
    },
    // 选中状态变化时是否触发父级表单验证
    validator: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type RadioProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-radio",
  inheritAttrs: false,
  props: createProps(),
  emits: ["update:checked", "change", "focus", "blur"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);
    const vuiRadioGroup = inject(RadioGroupInjectionKey, undefined);

    // DOM 引用
    const radioRef = ref<HTMLInputElement>();

    // 内部状态
    const name = computed(() => vuiRadioGroup?.name ?? props.name);
    const type = computed(() => vuiRadioGroup?.type ?? props.type ?? "default");
    const size = computed(() => props.size ?? vuiRadioGroup?.size ?? vuiForm?.size ?? "medium");
    const minWidth = computed(() => props.minWidth ?? vuiRadioGroup?.minWidth);
    const focused = ref(false);
    const disabled = computed(() => props.disabled ?? vuiRadioGroup?.disabled ?? vuiForm?.disabled ?? false);

    // 是否为受控模式
    const isControlled = useControlled("checked");

    // 选中状态（defaultChecked 非受控模式，checked 受控模式）
    const defaultChecked = ref(props.defaultChecked);
    const checked = computed(() => {
      const value = isControlled.value ? props.checked : defaultChecked.value;

      if (vuiRadioGroup) {
        return vuiRadioGroup.value === props.value;
      }
      else {
        return value === props.checkedValue;
      }
    });

    // onFocus 事件回调
    const handleFocus = (e: FocusEvent) => {
      if (disabled.value) {
        return;
      }

      focused.value = true;
      context.emit("focus", e);
    };

    // onBlur 事件回调
    const handleBlur = (e: FocusEvent) => {
      if (disabled.value) {
        return;
      }

      focused.value = false;
      context.emit("blur", e);
    };

    // onChange 事件回调
    const handleChange = (e: Event) => {
      const { checked: newChecked } = e.target as HTMLInputElement;

      if (disabled.value) {
        return;
      }

      if (vuiRadioGroup) {
        vuiRadioGroup?.onChange(newChecked, props.value as boolean | string | number);
      }
      else {
        const newValue = newChecked ? props.checkedValue : props.uncheckedValue;

        if (!isControlled.value) {
          defaultChecked.value = newValue;
        }

        context.emit("update:checked", newValue);
        context.emit('change', newValue);

        if (props.validator) {
          vuiFormItem?.onChange(newValue);
        }
      }

      nextTick(() => {
        if (radioRef.value && radioRef.value.checked !== checked.value) {
          radioRef.value.checked = checked.value;
        }
      });
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix(type.value === "button" ? "radio-button" : "radio", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${size.value}`]: size.value,
        [`${classPrefix.value}-focused`]: focused.value,
        [`${classPrefix.value}-checked`]: checked.value,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });
    classes.elInput = computed(() => `${classPrefix.value}-input`);
    classes.elLabel = computed(() => `${classPrefix.value}-label`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (type.value === "button" && minWidth.value) {
        style.minWidth = is.string(minWidth.value) ? minWidth.value : `${minWidth.value}px`;
      }

      return style;
    });

    // 渲染
    return () => {
      const label = context.slots.default?.() ?? props.label;
      const attributes = {
        ...context.attrs,
        name: name.value,
        value: props.value,
        checked: checked.value,
        disabled: disabled.value,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange
      };

      return (
        <label class={classes.el.value} style={styles.el.value}>
          <div class={classes.elInput.value}>
            <input type="radio" ref={radioRef} {...attributes} />
          </div>
          {
            !label ? null : (
              <div class={classes.elLabel.value}>{label}</div>
            )
          }
        </label>
      );
    };
  }
});
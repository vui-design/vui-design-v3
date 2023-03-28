import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Type, Size } from "./types";
import { defineComponent, inject, ref, computed, watch, nextTick } from "vue";
import { types, sizes } from "./constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import { CheckboxGroupInjectionKey } from "./context";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 原生 input[type="checkbox"] 元素名称
    name: {
      type: String as PropType<string>,
      default: undefined
    },
    // 多选框样式类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 多选框尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 该属性仅在 type 为 button 时有效，用于指定多选按钮的最小宽度
    minWidth: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 多选框文本
    label: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 该属性仅在多选组合中有效，用于指定多选框的 value 值，组合会自动判断是否选中
    value: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 负责样式控制
    indeterminate: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 默认是否选中（非受控模式）
    defaultChecked: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: false
    },
    // 是否选中（受控模式）
    checked: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined
    },
    // 是否禁用多选框
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 该属性仅在单独使用时有效，用于设置选中时的值，例如使用 0 和 1 来标记多选框的选中状态
    checkedValue: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: true
    },
    // 该属性仅在单独使用时有效，用于设置未选中时的值，例如使用 0 和 1 来标记多选框的选中状态
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

export type CheckboxProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-checkbox",
  inheritAttrs: false,
  props: createProps(),
  emits: ["update:checked", "change", "focus", "blur"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);
    const vuiCheckboxGroup = inject(CheckboxGroupInjectionKey, undefined);

    // DOM 引用
    const checkboxRef = ref<HTMLInputElement>();

    // 基础属性
    const name = computed(() => vuiCheckboxGroup?.name ?? props.name);
    const type = computed(() => vuiCheckboxGroup?.type ?? props.type ?? "default");
    const size = computed(() => props.size ?? vuiCheckboxGroup?.size ?? vuiForm?.size ?? "medium");
    const minWidth = computed(() => props.minWidth ?? vuiCheckboxGroup?.minWidth);
    const focused = ref(false);
    const disabled = computed(() => vuiForm?.disabled || vuiCheckboxGroup?.disabled || props.disabled);

    // 选中状态
    const defaultChecked = ref(props.defaultChecked);
    const checked = computed(() => {
      const value = props.checked ?? defaultChecked.value;

      if (vuiCheckboxGroup) {
        return vuiCheckboxGroup.value.includes(props.value as string | number);
      }
      else {
        return value === props.checkedValue;
      }
    });

    // 监听 checked 属性变化
    watch(() => props.checked, newValue => {
      if (is.boolean(newValue) || is.string(newValue) || is.number(newValue)) {
        defaultChecked.value = newValue;
      }
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
    const handleChange = (e: Event) => {
      const { checked: newChecked } = e.target as HTMLInputElement;

      if (disabled.value) {
        return;
      }

      if (vuiCheckboxGroup) {
        vuiCheckboxGroup?.onChange(newChecked, props.value as string | number);
      }
      else {
        const value = newChecked ? props.checkedValue : props.uncheckedValue;

        defaultChecked.value = value;

        context.emit("update:checked", value);
        context.emit('change', value);

        if (props.validator) {
          vuiFormItem?.onChange(value);
        }
      }

      nextTick(() => {
        if (checkboxRef.value && checkboxRef.value.checked !== checked.value) {
          checkboxRef.value.checked = checked.value;
        }
      });
    };

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, type.value === "button" ? "checkbox-button" : "checkbox"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${size.value}`]: size.value,
        [`${className.value}-focused`]: focused.value,
        [`${className.value}-indeterminate`]: props.indeterminate,
        [`${className.value}-checked`]: checked.value,
        [`${className.value}-disabled`]: disabled.value
      };
    });
    classes.elInput = computed(() => `${className.value}-input`);
    classes.elLabel = computed(() => `${className.value}-label`);

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
            {
              type.value === "button" ? null : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                    <path d="M0.020966 0l1023.958044 0 0 1024-1023.958044 0 0-1024Z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1248 1024">
                    <path d="M123.800257 460.153135l291.677674 232.393077 726.28329-669.078427s48.722384-44.483585 91.293444-9.727389c12.638284 10.392563 27.272086 39.993364-5.653359 86.388252L469.106727 988.380911s-58.120238 79.570536-127.131004-0.831161L14.711914 545.710226s-38.829006-59.865554 9.72861-95.701892c16.463333-11.973111 53.713011-30.763938 99.360954 10.14358z"></path>
                  </svg>
                </>
              )
            }
            <input type="checkbox" ref={checkboxRef} {...attributes} />
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
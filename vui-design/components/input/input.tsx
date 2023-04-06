import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Size } from "../../types";
import { defineComponent, inject, ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import { getSlotProp } from "../../utils/vue";
import { sizes, keyCodes } from "../../constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import { InputGroupInjectionKey } from "./context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import omit from "../../utils/omit";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 输入框类型
    type: {
      type: String as PropType<string>,
      default: "text"
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
    // 输入框占位文本
    placeholder: {
      type: String as PropType<string>,
      default: undefined
    },
    // 最大输入长度
    maxLength: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 前置标签
    prepend: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 后置标签
    append: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 前缀图标类型
    prefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 后缀图标类型
    suffix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 输入框尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 是否含有边框
    bordered: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否自动获得焦点
    autofocus: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否允许清空
    clearable: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 文本框是否为只读状态
    readonly: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 文本框是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 值变化时是否触发父级表单验证
    validator: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type InputProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-input",
  inheritAttrs: false,
  props: createProps(),
  emits: ["update:value", "change", "mouseenter", "mouseleave", "focus", "blur", "keydown", "keyup", "enter", "clear"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);
    const vuiInputGroup = inject(InputGroupInjectionKey, undefined);

    // DOM 引用
    const inputRef = ref<HTMLInputElement>();

    // 定时器，用于自动聚焦
    const timeout = ref();

    // 输入法输入状态
    const composing = ref(false);

    // 密码加密状态
    const encrypted = ref(true);

    // 基础属性
    const type = computed(() => props.type === "password" && !encrypted.value ? "text" : props.type);
    const size = computed(() => props.size ?? vuiInputGroup?.size ?? vuiForm?.size ?? "medium");
    const hovered = ref(false);
    const focused = ref(false);
    const disabled = computed(() => props.disabled ?? vuiInputGroup?.disabled ?? props.disabled ?? false);

    // 值
    const defaultValue = ref(props.defaultValue);
    const value = computed(() => props.value ?? defaultValue.value);

    // 清空按钮 & 密码切换按钮显示状态
    const showBtnClear = computed(() => props.clearable && hovered.value && !props.readonly && !disabled.value && is.effective(value.value));
    const showBtnToggle = computed(() => props.type === "password" && !props.readonly && !disabled.value);

    // 
    const setValue = (newValue: string | number, callback?: Function) => {
      if (value.value === newValue) {
        return;
      }

      if (!is.existy(props.value)) {
        defaultValue.value = newValue;
      }

      context.emit("update:value", newValue);
      context.emit("change", newValue);

      nextTick(() => {
        if (inputRef.value && inputRef.value.value !== value.value) {
          inputRef.value.value = value.value as string;
        }

        if (is.function(callback)) {
          callback();
        }
      });
    };

    // 对外提供 focus、blur 等方法
    const focus = () => inputRef.value?.focus();
    const blur = () => inputRef.value?.blur();
    const select = () => inputRef.value?.select();
    const setSelectionRange = (
      start: number,
      end: number,
      direction?: "forward" | "backward" | "none"
    ) => {
      inputRef.value?.setSelectionRange(start, end, direction);
    };

    context.expose({
      focus,
      blur,
      select,
      setSelectionRange
    });

    // onMouseenter 事件回调
    const handleMouseenter = (e: MouseEvent) => {
      if (disabled.value) {
        return;
      }

      hovered.value = true;
      context.emit("mouseenter", e);
    };

    // onMouseleave 事件回调
    const handleMouseleave = (e: MouseEvent) => {
      if (disabled.value) {
        return;
      }

      hovered.value = false;
      context.emit("mouseleave", e);
    };

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

      if (props.validator) {
        vuiFormItem?.onBlur(value.value);
      }
    };

    // onKeydown 事件回调
    const handleKeydown = (e: KeyboardEvent) => {
      if (disabled.value) {
        return;
      }

      context.emit("keydown", e);

      if (e.keyCode === keyCodes.enter) {
        context.emit("enter", e);
      }
    };

    // onKeyup 事件回调
    const handleKeyup = (e: KeyboardEvent) => {
      if (disabled.value) {
        return;
      }

      context.emit("keyup", e);
    };

    // onComposition 事件回调
    const handleComposition = (e: CompositionEvent) => {
      if (disabled.value) {
        return;
      }

      if (e.type === "compositionend") {
        composing.value = false;
        handleInput(e);
      }
      else {
        composing.value = true;
      }
    };

    // onInput 事件回调
    const handleInput = (e: Event) => {
      if (composing.value || disabled.value) {
        return;
      }

      const { value } = e.target as HTMLInputElement;

      setValue(value);

      if (props.validator) {
        vuiFormItem?.onChange(value);
      }
    };

    // 切换密码可见状态
    const handleToggle = () => {
      encrypted.value = !encrypted.value;
    };

    // 清空输入框值
    const handleClear = () => {
      if (props.disabled) {
        return;
      }

      const value = "";

      context.emit("clear");
      setValue(value, () => focus());

      if (props.validator) {
        vuiFormItem?.onChange(value);
      }
    };

    // 组件挂载完成之后执行
    onMounted(() => {
      if (props.autofocus && inputRef.value) {
        timeout.value = setTimeout(() => inputRef?.value?.focus());
      }
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      timeout.value && clearTimeout(timeout.value);
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("input", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-with-prefix`]: context.slots.prefix || props.prefix,
        [`${classPrefix.value}-with-suffix`]: showBtnClear.value || showBtnToggle.value || context.slots.suffix || props.suffix,
        [`${classPrefix.value}-bordered`]: props.bordered,
        [`${classPrefix.value}-${size.value}`]: size.value,
        [`${classPrefix.value}-hovered`]: hovered.value,
        [`${classPrefix.value}-focused`]: focused.value,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });
    classes.elPrepend = computed(() => `${classPrefix.value}-prepend`);
    classes.elAppend = computed(() => `${classPrefix.value}-append`);
    classes.elPrefix = computed(() => `${classPrefix.value}-prefix`);
    classes.elSuffix = computed(() => `${classPrefix.value}-suffix`);
    classes.elInput = computed(() => `${classPrefix.value}-input`);
    classes.elBtnToggle = computed(() => `${classPrefix.value}-btn-toggle`);
    classes.elBtnClear = computed(() => `${classPrefix.value}-btn-clear`);

    // 
    const getPrepend = () => {
      if (!context.slots.prepend && !props.prepend) {
        return;
      }

      return (
        <div class={classes.elPrepend.value}>
          {getSlotProp(context.slots, props, "prepend")}
        </div>
      );
    };

    // 
    const getInput = () => {
      let prefix;

      if (context.slots.prefix || props.prefix) {
        prefix = (
          <div class={classes.elPrefix.value}>
            {
              context.slots.prefix ? context.slots.prefix() : (
                <VuiIcon type={props.prefix} />
              )
            }
          </div>
        );
      }

      let suffix;

      if (showBtnClear.value || showBtnToggle.value || context.slots.suffix || props.suffix) {
        let btnClear;

        if (showBtnClear.value) {
          const btnClearAttributes = {
            type: "crossmark-circle-filled",
            class: classes.elBtnClear.value,
            onMousedown: (e: MouseEvent) => e.preventDefault(),
            onClick: handleClear
          };

          btnClear = (
            <VuiIcon {...btnClearAttributes} />
          );
        }

        let btnToggle;

        if (showBtnToggle.value) {
          const btnToggleAttributes = {
            type: encrypted.value ? "eye" : "eye-off",
            class: classes.elBtnToggle.value,
            onMousedown: (e: MouseEvent) => e.preventDefault(),
            onClick: handleToggle
          };
  
          btnToggle = (
            <VuiIcon {...btnToggleAttributes} />
          );
        }

        suffix = (
          <div class={classes.elSuffix.value}>
            {
              btnClear
            }
            {
              btnToggle ? btnToggle : (
                context.slots.suffix ? context.slots.suffix() : (
                  props.suffix ? (
                    <VuiIcon type={props.suffix} />
                  ) : null
                )
              )
            }
          </div>
        );
      }

      const attributes = {
        ...omit(context.attrs, ["clsss", "style"]),
        type: type.value,
        value: value.value,
        placeholder: props.placeholder,
        maxLength: props.maxLength,
        autocomplete: "off",
        spellcheck: false,
        readonly: props.readonly,
        disabled: disabled.value,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeydown: handleKeydown,
        onKeyup: handleKeyup,
        onCompositionstart: handleComposition,
        onCompositionupdate: handleComposition,
        onCompositionend: handleComposition,
        onInput: handleInput
      };

      return (
        <div class={classes.elInput.value} onMouseenter={handleMouseenter} onMouseleave={handleMouseleave}>
          {prefix}
          <input ref={inputRef} {...attributes} />
          {suffix}
        </div>
      );
    };

    // 
    const getAppend = () => {
      if (!context.slots.append && !props.append) {
        return;
      }

      return (
        <div class={classes.elAppend.value}>
          {getSlotProp(context.slots, props, "append")}
        </div>
      );
    };

    // 渲染
    return () => {
      const prepend = getPrepend();
      const input = getInput();
      const append = getAppend();

      const attributes = {
        class: [classes.el.value, context.attrs.class],
        style: context.attrs.style as CSSProperties
      };

      return (
        <div {...attributes}>
          {prepend}
          {input}
          {append}
        </div>
      );
    };
  }
});
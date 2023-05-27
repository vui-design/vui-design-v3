import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Size } from "../../types";
import { defineComponent, inject, ref, computed, nextTick, onMounted, onBeforeUnmount } from "vue";
import { getSlotProp } from "../../utils/vue";
import { sizes, keyCodes } from "../../constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import { InputGroupInjectionKey } from "./context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import useSelection from "../../hooks/useSelection";
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
      default: ""
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
    // 是否显示输入字数
    showCount: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 自定义字符长度计算方法，如中文占两个字节
    bytes: {
      type: Function as PropType<(value: string) => number>,
      default: undefined
    },
    // 允许输入的最大字符数量
    maxLength: {
      type: [String, Number] as PropType<string | number>,
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
    // 输入框是否为只读状态
    readonly: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 输入框是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 值变化时是否触发父级表单验证
    validator: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 前置标签
    addonBefore: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 后置标签
    addonAfter: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 前缀图标类型
    affixBefore: {
      type: String as PropType<string>,
      default: undefined
    },
    // 后缀图标类型
    affixAfter: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type InputProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-input",
  inheritAttrs: false,
  props: createProps(),
  emits: ["update:value", "change", "focus", "blur", "keydown", "keyup", "enter", "clear"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);
    const vuiInputGroup = inject(InputGroupInjectionKey, undefined);

    // DOM 引用
    const containerRef = ref<HTMLDivElement>();
    const inputRef = ref<HTMLInputElement>();

    // 定时器，用于自动聚焦
    const timeout = ref();

    // 输入法输入状态
    const composing = ref(false);

    // 尺寸
    const size = computed(() => props.size ?? vuiInputGroup?.size ?? vuiForm?.size ?? "medium");

    // 状态
    const focused = ref(false);
    const disabled = computed(() => props.disabled ?? vuiInputGroup?.disabled ?? vuiForm?.disabled ?? false);

    // 是否为受控模式
    const isControlled = useControlled("value");

    // 值（defaultValue 非受控模式，value 受控模式）
    const defaultValue = ref(props.defaultValue);
    const value = computed(() => isControlled.value ? props.value : defaultValue.value);

    // 清空按钮显示状态
    const showBtnClear = computed(() => props.clearable && !props.readonly && !disabled.value && is.effective(value.value));

    // 
    const change = (newValue: string, callback?: Function) => {
      if (value.value === newValue) {
        return;
      }

      const maxLength = Number(props.maxLength);
      const length = is.function(props.bytes) ? props.bytes(newValue) : newValue.length;

      if (is.number(maxLength) && maxLength > 0 && length > maxLength) {
        resume(callback);
      }
      else {
        if (!isControlled.value) {
          defaultValue.value = newValue;
        }

        context.emit("update:value", newValue);
        context.emit("change", newValue);
  
        if (props.validator) {
          vuiFormItem?.onChange(newValue);
        }
  
        resume(callback);
      }
    };

    // 
    const resume = (callback?: Function) => {
      nextTick(() => {
        if (inputRef.value && inputRef.value.value !== value.value) {
          inputRef.value.value = value.value as string;
        }

        if (is.function(callback)) {
          callback();
        }
      });
    };

    // 对外提供 value 值，以及 focus、blur 等方法
    const { focus, blur, select, setSelectionRange } = useSelection(inputRef);

    context.expose({
      value: value.value,
      focus,
      blur,
      select,
      setSelectionRange
    });

    // 
    const handleMousedown = (e: MouseEvent) => {
      const target = e.target as Element;

      if (target === containerRef.value || (target !== inputRef.value && containerRef.value?.contains(target))) {
        e.preventDefault();
        focus();
      }
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
        handleChange(e);
      }
      else {
        composing.value = true;
      }
    };

    // onInput 事件回调
    const handleChange = (e: Event) => {
      if (composing.value || disabled.value) {
        return;
      }

      const { value } = e.target as HTMLInputElement;

      change(value);
    };

    // 清空输入框值
    const handleClear = () => {
      if (props.disabled) {
        return;
      }

      const value = "";

      context.emit("clear");
      change(value, () => focus());
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
        [`${classPrefix.value}-bordered`]: props.bordered,
        [`${classPrefix.value}-${size.value}`]: size.value,
        [`${classPrefix.value}-focused`]: focused.value,
        [`${classPrefix.value}-readonly`]: props.readonly,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });
    classes.elInput = computed(() => `${classPrefix.value}-input`);
    classes.elAddonBefore = computed(() => `${classPrefix.value}-addon-before`);
    classes.elAddonAfter = computed(() => `${classPrefix.value}-addon-after`);
    classes.elAffixBefore = computed(() => `${classPrefix.value}-affix-before`);
    classes.elAffixAfter = computed(() => `${classPrefix.value}-affix-after`);
    classes.elCount = computed(() => `${classPrefix.value}-count`);
    classes.elBtnClear = computed(() => `${classPrefix.value}-btn-clear`);

    // 
    const getAddonBefore = () => {
      if (!context.slots.addonBefore && !props.addonBefore) {
        return;
      }

      return (
        <div class={classes.elAddonBefore.value}>
          {getSlotProp(context.slots, props, "addonBefore")}
        </div>
      );
    };

    // 
    const getInput = () => {
      let affixBefore;

      if (context.slots.affixBefore || props.affixBefore) {
        affixBefore = (
          <div class={classes.elAffixBefore.value}>
            {
              context.slots.affixBefore ? context.slots.affixBefore() : (
                <VuiIcon type={props.affixBefore} />
              )
            }
          </div>
        );
      }

      let affixAfter;

      if (context.slots.affixAfter || props.affixAfter) {
        affixAfter = (
          <div class={classes.elAffixAfter.value}>
            {
              context.slots.affixAfter ? context.slots.affixAfter() : (
                <VuiIcon type={props.affixAfter} />
              )
            }
          </div>
        );
      }

      let btnClear;

      if (showBtnClear.value) {
        const btnClearAttributes = {
          class: classes.elBtnClear.value,
          onMousedown: (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
          },
          onClick: handleClear
        };

        btnClear = (
          <div {...btnClearAttributes}>
            <VuiIcon type="crossmark-circle-filled" />
          </div>
        );
      }

      let count;

      if (props.showCount) {
        const content = String(value.value);
        const maxLength = Number(props.maxLength);
        const length = is.function(props.bytes) ? props.bytes(content) : content.length;

        count = (
          <div class={classes.elCount.value}>
            {
              is.number(maxLength) && maxLength > 0 ? `${length}/${maxLength}` : `${length}`
            }
          </div>
        );
      }

      const attributes = {
        ...omit(context.attrs, ["class", "style"]),
        type: props.type,
        value: value.value,
        placeholder: props.placeholder,
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
        onInput: handleChange
      };

      return (
        <div ref={containerRef} class={classes.elInput.value} onMousedown={handleMousedown}>
          {affixBefore}
          <input ref={inputRef} {...attributes} />
          {btnClear}
          {count}
          {affixAfter}
        </div>
      );
    };

    // 
    const getAddonAfter = () => {
      if (!context.slots.addonAfter && !props.addonAfter) {
        return;
      }

      return (
        <div class={classes.elAddonAfter.value}>
          {getSlotProp(context.slots, props, "addonAfter")}
        </div>
      );
    };

    // 渲染
    return () => {
      const attributes = {
        class: [classes.el.value, context.attrs.class],
        style: context.attrs.style as CSSProperties
      };

      const addonBefore = getAddonBefore();
      const input = getInput();
      const addonAfter = getAddonAfter();

      return (
        <div {...attributes}>
          {addonBefore}
          {input}
          {addonAfter}
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Size } from "../../types";
import { defineComponent, inject, ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import { sizes, keyCodes } from "../../constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import { InputGroupInjectionKey } from "./context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import useSelection from "../../hooks/useSelection";
import is from "../../utils/is";
import omit from "../../utils/omit";
import utils from "./utils";

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
      default: undefined
    },
    // 值（受控模式）
    value: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 最小值
    min: {
      type: [String, Number] as PropType<string | number>,
      default: -Infinity
    },
    // 最大值
    max: {
      type: [String, Number] as PropType<string | number>,
      default: Infinity
    },
    // 每次改变的步长，可以是小数
    step: {
      type: [String, Number] as PropType<string | number>,
      default: 1
    },
    // 数值精度，必须为 0 或大于 0 的整数
    precision: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 指定输入框展示值的格式
    formatter: {
      type: Function as PropType<(value: string | undefined) => string>,
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
    }
  };
};

export type InputNumberProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-input-number",
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

    // 用于延迟自动聚焦
    const focuser = ref();

    // 用于控制长按加减按钮时连续触发计算的频率
    const frequency = ref();

    // 输入法输入状态
    const composing = ref(false);

    // 约束 min、max 等自定义属性
    const min = computed(() => utils.restrict(props.min, -Infinity));
    const max = computed(() => utils.restrict(props.max, Infinity));
    const step = computed(() => utils.restrict(props.step, 1));
    const precision = computed(() => utils.restrict(props.precision));

    // 尺寸
    const size = computed(() => props.size ?? vuiInputGroup?.size ?? vuiForm?.size ?? "medium");

    // 状态
    const focused = ref(false);
    const disabled = computed(() => props.disabled ?? vuiInputGroup?.disabled ?? vuiForm?.disabled ?? false);

    // 值
    const defaultValue = ref(utils.restore(props.defaultValue, min.value, max.value, step.value, precision.value));
    const value = computed(() => utils.restore(props.value ?? defaultValue.value ?? undefined, min.value, max.value, step.value, precision.value));

    // 输入状态及输入文本
    const inputting = ref(false);
    const text = ref("");

    watch(value, newValue => {
      text.value = inputting.value ? text.value : utils.convertToString(newValue, step.value, precision.value);
    }, {
      immediate: true
    });

    // 清空按钮显示状态
    const showBtnClear = computed(() => props.clearable && !props.readonly && !disabled.value && is.effective(value.value));

    // 加减按钮禁用状态
    const disabledBtnIncrease = computed(() => is.number(max.value) && utils.increase(value.value, step.value, precision.value) > max.value);
    const disabledBtnDecrease = computed(() => is.number(min.value) && utils.decrease(value.value, step.value, precision.value) < min.value);

    // 加
    const increase = () => {
      const newValue = utils.increase(value.value, step.value, precision.value);
      const disabled = is.number(max.value) && newValue > max.value;

      if (!focused.value) {
        focus();
      }

      if (disabled) {
        return;
      }

      text.value = utils.convertToString(newValue, step.value, precision.value);
      change(newValue);
    };

    // 减
    const decrease = () => {
      const newValue = utils.decrease(value.value, step.value, precision.value);
      const disabled = is.number(min.value) && newValue < min.value;

      if (!focused.value) {
        focus();
      }

      if (disabled) {
        return;
      }

      text.value = utils.convertToString(newValue, step.value, precision.value);
      change(newValue);
    };

    // 
    const change = (newValue: number | undefined, callback?: Function) => {
      if (value.value === newValue) {
        return;
      }

      defaultValue.value = newValue;
      context.emit("update:value", newValue);
      context.emit("change", newValue);

      if (props.validator) {
        vuiFormItem?.onChange(newValue);
      }

      nextTick(() => {
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
      else if (e.keyCode === keyCodes.up) {
        e.preventDefault();
        increase();
      }
      else if (e.keyCode === keyCodes.down) {
        e.preventDefault();
        decrease();
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

      const { value: characters } = e.target as HTMLInputElement;

      inputting.value = true;
      text.value = characters;

      if (!utils.isCompleteNumber(characters)) {
        return;
      }

      const string = characters.trim();

      if (string.length === 0) {
        change(undefined);
      }
      else {
        let newValue = Number(string);

        if (!is.number(newValue)) {
          return;
        }

        const p = utils.getPrecision(newValue, step.value, precision.value);

        if (is.number(p)) {
          newValue = utils.setPrecision(newValue, p);
        }

        if (is.number(min.value) && newValue < min.value) {
          return;
        }

        if (is.number(max.value) && newValue > max.value) {
          return;
        }

        change(newValue);
      }
    };

    // onChange 事件回调
    const handleChange = (e: Event) => {
      if (disabled.value) {
        return;
      }

      const { value: characters } = e.target as HTMLInputElement;

      inputting.value = false;

      if (utils.isValidNumber(characters)) {
        const string = characters.trim();
        let newValue = Number(string);

        if (!is.number(newValue)) {
          return;
        }

        const p = utils.getPrecision(newValue, step.value, precision.value);

        if (is.number(p)) {
          newValue = utils.setPrecision(newValue, p);
        }

        if (is.number(min.value) && newValue < min.value) {
          newValue = min.value;
        }

        if (is.number(max.value) && newValue > max.value) {
          newValue = max.value;
        }

        if (newValue === value.value) {
          text.value = utils.convertToString(value.value, step.value, precision.value);
        }
        else {
          change(newValue);
        }
      }
      else {
        text.value = utils.convertToString(value.value, step.value, precision.value);
      }
    };

    // onIncrease 事件回调
    const handleIncrease = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      increase();

      const loop = () => {
        increase();

        clearTimeout(frequency.value);
        frequency.value = setTimeout(loop, 60);
      };

      frequency.value = setTimeout(loop, 500);
    };

    const handleCancelIncrease = (e: MouseEvent) => {
      clearTimeout(frequency.value);
      frequency.value = undefined;
    };

    // onDecrease 事件回调
    const handleDecrease = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      decrease();

      const loop = () => {
        decrease();

        clearTimeout(frequency.value);
        frequency.value = setTimeout(loop, 60);
      };

      frequency.value = setTimeout(loop, 500);
    };

    const handleCancelDecrease = (e: MouseEvent) => {
      clearTimeout(frequency.value);
      frequency.value = undefined;
    };

    // 清空输入框值
    const handleClear = () => {
      if (props.disabled) {
        return;
      }

      context.emit("clear");
      change(undefined, () => focus());
    };

    // 组件挂载完成之后执行
    onMounted(() => {
      if (props.autofocus && inputRef.value) {
        focuser.value = setTimeout(() => inputRef?.value?.focus());
      }
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      focuser.value && clearTimeout(focuser.value);
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("input-number", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-bordered`]: props.bordered,
        [`${classPrefix.value}-${size.value}`]: size.value,
        [`${classPrefix.value}-focused`]: focused.value,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });
    classes.elInput = computed(() => `${classPrefix.value}-input`);
    classes.elBtnClear = computed(() => `${classPrefix.value}-btn-clear`);
    classes.elTrigger = computed(() => `${classPrefix.value}-trigger`);
    classes.elBtnIncrease = computed(() => {
      return {
        [`${classPrefix.value}-btn`]: true,
        [`${classPrefix.value}-btn-increase`]: true,
        [`${classPrefix.value}-btn-disabled`]: disabledBtnIncrease.value
      };
    });
    classes.elBtnDecrease = computed(() => {
      return {
        [`${classPrefix.value}-btn`]: true,
        [`${classPrefix.value}-btn-decrease`]: true,
        [`${classPrefix.value}-btn-disabled`]: disabledBtnDecrease.value
      };
    });

    // 
    const getInput = () => {
      let characters = "";

      if (focused.value) {
        characters = text.value;
      }
      else if (is.number(value.value)) {
        characters = utils.convertToString(value.value, step.value, precision.value);

        if (is.function(props.formatter)) {
          characters = props.formatter(characters);
        }
      }

      const attributes = {
        ...omit(context.attrs, ["clsss", "style"]),
        type: "text",
        value: characters,
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
        onInput: handleInput,
        onChange: handleChange
      };

      return (
        <input ref={inputRef} {...attributes} />
      );
    };

    // 
    const getBtnClear = () => {
      if (!showBtnClear.value) {
        return;
      }

      const btnClearAttributes = {
        class: classes.elBtnClear.value,
        onMousedown: (e: MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
        },
        onClick: handleClear
      };

      return (
        <div {...btnClearAttributes}>
          <VuiIcon type="crossmark-circle-filled" />
        </div>
      );
    };

    // 
    const getTrigger = () => {
      if (props.readonly || disabled.value) {
        return;
      }

      return (
        <div class={classes.elTrigger.value}>
          <div
            class={classes.elBtnIncrease.value}
            onMousedown={handleIncrease}
            onMouseup={handleCancelIncrease}
            onMouseleave={handleCancelIncrease}
          >
            <VuiIcon type="chevron-up" />
          </div>
          <div
            class={classes.elBtnDecrease.value}
            onMousedown={handleDecrease}
            onMouseup={handleCancelDecrease}
            onMouseleave={handleCancelDecrease}
          >
            <VuiIcon type="chevron-down" />
          </div>
        </div>
      );
    };

    // 渲染
    return () => {
      const attributes = {
        ref: containerRef,
        class: [classes.el.value, context.attrs.class],
        style: context.attrs.style as CSSProperties,
        onMousedown: handleMousedown
      };

      const input = getInput();
      const btnClear = getBtnClear();
      const trigger = getTrigger();

      return (
        <div {...attributes}>
          {input}
          {btnClear}
          {trigger}
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import { defineComponent, inject, ref, computed, watch, nextTick } from "vue";
import { sizes, keyCodes } from "../../constants";
import { FormItemInjectionKey } from "../form/context";
import VuiIcon from "../icon";
import VuiInput from "./input";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import useSelection from "../../hooks/useSelection";
import is from "../../utils/is";
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
      type: [String, Number] as PropType<string | number>,
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

export type InputNumberProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-input-number",
  inheritAttrs: false,
  props: createProps(),
  emits: ["update:value", "change", "focus", "blur", "keydown", "keyup", "enter", "clear"],
  setup(props, context) {
    // 注入祖先组件
    const vuiFormItem = inject(FormItemInjectionKey, undefined);

    // DOM 引用
    const inputRef = ref<HTMLInputElement>();

    // 用于控制长按加减按钮时连续触发计算的频率
    const frequency = ref();

    // 约束 min、max 等自定义属性
    const min = computed(() => utils.restrict(props.min, -Infinity));
    const max = computed(() => utils.restrict(props.max, Infinity));
    const step = computed(() => utils.restrict(props.step, 1));
    const precision = computed(() => utils.restrict(props.precision));

    // 状态
    const focused = ref(false);

    // 是否为受控模式
    const isControlled = useControlled("value");

    // 值（defaultValue 非受控模式，value 受控模式）
    const defaultValue = ref(utils.restore(props.defaultValue, min.value, max.value, step.value, precision.value));
    const value = computed(() => utils.restore(isControlled.value ? props.value : defaultValue.value, min.value, max.value, step.value, precision.value));

    // 输入状态及输入文本
    const inputting = ref(false);
    const text = ref("");

    watch(value, newValue => {
      text.value = inputting.value ? text.value : utils.convertToString(newValue, step.value, precision.value);
    }, {
      immediate: true
    });

    // 加减按钮禁用状态
    const disabledBtnIncrease = computed(() => is.number(max.value) && utils.increase(value.value, step.value, precision.value) > max.value);
    const disabledBtnDecrease = computed(() => is.number(min.value) && utils.decrease(value.value, step.value, precision.value) < min.value);

    // 加
    const increase = () => {
      if (!focused.value) {
        focus();
      }

      if (disabledBtnIncrease.value) {
        return;
      }

      const newValue = utils.increase(value.value, step.value, precision.value);

      text.value = utils.convertToString(newValue, step.value, precision.value);
      change(newValue);
    };

    // 减
    const decrease = () => {
      if (!focused.value) {
        focus();
      }

      if (disabledBtnDecrease.value) {
        return;
      }

      const newValue = utils.decrease(value.value, step.value, precision.value);

      text.value = utils.convertToString(newValue, step.value, precision.value);
      change(newValue);
    };

    // 
    const change = (newValue: number | undefined, callback?: Function) => {
      if (value.value === newValue) {
        return;
      }

      if (!isControlled.value) {
        defaultValue.value = newValue;
      }

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

    // onFocus 事件回调
    const handleFocus = (e: FocusEvent) => {
      focused.value = true;
      context.emit("focus", e);
    };

    // onBlur 事件回调
    const handleBlur = (e: FocusEvent) => {
      inputting.value = false;
      text.value = utils.convertToString(value.value, step.value, precision.value);

      focused.value = false;
      context.emit("blur", e);

      if (props.validator) {
        vuiFormItem?.onBlur(value.value);
      }
    };

    // onKeydown 事件回调
    const handleKeydown = (e: KeyboardEvent) => {
      context.emit("keydown", e);

      if (e.keyCode === keyCodes.up) {
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
      context.emit("keyup", e);
    };

    // onEnter 事件回调
    const handleEnter = (e: KeyboardEvent) => {
      context.emit("enter", e);
    };

    // onClear 事件回调
    const handleClear = () => {
      context.emit("clear");
    };

    // onChange 事件回调
    const handleChange = (characters: string) => {
      inputting.value = true;
      text.value = characters;

      if (!utils.isCompleteNumber(characters)) {
        return;
      }

      const newValue = utils.restore(characters, min.value, max.value, step.value, precision.value);

      change(newValue);
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

    // 计算 class 样式
    const classPrefix = useClassPrefix("input", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}-number`);
    classes.elStepHandler = computed(() => `${classPrefix.value}-step-handler`);
    classes.elStepIncrease = computed(() => {
      return {
        [`${classPrefix.value}-step`]: true,
        [`${classPrefix.value}-step-increase`]: true,
        [`${classPrefix.value}-step-disabled`]: disabledBtnIncrease.value
      };
    });
    classes.elStepDecrease = computed(() => {
      return {
        [`${classPrefix.value}-step`]: true,
        [`${classPrefix.value}-step-decrease`]: true,
        [`${classPrefix.value}-step-disabled`]: disabledBtnDecrease.value
      };
    });

    // 渲染
    return () => {
      // 
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

      // 
      const slots = {
        ...context.slots,
        affixAfter: () => {
          return (
            <div class={classes.elStepHandler.value}>
              <div
                class={classes.elStepIncrease.value}
                onMousedown={handleIncrease}
                onMouseup={handleCancelIncrease}
                onMouseleave={handleCancelIncrease}
              >
                <VuiIcon type="chevron-up" />
              </div>
              <div
                class={classes.elStepDecrease.value}
                onMousedown={handleDecrease}
                onMouseup={handleCancelDecrease}
                onMouseleave={handleCancelDecrease}
              >
                <VuiIcon type="chevron-down" />
              </div>
            </div>
          );
        }
      };

      // 
      return (
        <VuiInput
          ref={inputRef}
          classPrefix={props.classPrefix}
          class={classes.el.value}
          value={characters}
          placeholder={props.placeholder as string}
          bordered={props.bordered}
          size={props.size}
          autofocus={props.autofocus}
          clearable={props.clearable}
          readonly={props.readonly}
          disabled={props.disabled}
          validator={false}
          addonBefore={props.addonBefore}
          addonAfter={props.addonAfter}
          affixBefore={props.affixBefore}
          affixAfter={props.affixAfter}
          v-slots={slots}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeydown={handleKeydown}
          onKeyup={handleKeyup}
          onEnter={handleEnter}
          onClear={handleClear}
          onChange={handleChange}
        />
      );
    };
  }
});
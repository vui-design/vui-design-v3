import type { ExtractPropTypes, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, ref, computed } from "vue";
import { createProps } from "./input";
import VuiIcon from "../icon";
import VuiInput from "./input";
import useClassPrefix from "../../hooks/useClassPrefix";
import useSelection from "../../hooks/useSelection";
import is from "../../utils/is";

export { createProps };

export type InputPasswordProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-input-password",
  props: createProps(),
  emits: ["update:value", "change", "focus", "blur", "keydown", "keyup", "enter", "clear"],
  setup(props, context) {
    // DOM 引用
    const inputRef = ref();

    // 密码加密状态
    const encrypted = ref(true);
    const type = computed(() => encrypted.value ? "password" : "text");

    // 值
    const defaultValue = ref(props.defaultValue);
    const value = computed(() => props.value ?? defaultValue.value);

    // 
    const setValue = (newValue: string | number) => {
      if (value.value === newValue) {
        return;
      }

      if (!is.existy(props.value)) {
        defaultValue.value = newValue;
      }

      context.emit("update:value", newValue);
      context.emit("change", newValue);
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
      context.emit("focus", e);
    };

    // onBlur 事件回调
    const handleBlur = (e: FocusEvent) => {
      context.emit("blur", e);
    };

    // onKeydown 事件回调
    const handleKeydown = (e: KeyboardEvent) => {
      context.emit("keydown", e);
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
    const handleChange = (newValue: string | number) => {
      setValue(newValue);
    };

    // 
    const handleMouse = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // 切换密码可见状态
    const handleToggle = () => {
      encrypted.value = !encrypted.value;
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("input", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}-password`);
    classes.elBtnToggle = computed(() => `${classPrefix.value}-btn-toggle`);

    // 渲染
    return () => {
      const slots = {
        ...context.slots,
        affixAfter: () => {
          const btnToggleAttributes = {
            class: classes.elBtnToggle.value,
            onMousedown: handleMouse,
            onMouseup: handleMouse,
            onClick: handleToggle
          };

          return (
            <div {...btnToggleAttributes}>
              <VuiIcon type={encrypted.value ? "eye-off" : "eye"} />
            </div>
          );
        }
      };

      return (
        <VuiInput
          ref={inputRef}
          classPrefix={props.classPrefix}
          class={classes.el.value}
          type={type.value}
          value={value.value}
          placeholder={props.placeholder}
          bordered={props.bordered}
          size={props.size}
          showCount={props.showCount}
          bytes={props.bytes}
          maxLength={props.maxLength}
          autofocus={props.autofocus}
          clearable={props.clearable}
          readonly={props.readonly}
          disabled={props.disabled}
          validator={props.validator}
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
import type { Value } from "./types";
import { defineComponent, ref, computed } from "vue";
import { createProps } from "./select";
import VuiSelect from "./select";
import useControlled from "../../hooks/useControlled";
import utils from "./utils";

export default defineComponent({
  name: "vui-select",
  props: createProps(),
  emits: ["update:value", "change", "mouseenter", "mouseleave", "focus", "blur", "clear", "search"],
  setup(props, context) {
    // 是否为受控模式
    const isControlled = useControlled("value");

    // 值（defaultValue 非受控模式，value 受控模式）
    const defaultValue = ref(props.defaultValue);
    const value = computed(() => isControlled.value ? props.value : defaultValue.value);

    // onMouseenter 事件回调
    const handleMouseenter = (e: MouseEvent) => {
      context.emit("mouseenter", e);
    };

    // onMouseleave 事件回调
    const handleMouseleave = (e: MouseEvent) => {
      context.emit("mouseleave", e);
    };

    // onFocus 事件回调
    const handleFocus = (e: FocusEvent) => {
      context.emit("focus", e);
    };

    // onBlur 事件回调
    const handleBlur = (e: FocusEvent) => {
      context.emit("blur", e);
    };

    // onClear 事件回调
    const handleClear = () => {
      context.emit("clear");
    };

    // onSearch 事件回调
    const handleSearch = (keyword: string) => {
      context.emit("search", keyword);
    };

    // onChange 事件回调
    const handleChange = (newValue: Value) => {
      if (!isControlled.value) {
        defaultValue.value = newValue;
      }

      context.emit("update:value", newValue);
      context.emit("change", newValue);
    };

    // 渲染
    return () => {
      const options = utils.getOptions(context.slots.default?.());

      return (
        <VuiSelect
          classPrefix={props.classPrefix}
          value={value.value}
          placeholder={props.placeholder}
          options={options}
          backfillOptionProp={props.backfillOptionProp}
          bordered={props.bordered}
          size={props.size}
          multiple={props.multiple}
          maxTagCount={props.maxTagCount}
          maxTagPlaceholder={props.maxTagPlaceholder}
          searchable={props.searchable}
          filter={props.filter}
          filterOptionProp={props.filterOptionProp}
          allowCreate={props.allowCreate}
          clearKeywordOnSelect={props.clearKeywordOnSelect}
          clearable={props.clearable}
          readonly={props.readonly}
          disabled={props.disabled}
          loading={props.loading}
          validator={props.validator}
          loadingText={props.loadingText}
          notFoundText={props.notFoundText}
          getPopupContainer={props.getPopupContainer}
          placement={props.placement}
          animation={props.animation}
          autofitPopupWidth={props.autofitPopupWidth}
          autofitPopupMinWidth={props.autofitPopupMinWidth}
          destroyOnClose={props.destroyOnClose}
          onMouseenter={handleMouseenter}
          onMouseleave={handleMouseleave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClear={handleClear}
          onSearch={handleSearch}
          onChange={handleChange}
        />
      );
    };
  }
});
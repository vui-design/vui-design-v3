import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Value, BackfillOptionProp, MaxTagPlaceholder, Filter, FilterOptionProp, Placement, Option } from "./types";
import { defineComponent, inject, ref, computed, watch, nextTick } from "vue";
import { sizes, keyCodes } from "../../constants";
import { backfillOptionProps, filterOptionProps, placements } from "./constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import { InputGroupInjectionKey } from "../input/context";
import VuiPopup from "../popup";
import VuiSelectSelection from "./select-selection";
import VuiSelectMenu from "./select-menu";
import VuiSelectSpin from "./select-spin";
import VuiSelectEmpty from "./select-empty";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 默认选中值（非受控模式）
    defaultValue: {
      type: [String, Number, Boolean, Array] as PropType<Value | Value[]>,
      default: undefined
    },
    // 当前选中值（受控模式）
    value: {
      type: [String, Number, Boolean, Array] as PropType<Value | Value[]>,
      default: undefined
    },
    // 选择框占位文本
    placeholder: {
      type: String as PropType<string>,
      default: undefined
    },
    // 选项列表
    options: {
      type: Array as PropType<Option[]>,
      default: () => []
    },
    // 回填到选择框的 Option 属性
    backfillOptionProp: {
      type: String as PropType<string>,
      validator: (backfillOptionProp: BackfillOptionProp) => backfillOptionProps.includes(backfillOptionProp),
      default: "children"
    },
    // 是否含有边框
    bordered: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 选择框尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 是否支持多选
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 多选模式下选择框中最多显示多少个 tag 标签
    maxTagCount: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 隐藏剩余 tag 标签时显示的内容，参数为剩余数量
    maxTagPlaceholder: {
      type: Function as PropType<MaxTagPlaceholder>,
      default: (count: number) => `+${count}`
    },
    // 是否支持搜索
    searchable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否根据搜索关键词进行筛选；当其为一个函数时，会接收 keyword、option 两个参数，当 option 符合条件时，应返回 true，反之返回 false
    filter: {
      type: [Boolean, Function] as PropType<boolean | Filter>,
      default: true
    },
    // 筛选时按 Option 的指定属性进行过滤，如设置为 children 表示对内嵌内容进行搜索
    filterOptionProp: {
      type: String as PropType<string>,
      validator: (filterOptionProp: FilterOptionProp) => filterOptionProps.includes(filterOptionProp),
      default: "children"
    },
    // 多选模式下是否允许用户创建新的项目
    allowCreate: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否在选中选项后自动清空搜索关键词，只在多选模式下有效
    clearKeywordOnSelect: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否允许一键清空
    clearable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否处于 loading 状态（即当前是否正在进行远程搜索）
    loading: {
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
    // 远程搜索时的文本提示
    loadingText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 选项为空时的文本提示
    notFoundText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 下拉选项挂载的 HTML 节点
    getPopupContainer: {
      type: [String, HTMLElement] as PropType<string | HTMLElement>,
      default: "body"
    },
    // 下拉选项的弹出位置
    placement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "bottom-left"
    },
    // 弹出动画
    animation: {
      type: String as PropType<string>,
      default: "vui-select-dropdown-scale"
    },
    // 是否将下拉选项的宽度设置为选择框宽度
    autofitPopupWidth: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否将下拉选项的最小宽度设置为选择框宽度
    autofitPopupMinWidth: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否在关闭时卸载下拉选项
    destroyOnClose: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type SelectProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-select",
  props: createProps(),
  emits: ["update:value", "change", "mouseenter", "mouseleave", "focus", "blur", "clear", "search"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);
    const vuiInputGroup = inject(InputGroupInjectionKey, undefined);

    // 是否为受控模式
    const isControlled = useControlled("value");

    // 选中值（defaultValue 非受控模式，value 受控模式）
    const defaultValue = ref(props.defaultValue);
    const value = computed(() => utils.getValue(isControlled.value ? props.value : defaultValue.value, props.multiple));

    // 尺寸
    const size = computed(() => props.size ?? vuiInputGroup?.size ?? vuiForm?.size ?? "medium");

    // 状态
    const hovered = ref(false);
    const focused = ref(false);
    const actived = ref(false);
    const disabled = computed(() => props.disabled ?? vuiInputGroup?.disabled ?? vuiForm?.disabled ?? false);

    // 当前搜索关键字及经过筛选的选项列表
    const keyword = ref<string>("");
    const options = computed(() => {
      if (!props.searchable || !props.filter || keyword.value === "") {
        return props.options;
      }
      else {
        const result = utils.getFilteredOptions(props.options, props.filter, props.filterOptionProp, keyword.value);

        if (props.allowCreate && !utils.getFilteredOption(props.options, props.filterOptionProp, keyword.value)) {
          result.unshift(utils.getCreatedOption(keyword.value));
        }

        return result;
      }
    });

    // 当前激活的选项方式&选项&选项索引
    const activedType = ref<string>("keyboard");
    const activedValue = ref<Option>();
    const activedValueIndex = ref<number>(0);

    // 当前选中的选项或选项列表
    const selection = ref<Option[] | Option>();

    // 下拉菜单显示状态
    const dropdownVisible = computed(() => {
      let visible = actived.value;

      if (props.searchable && props.filter === false && !props.loading && keyword.value === "" && options.value.length === 0) {
        visible = false;
      }

      return visible;
    });

    // 
    watch([value, () => props.options], () => {
      selection.value = utils.getSelection(value.value, props.options, props.multiple, selection.value);
    }, {
      immediate: true,
      deep: true
    });

    // 
    watch([() => props.options, actived, keyword], () => {
      nextTick(() => resetActivedValue());
    });

    // 更新当前激活的选项
    const changeActivedValue = (direction: number, lastIndex?: number) => {
      if (!options.value.length) {
        return;
      }

      const min = 0;
      const max = options.value.length - 1;
      let index = (lastIndex === undefined ? activedValueIndex.value : lastIndex) + direction;

      if (index < min) {
        index = max;
      }
      else if (index > max) {
        index = min;
      }

      const option = options.value[index];

      if (option.type === "option-group" || option.disabled) {
        changeActivedValue(direction, index);
      }
      else {
        activedType.value = "keyboard";
        activedValue.value = option;
        activedValueIndex.value = index;
      }
    };

    // 重置当前激活的选项
    const resetActivedValue = () => {
      if (props.loading || !actived.value) {
        return;
      }

      const enabledOptions = options.value.filter(option => option.type !== "option-group" && !option.disabled);
      let index = -1;
      let option = undefined;

      if (enabledOptions.length > 0) {
        let firstSelectedOption = enabledOptions.find(option => {
          if (props.multiple) {
            return (selection.value as Option[]).findIndex(target => target.value === option.value) > -1;
          }
          else {
            return selection.value && (selection.value as Option).value === option.value;
          }
        });

        if (!firstSelectedOption) {
          firstSelectedOption = enabledOptions[0];
        }

        if (firstSelectedOption) {
          index = options.value.findIndex(option => option.type !== "option-group" && option.value === (firstSelectedOption as Option).value);
          option = firstSelectedOption;
        }
      }

      activedType.value = "keyboard";
      activedValue.value = option;
      activedValueIndex.value = index;
    };

    // onMouseenter 事件回调
    const handleMouseenter = (e: MouseEvent) => {
      hovered.value = true;
      context.emit("mouseenter", e);
    };

    // onMouseleave 事件回调
    const handleMouseleave = (e: MouseEvent) => {
      hovered.value = false;
      context.emit("mouseleave", e);
    };

    // onFocus 事件回调
    const handleFocus = (e: FocusEvent) => {
      focused.value = true;
      context.emit("focus", e);
    };

    // onBlur 事件回调
    const handleBlur = (e: FocusEvent) => {
      focused.value = false;
      actived.value = false;
      context.emit("blur", e);

      if (props.searchable && keyword.value) {
        keyword.value = "";

        if (!props.filter) {
          context.emit("search", keyword.value);
        }
      }
    };

    // onToggle 事件回调
    const handleToggle = (visible: boolean) => {
      if (props.searchable) {
        actived.value = true;
      }
      else {
        actived.value = visible;
      }
    };

    // onKeydown 事件回调
    const handleKeydown = (e: KeyboardEvent) => {
      const keyCode = e.keyCode;

      if (actived.value && [keyCodes.enter, keyCodes.esc, keyCodes.up, keyCodes.down].includes(keyCode)) {
        e.preventDefault();

        switch(keyCode) {
          case keyCodes.enter:
            activedValue.value && handleSelect(activedValue.value.value as Value);
            break;
          case keyCodes.esc:
            actived.value = false;
            break;
          case keyCodes.up:
            changeActivedValue(-1);
            break;
          case keyCodes.down:
            changeActivedValue(1);
            break;
        }
      }
      else if (!actived.value && [keyCodes.up, keyCodes.down].includes(keyCode)) {
        e.preventDefault();
        actived.value = true;
      }
      else if (keyCode === keyCodes.backspace && props.multiple && props.searchable && (selection.value as Option[]).length > 0 && (e.target as HTMLInputElement).value === "") {
        const array = (selection.value as Option[]).filter(target => !target.disabled);

        if (array.length === 0) {
          return;
        }

        const target = array[array.length - 1];

        if (target) {
          handleDeselect(target.value as Value);
        }
      }
    };

    // onInput 事件回调
    const handleInput = (v: string) => {
      if (!props.searchable) {
        return;
      }

      actived.value = true;
      keyword.value = v;

      if (!props.filter) {
        context.emit("search", v);
      }
    };

    // onPreselect 事件回调
    const handlePreselect = (v: Value) => {
      const index = options.value.findIndex(option => option.type !== "option-group" && option.value === v);

      if (index > -1) {
        activedType.value = "mouse";
        activedValue.value = options.value[index];
        activedValueIndex.value = index;
      }
    };

    // onSelect 事件回调
    const handleSelect = (v: Value) => {
      let newValue;

      if (props.multiple) {
        newValue = [...value.value as Value[]];
        newValue.push(v);
      }
      else {
        newValue = v;
      }

      if (!isControlled.value) {
        defaultValue.value = newValue;
      }

      context.emit("update:value", newValue);
      context.emit("change", newValue);

      if (props.validator) {
        vuiFormItem?.onChange(newValue);
      }

      if (!props.multiple) {
        actived.value = false;
      }

      if (props.searchable && props.clearKeywordOnSelect && keyword.value) {
        keyword.value = "";

        if (!props.filter) {
          context.emit("search", keyword.value);
        }
      }
    };

    // onDeselect 事件回调
    const handleDeselect = (v: Value) => {
      let newValue;

      if (props.multiple) {
        newValue = (value.value as Value[]).filter(target => target !== v);
      }
      else {
        newValue = value.value === v ? undefined : value.value;
      }

      if (!isControlled.value) {
        defaultValue.value = newValue;
      }

      context.emit("update:value", newValue);
      context.emit("change", newValue);

      if (props.validator) {
        vuiFormItem?.onChange(newValue);
      }
    };

    // onClear 事件回调
    const handleClear = (e: MouseEvent) => {
      const newValue = props.multiple ? [] : undefined;

      if (!isControlled.value) {
        defaultValue.value = newValue;
      }

      context.emit("clear");
      context.emit("update:value", newValue);
      context.emit("change", newValue);

      if (props.validator) {
        vuiFormItem?.onChange(newValue);
      }

      if (props.searchable && keyword.value) {
        keyword.value = "";

        if (!props.filter) {
          context.emit("search", keyword.value);
        }
      }
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("select", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-single`]: !props.multiple,
        [`${classPrefix.value}-multiple`]: props.multiple,
        [`${classPrefix.value}-bordered`]: props.bordered,
        [`${classPrefix.value}-${size.value}`]: size.value,
        [`${classPrefix.value}-hovered`]: hovered.value,
        [`${classPrefix.value}-focused`]: focused.value,
        [`${classPrefix.value}-actived`]: actived.value,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });

    // 渲染
    return () => {
      // 菜单
      const slots = {
        content: () => props.loading ? (
          <VuiSelectSpin
            classPrefix={props.classPrefix}
            loadingText={props.loadingText}
          />
        ) : (
          options.value.length === 0 ? (
            <VuiSelectEmpty
              classPrefix={props.classPrefix}
              notFoundText={props.notFoundText}
            />
          ) : (
            <VuiSelectMenu
              classPrefix={props.classPrefix}
              value={selection.value}
              activedValue={activedValue.value}
              items={options.value}
              multiple={props.multiple}
              visible={dropdownVisible.value}
              onPreselect={handlePreselect}
              onSelect={handleSelect}
              onDeselect={handleDeselect}
            />
          )
        )
      };

      // 
      return (
        <div class={classes.el.value}>
          <VuiPopup
            classPrefix={props.classPrefix}
            name="select-dropdown"
            trigger="click"
            visible={dropdownVisible.value}
            getPopupContainer={props.getPopupContainer}
            placement={props.placement}
            animation={props.animation}
            autofitPopupWidth={props.autofitPopupWidth}
            autofitPopupMinWidth={props.autofitPopupMinWidth}
            offset={4}
            showArrow={false}
            destroyOnClose={props.destroyOnClose}
            disabled={disabled.value}
            onChange={handleToggle}
            v-slots={slots}
          >
            <VuiSelectSelection
              ref="selection"
              classPrefix={props.classPrefix}
              value={selection.value}
              placeholder={props.placeholder}
              backfillOptionProp={props.backfillOptionProp}
              multiple={props.multiple}
              maxTagCount={props.maxTagCount}
              maxTagPlaceholder={props.maxTagPlaceholder}
              searchable={props.searchable}
              keyword={keyword.value}
              clearable={props.clearable}
              hovered={hovered.value}
              focused={focused.value}
              actived={actived.value}
              disabled={disabled.value}
              onMouseenter={handleMouseenter}
              onMouseleave={handleMouseleave}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeydown={handleKeydown}
              onInput={handleInput}
              onDeselect={handleDeselect}
              onClear={handleClear}
            />
          </VuiPopup>
        </div>
      );
    };
  }
});
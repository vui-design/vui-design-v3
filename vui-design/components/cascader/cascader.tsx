import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Option, OptionKeys, Trigger, Formatter, Filter, FilterOptionProp, Placement } from "./types";
import { defineComponent, inject, ref, computed, watch } from "vue";
import { sizes, keyCodes } from "../../constants";
import { triggers, filterOptionProps, placements } from "./constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import { InputGroupInjectionKey } from "../input/context";
import VuiPopup from "../popup";
import VuiCascaderSelection from "./cascader-selection";
import VuiCascaderOptionListGroup from "./cascader-option-list-group";
import VuiCascaderOptionList from "./cascader-option-list";
import VuiCascaderEmpty from "./cascader-empty";
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
      type: Array as PropType<Array<string | number>>,
      default: () => []
    },
    // 当前选中值（受控模式）
    value: {
      type: Array as PropType<Array<string | number>>,
      default: () => []
    },
    // 选择框占位文本
    placeholder: {
      type: String as PropType<string>,
      default: undefined
    },
    // 可选项数据源
    options: {
      type: Array as PropType<Option[]>,
      default: () => []
    },
    // 自定义选项的 value、label、children 或 disabled 等字段
    optionKeys: {
      type: Object as PropType<OptionKeys>,
      default: () => utils.optionKeys
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
    // 展开次级菜单的触发方式
    trigger: {
      type: String as PropType<Trigger>,
      validator: (trigger: Trigger) => triggers.includes(trigger),
      default: "click"
    },
    // 当此项为 true 时，点选每级菜单选项值都会发生变化
    changeOnSelect: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 选择后展示的渲染函数，用于自定义显示格式
    formatter: {
      type: Function as PropType<Formatter>,
      default: (labels: Array<string | number>, options: Option[]) => labels.join(" / ")
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
    // 筛选时按 Option 的指定属性进行过滤
    filterOptionProp: {
      type: String as PropType<string>,
      validator: (filterOptionProp: FilterOptionProp) => filterOptionProps.includes(filterOptionProp),
      default: "label"
    },
    // 是否允许一键清空
    clearable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 输入框是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 选中值变化时是否触发父级表单验证
    validator: {
      type: Boolean as PropType<boolean>,
      default: true
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
      default: "vui-cascader-dropdown-scale"
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

export type CascaderProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-cascader",
  props: createProps(),
  emits: ["update:value", "change", "mouseenter", "mouseleave", "focus", "blur", "clear"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);
    const vuiInputGroup = inject(InputGroupInjectionKey, undefined);

    // 是否为受控模式
    const isControlled = useControlled("value");

    // 选中值（defaultValue 非受控模式，value 受控模式）
    const defaultValue = ref<Array<string | number>>(props.defaultValue);
    const value = computed(() => isControlled.value ? props.value : defaultValue.value);

    // optionKeys
    const optionKeys = computed(() => utils.getOptionKeys(props.optionKeys));

    // 尺寸
    const size = computed(() => props.size ?? vuiInputGroup?.size ?? vuiForm?.size ?? "medium");

    // 状态
    const hovered = ref<boolean>(false);
    const focused = ref<boolean>(false);
    const actived = ref<boolean>(false);
    const disabled = computed(() => props.disabled ?? vuiInputGroup?.disabled ?? vuiForm?.disabled ?? false);

    // 当前搜索关键字及经过筛选的选项列表
    const keyword = ref<string>("");
    const options = computed(() => {
      if (!props.searchable || !props.filter || keyword.value === "") {
        return props.options;
      }
      else {
        return utils.getFilteredOptions(props.options, optionKeys.value, props.changeOnSelect, props.filter, props.filterOptionProp, keyword.value);
      }
    });

    // 当前选中的选项或选项列表
    const selection = ref<Option[]>([]);

    // 下拉选项显示状态
    const dropdownVisible = computed(() => actived.value);

    // 
    watch([value, () => props.options, optionKeys], () => {
      selection.value = utils.getSelection(value.value, props.options, optionKeys.value);
    }, {
      immediate: true,
      deep: true
    });

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

      if (actived.value && keyCode === keyCodes.esc) {
        actived.value = false;
      }
      else if (!actived.value && [keyCodes.up, keyCodes.down].includes(keyCode)) {
        e.preventDefault();
        actived.value = true;
      }
    };

    // onInput 事件回调
    const handleInput = (characters: string) => {
      if (!props.searchable) {
        return;
      }

      actived.value = true;
      keyword.value = characters;
    };

    // onOptionListSelect 事件回调
    const handleOptionListSelect = () => {
      
    };

    // onOptionListGroupSelect 事件回调
    const handleOptionListGroupSelect = () => {
      
    };

    // onClear 事件回调
    const handleClear = (e: MouseEvent) => {
      const newValue: Array<string | number> = [];

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
      }
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("cascader", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
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
        body: () => options.value.length === 0 ? (
          <VuiCascaderEmpty
            classPrefix={props.classPrefix}
            notFoundText={props.notFoundText}
          />
        ) : (
          keyword.value !== "" ? (
            <VuiCascaderOptionList
              classPrefix={props.classPrefix}
              value={selection.value[selection.value.length - 1]}
              options={options.value}
              optionKeys={optionKeys.value}
              dangerouslyUseHTMLString={true}
              onSelect={handleOptionListSelect}
            />
          ) : (
            <VuiCascaderOptionListGroup
              classPrefix={props.classPrefix}
              value={selection.value}
              options={options.value}
              optionKeys={optionKeys.value}
              trigger={props.trigger}
              changeOnSelect={props.changeOnSelect}
              onSelect={handleOptionListGroupSelect}
            />
          )
        )
      };

      // 
      return (
        <div class={classes.el.value}>
          <VuiPopup
            classPrefix={props.classPrefix}
            name="cascader-dropdown"
            trigger="click"
            visible={dropdownVisible.value}
            getPopupContainer={props.getPopupContainer}
            placement={props.placement}
            animation={props.animation}
            autofitPopupWidth={props.autofitPopupWidth}
            autofitPopupMinWidth={props.autofitPopupMinWidth}
            offset={4}
            showBodyContainer={false}
            showArrow={false}
            destroyOnClose={props.destroyOnClose}
            disabled={disabled.value}
            onChange={handleToggle}
            v-slots={slots}
          >
            <VuiCascaderSelection
              ref="selection"
              classPrefix={props.classPrefix}
              value={selection.value}
              placeholder={props.placeholder}
              optionKeys={optionKeys.value}
              formatter={props.formatter}
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
              onClear={handleClear}
            />
          </VuiPopup>
        </div>
      );
    };
  }
});
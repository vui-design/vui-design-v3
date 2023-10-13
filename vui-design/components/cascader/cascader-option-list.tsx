import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Option, OptionKeys, Trigger } from "./types";
import { defineComponent, ref, computed, watch } from "vue";
import { triggers } from "./constants";
import VuiCascaderOption from "./cascader-option";
import useClassPrefix from "../../hooks/useClassPrefix";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 当前菜单层级
    level: {
      type: Number as PropType<number>,
      default: 0
    },
    // 当前选中的选项
    value: {
      type: Object as PropType<Option>,
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
    // 是否使用 HTML 渲染
    dangerouslyUseHTMLString: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 展开次级菜单的触发方式
    trigger: {
      type: String as PropType<Trigger>,
      validator: (trigger: Trigger) => triggers.includes(trigger),
      default: "click"
    }
  };
};

export type CascaderOptionListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-cascader-option-list",
  props: createProps(),
  emits: ["preselect", "select"],
  setup(props, context) {
    // 
    const activedValue = ref<string | number>();
    const selectedValue = ref<string | number>();

    // 
    watch(() => props.value, newValue => {
      if (!newValue) {
        return;
      }

      const value = newValue[props.optionKeys.value as string];

      activedValue.value = value;
      selectedValue.value = value;
    }, {
      immediate: true,
      deep: true
    });

    // onOptionMouseenter 事件回调
    const handleOptionMouseenter = (value: string | number) => {
      activedValue.value = value;

      context.emit("preselect", value);

      if (props.trigger === "hover") {
        handleOptionClick(value);
      }
    };

    // onOptionClick 事件回调
    const handleOptionClick = (value: string | number) => {
      selectedValue.value = value;

      context.emit("select", value);
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("cascader-option-list", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          {
            props.options.map(option => {
              let actived = activedValue.value === option[props.optionKeys.value as string];
              let selected = selectedValue.value === option[props.optionKeys.value as string];
              let disabled = option.disabled;

              return (
                <VuiCascaderOption
                  key={option[props.optionKeys.value as string]}
                  classPrefix={props.classPrefix}
                  data={option}
                  optionKeys={props.optionKeys}
                  dangerouslyUseHTMLString={props.dangerouslyUseHTMLString}
                  actived={actived}
                  selected={selected}
                  disabled={disabled}
                  onMouseenter={handleOptionMouseenter}
                  onClick={handleOptionClick}
                />
              );
            })
          }
        </div>
      );
    };
  }
});
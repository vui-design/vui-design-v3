import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Option, OptionKeys, Trigger } from "./types";
import { defineComponent, inject, ref, computed } from "vue";
import { triggers } from "./constants";
import VuiCascaderOptionList from "./cascader-option-list";
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
    // 当前选中的选项集合
    value: {
      type: Array as PropType<Option[]>,
      default: () => []
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
    }
  };
};

export type CascaderOptionListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-cascader-option-list-group",
  props: createProps(),
  emits: ["select"],
  setup(props, ctx) {
    // 
    const optionLists = ref([]);

    // onSelect 事件回调
    const handleSelect = (level, data) => {

    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("cascader-option-list-group", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          {
            optionLists.value.map((optionList, optionListIndex) => {
              return (
                <VuiCascaderOptionList
                  key={optionListIndex}
                  classPrefix={props.classPrefix}
                  level={optionListIndex}
                  value={props.value[optionListIndex]}
                  options={optionList}
                  optionKeys={props.optionKeys}
                  trigger={props.trigger}
                  onSelect={handleSelect}
                />
              );
            })
          }
        </div>
      );
    };
  }
});
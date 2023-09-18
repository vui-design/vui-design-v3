import type { FunctionalComponent, ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { Value, Label } from "./types";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 选项值
    value: {
      type: [String, Number, Boolean] as PropType<Value>,
      default: undefined
    },
    // 选项标签
    label: {
      type: [String, Number, Function] as PropType<Label>,
      default: undefined
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type OptionProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;
export interface OptionFC extends FunctionalComponent<OptionProps> {

};

const Option: OptionFC = () => null;

Option.displayName = "vui-option";

export default Option;
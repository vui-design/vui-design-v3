import type { FunctionalComponent, ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { Label } from "./types";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 分组名称
    label: {
      type: [String, Number, Function] as PropType<Label>,
      default: undefined
    },
    // 是否禁用该分组下所有选项
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type OptionGroupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;
export interface OptionGroupFC extends FunctionalComponent<OptionGroupProps> {

};

const OptionGroup: OptionGroupFC = () => null;

OptionGroup.displayName = "vui-option-group";

export default OptionGroup;
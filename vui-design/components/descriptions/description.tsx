import type { ExtractPropTypes, PropType, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent } from "vue";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 描述标签
    label: {
      type: String as PropType<string>,
      default: undefined
    },
    // 所占的列数
    span: {
      type: Number as PropType<number>,
      default: 1
    },
    // 自定义描述标签样式
    labelStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义内容区样式
    contentStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    }
  };
};

export type DescriptionProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-description",
  props: createProps()
});
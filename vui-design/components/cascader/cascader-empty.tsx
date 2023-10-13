import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, computed } from "vue";
import { useI18n } from "../../locale";
import VuiEmpty from "../empty";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 选项为空时的文本提示
    notFoundText: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type CascaderEmptyProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-cascader-empty",
  props: createProps(),
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // 选项为空时的文本提示
    const notFoundText = computed(() => props.notFoundText ?? translate("cascader.notFound"))

    // 计算 class 样式
    const classPrefix = useClassPrefix("cascader-empty", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <VuiEmpty description={notFoundText.value} />
        </div>
      );
    };
  }
});
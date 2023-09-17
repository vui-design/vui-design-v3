import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, computed } from "vue";
import { useI18n } from "../../locale";
import VuiSpin from "../spin";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 远程搜索时的文本提示
    loadingText: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type SelectSpinProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-select-spin",
  props: createProps(),
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // 远程搜索时的文本提示
    const loadingText = computed(() => props.loadingText ?? translate("select.loading"))

    // 计算 class 样式
    const classPrefix = useClassPrefix("select-spin", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elMessage = computed(() => `${classPrefix.value}-message`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <VuiSpin size="small" />
          <div class={classes.elMessage.value}>
            {loadingText.value}
          </div>
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Label } from "./types";
import { defineComponent, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 层级
    level: {
      type: Number as PropType<number>,
      default: 1
    },
    // 分组名称
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

export type SelectOptionGroupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-select-option-group",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("select-option-group", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-level-${props.level}`]: true,
        [`${classPrefix.value}-disabled`]: props.disabled
      };
    });
    classes.elContent = computed(() => `${classPrefix.value}-content`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <div class={classes.elContent.value}>
            {getSlotProp(context.slots, props, "label")}
          </div>
        </div>
      );
    };
  }
});
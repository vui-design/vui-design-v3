import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Key } from "../../types";
import { defineComponent, inject, computed, onBeforeMount, onBeforeUnmount } from "vue";
import { getSlotProp } from "../../utils/vue";
import { SegmentsInjectionKey } from "./context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import useKey from "../../hooks/useKey";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 分段的唯一标识
    key: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 分段图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 分段标签文本
    label: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 是否禁用分段
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type SegmentsItemProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-segments-item",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiSegments = inject(SegmentsInjectionKey, undefined);

    // 唯一标识
    const key = useKey();

    // 状态
    const selected = computed(() => vuiSegments?.activeKey === key.value);
    const disabled = computed(() => props.disabled ?? vuiSegments?.disabled ?? false);

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      vuiSegments?.onChange?.(key.value);
    };

    // 组件挂载之前执行
    onBeforeMount(() => {
      vuiSegments?.addKey?.(key.value);
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiSegments?.removeKey?.(key.value);
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("segments-item", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-selected`]: selected.value,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });
    classes.elIcon = computed(() => `${classPrefix.value}-icon`);
    classes.elLabel = computed(() => `${classPrefix.value}-label`);

    // 渲染
    return () => {
      // 图标
      let icon;

      if (context.slots.icon || props.icon) {
        icon = (
          <div class={classes.elIcon.value}>
            {
              context.slots.icon ? context.slots.icon() : (
                <VuiIcon type={props.icon} />
              )
            }
          </div>
        );
      }

      // 标签文本
      let label;

      if (context.slots.default || context.slots.label || props.label) {
        label = (
          <div class={classes.elLabel.value}>
            {
              context.slots.default?.() ?? getSlotProp(context.slots, props, "label")
            }
          </div>
        );
      }

      // 
      return (
        <div class={classes.el.value} onClick={handleClick}>
          {icon}
          {label}
        </div>
      );
    }
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Option } from "./types";
import { defineComponent, inject, ref, computed, watch, nextTick } from "vue";
import { PopupInjectionKey } from "../popup/context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import scrollIntoView from "../../utils/scrollIntoView";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 选项层级
    level: {
      type: Number as PropType<number>,
      default: 1
    },
    // 选项值
    value: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 选项标签
    label: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 子选项
    children: {
      type: Array as PropType<Option[]>,
      default: undefined
    },
    // 是否为叶子选项
    leaf: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否使用 HTML 渲染
    dangerouslyUseHTMLString: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否为激活状态
    actived: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否为选中状态
    selected: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type CascaderOptionProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-cascader-option",
  props: createProps(),
  emits: ["mouseenter", "click"],
  setup(props, context) {
    // 注入祖先组件
    const vuiPopup = inject(PopupInjectionKey, undefined);

    // DOM 引用
    const containerRef = ref<HTMLDivElement>();

    // 
    watch(() => vuiPopup?.visible, newVisible => {
      nextTick(() => {
        if (!newVisible || !props.selected || !containerRef.value) {
          return;
        }

        scrollIntoView(containerRef.value.parentNode as HTMLElement, containerRef.value);
      });
    });

    // onMouseenter 事件回调
    const handleMouseenter = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("mouseenter", props.value);
    };

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("click", props.value);
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("cascader-option", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-actived`]: props.actived,
        [`${classPrefix.value}-selected`]: props.selected,
        [`${classPrefix.value}-disabled`]: props.disabled
      };
    });
    classes.elContent = computed(() => `${classPrefix.value}-content`);
    classes.elArrow = computed(() => `${classPrefix.value}-arrow`);

    // 渲染
    return () => {
      return (
        <div ref={containerRef} class={classes.el.value} onMouseenter={handleMouseenter} onClick={handleClick}>
          {
            props.dangerouslyUseHTMLString ? (
              <div class={classes.elLabel.value} v-html={props.label} />
            ) : (
              <div class={classes.elLabel.value}>
                {props.label}
              </div>
            )
          }
          {
            props.children ? (
              <div class={classes.elArrow.value}>
                <VuiIcon type="chevron-right" />
              </div>
            ) : null
          }
        </div>
      );
    };
  }
});
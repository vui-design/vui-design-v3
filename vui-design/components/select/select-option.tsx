import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Value, Label, Children } from "./types";
import { defineComponent, computed } from "vue";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 选项类型
    type: {
      type: String as PropType<string>,
      default: "option"
    },
    // 选项层级
    level: {
      type: Number as PropType<number>,
      default: 1
    },
    // 选项值
    value: {
      type: [String, Number, Boolean] as PropType<Value>,
      default: undefined
    },
    // 选项标签
    label: {
      type: [String, Number, Boolean, Function, Array] as PropType<Label>,
      default: undefined
    },
    // 选项内容
    children: {
      type: [String, Number, Boolean, Function, Array] as PropType<Children>,
      default: undefined
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

export type SelectOptionProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-select-option",
  props: createProps(),
  emits: ["mouseenter", "click"],
  setup(props, context) {
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
    const classPrefix = useClassPrefix("select-option", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-level-${props.level}`]: true,
        [`${classPrefix.value}-actived`]: props.actived,
        [`${classPrefix.value}-selected`]: props.selected,
        [`${classPrefix.value}-disabled`]: props.disabled
      };
    });
    classes.elContent = computed(() => `${classPrefix.value}-content`);
    classes.elIcon = computed(() => `${classPrefix.value}-icon`);

    // 渲染
    return () => {
      let content;

      if (props.children !== undefined) {
        content = props.children;
      }
      else if (props.label !== undefined) {
        content = is.function(props.label) ? props.label() : props.label;
      }
      else {
        content = props.value;
      }

      return (
        <div class={classes.el.value} onMouseenter={handleMouseenter} onClick={handleClick}>
          <div class={classes.elContent.value}>
            {content}
          </div>
          {
            props.type === "keyword" ? (
              <div class={classes.elIcon.value}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                  <path d="M965.6,80h-77.3c-5.6,0-10.3,4.5-10.3,10.1v653.3H251.6v-92c-0.1-5.7-4.8-10.2-10.5-10.2c-2.3,0-4.5,0.8-6.3,2.2L51.9,784.6c-4.4,3.4-5.3,9.7-1.9,14.1c0.5,0.7,1.2,1.3,1.9,1.8l182.9,141.2c4.5,3.5,11,2.8,14.5-1.6c1.4-1.8,2.2-4,2.3-6.3v-94.7h641.9c45.5,0,82.5-36.2,82.5-80.7V90.1C975.9,84.5,971.3,79.9,965.6,80C965.6,80,965.6,80,965.6,80z" />
                </svg>
              </div>
            ) : null
          }
        </div>
      );
    };
  }
});
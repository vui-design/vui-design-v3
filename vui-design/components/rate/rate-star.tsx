import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Character } from "./types";
import { defineComponent, inject, computed } from "vue";
import { keyCodes } from "../../constants";
import { RateInjectionKey } from "./context";
import VuiIcon from "../icon";
import VuiTooltip from "../tooltip";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 索引
    index: {
      type: Number as PropType<number>,
      default: 0
    },
    // 分值
    value: {
      type: Number as PropType<number>,
      default: 0
    },
    // 自定义字符
    character: {
      type: [String, Function] as PropType<Character>,
      default: undefined
    },
    // 提示信息
    tooltip: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type RateStarProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-rate-star",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiRate = inject(RateInjectionKey, undefined);

    // 当前状态
    const status = computed(() => {
      const value = vuiRate?.mouseentered ?? vuiRate?.value ?? 0;

      if (vuiRate?.allowHalf && props.value === value + 0.5) {
        return "half";
      }
      else if (value < props.value) {
        return "zero";
      }
      else {
        return "full";
      }
    });

    // 
    const handleMouseenter = (e: MouseEvent, half: number) => {
      vuiRate?.onMouseenter?.(e, props.value, half);
    };

    // 
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.keyCode !== keyCodes.enter) {
        return;
      }

      e.preventDefault();
      vuiRate?.onClick?.(e, props.value, 0);
    };

    // 
    const handleClick = (e: MouseEvent, half: number) => {
      vuiRate?.onClick?.(e, props.value, half);
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("rate-star", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${status.value}`]: status.value
      };
    });

    // 
    const getStar = () => {
      const halfStates = [1, 0];
      const character = getCharacter();

      return (
        <div
          tabindex={0}
          class={classes.el.value}
          onKeydown={handleKeydown}
        >
          {
            halfStates.map(halfState => {
              const attributes = {
                class: halfState ? `${classPrefix.value}-first` : `${classPrefix.value}-second`,
                onMouseenter: (e: MouseEvent) => handleMouseenter(e, halfState),
                onClick: (e: MouseEvent) => handleClick(e, halfState)
              };

              return (
                <div {...attributes}>
                  {character}
                </div>
              );
            })
          }
        </div>
      );
    };

    // 
    const getCharacter = () => {
      if (is.string(props.character)) {
        return props.character;
      }
      else if (is.function(props.character)) {
        return props.character(props.index, props.value);
      }
      else {
        return (
          <VuiIcon type="star-filled" />
        );
      }
    };

    // 渲染
    return () => {
      const star = getStar();

      if (!props.tooltip) {
        return star;
      }
      else {
        return (
          <VuiTooltip content={props.tooltip}>
            {star}
          </VuiTooltip>
        );
      }
    };
  }
});
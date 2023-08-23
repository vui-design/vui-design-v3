import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Character } from "./types";
import { defineComponent, provide, inject, toRefs, ref, reactive, computed } from "vue";
import { keyCodes } from "../../constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import { RateInjectionKey } from "./context";
import VuiRateStar from "./rate-star";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 默认评分（非受控模式）
    defaultValue: {
      type: Number as PropType<number>,
      default: 0
    },
    // 当前评分（受控模式）
    value: {
      type: Number as PropType<number>,
      default: 0
    },
    // Star 总数
    count: {
      type: Number as PropType<number>,
      default: 5
    },
    // 自定义字符
    character: {
      type: [String, Function] as PropType<Character>,
      default: undefined
    },
    // 自定义每项的提示信息
    tooltips: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    // 是否允许半选
    allowHalf: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否允许再次点击取消评分
    clearable: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否只读，无法进行交互
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 评分变化时是否触发父级表单验证
    validator: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type RateProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-rate",
  props: createProps(),
  emits: ["update:value", "change"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);

    // 解构属性
    const { allowHalf } = toRefs(props);

    // 内部状态
    const disabled = computed(() => props.disabled ?? vuiForm?.disabled ?? false);
    const cleaned = ref<number>();
    const mouseentered = ref<number>();

    // 是否为受控模式
    const isControlled = useControlled("value");

    // 评分（defaultValue 非受控模式，value 受控模式）
    const defaultValue = ref(props.defaultValue);
    const value = computed(() => isControlled.value ? props.value : defaultValue.value);

    // 获取分值
    const getStarValue = (value: number, half: number) => {
      return props.allowHalf && half ? (value - 0.5) : value;
    };

    // 
    const change = (newValue: number) => {
      if (value.value === newValue) {
        return;
      }

      if (!isControlled.value) {
        defaultValue.value = newValue;
      }

      context.emit("update:value", newValue);
      context.emit("change", newValue);

      if (props.validator) {
        vuiFormItem?.onChange(newValue);
      }
    };

    // 
    const handleMouseenter = (e: MouseEvent, starValue: number, half: number) => {
      if (disabled.value) {
        return;
      }

      const newValue = getStarValue(starValue, half);

      if (newValue === cleaned.value) {
        return;
      }

      cleaned.value = undefined;
      mouseentered.value = newValue;
    };

    // 
    const handleMouseleave = (e: MouseEvent) => {
      if (disabled.value) {
        return;
      }

      cleaned.value = undefined;
      mouseentered.value = undefined;
    };

    // 
    const handleKeydown = (e: KeyboardEvent) => {
      const { count, allowHalf } = props;

      if (e.keyCode === keyCodes.left && value.value > 0) {
        e.preventDefault();
        change(allowHalf ? (value.value - 0.5) : (value.value - 1));
      }
      else if (e.keyCode === keyCodes.right && value.value < count) {
        e.preventDefault();
        change(allowHalf ? (value.value + 0.5) : (value.value + 1));
      }
    };

    // 
    const handleClick = (e: KeyboardEvent | MouseEvent, starValue: number, half: number) => {
      if (disabled.value) {
        return;
      }

      let maybeClean = false;
      let newValue = getStarValue(starValue, half);

      if (props.clearable) {
        maybeClean = newValue === value.value;
      }

      cleaned.value = maybeClean ? newValue : undefined;
      mouseentered.value = undefined;

      if (maybeClean) {
        newValue = 0;
      }

      change(newValue);
    };

    // 向后代组件注入当前组件
    provide(RateInjectionKey, reactive({
      allowHalf,
      cleaned,
      mouseentered,
      value,
      onMouseenter: handleMouseenter,
      onMouseleave: handleMouseleave,
      onClick: handleClick
    }));

    // 计算 class 样式
    const classPrefix = useClassPrefix("rate", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-disabled`]: props.disabled
      };
    });

    // 渲染
    return () => {
      let stars = [];

      for (let index = 0; index < props.count; index++) {
        const attributes = {
          key: index,
          classPrefix: props.classPrefix,
          index: index,
          value: index + 1,
          character: context.slots.character ?? props.character,
          tooltip: props.tooltips[index]
        };

        stars.push(
          <VuiRateStar {...attributes} />
        );
      }

      return (
        <div
          tabindex={0}
          class={classes.el.value}
          onMouseleave={handleMouseleave}
          onKeydown={handleKeydown}
        >
          {stars}
        </div>
      );
    };
  }
});
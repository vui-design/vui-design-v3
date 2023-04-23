import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent, inject, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import { ConfigProviderInjectionKey } from "../config-provider/context";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

const colors = ["#52c41a", "#ff4d4f"];
const getTrend = (
  value: number,
  target: number
) => {
  if (!is.number(value) || !is.number(target)) {
    return;
  }

  const trend = ((value - target) / Math.abs(target)) * 100;

  if (is.nan(trend) || is.infinity(trend)) {
    return;
  }

  return trend;
};

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 当前值
    value: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 目标值/对比值
    target: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 数值精度，必须为 0 或大于 0 的整数
    precision: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 标签文本
    label: {
      type: String as PropType<string>,
      default: undefined
    },
    // 下降趋势的颜色
    downwardColor: {
      type: String as PropType<string>,
      default: undefined
    },
    // 上升趋势的颜色
    upwardColor: {
      type: String as PropType<string>,
      default: undefined
    },
    // 颜色反转，仅在使用默认颜色时生效
    reverseColor: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 自定义字符
    symbol: {
      type: String as PropType<string>,
      default: "%"
    },
    // 趋势值无效时的占位文本
    placeholder: {
      type: String as PropType<string>,
      default: "NaN"
    }
  };
};

export type TrendProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-trend",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiConfigProvider = inject(ConfigProviderInjectionKey, undefined);

    // 
    const trend = computed(() => getTrend(props.value as number, props.target as number));
    const trendType = computed(() => trend.value === undefined ? "" : (trend.value < 0 ? "downward" : "upward"));
    const reverseColor = computed(() => props.reverseColor ?? vuiConfigProvider?.reverseTrendColor ?? false);

    // 计算 class 样式
    const classPrefix = useClassPrefix("trend", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${trendType.value}`]: trendType.value
      };
    });
    classes.elLabel = computed(() => `${classPrefix.value}-label`);
    classes.elMark = computed(() => `${classPrefix.value}-mark`);
    classes.elValue = computed(() => `${classPrefix.value}-value`);
    classes.elPlaceholder = computed(() => `${classPrefix.value}-placeholder`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (trendType.value === "downward") {
        style.color = props.downwardColor ?? (reverseColor.value ? colors[1] : colors[0]);
      }
      else if (trendType.value === "upward") {
        style.color = props.upwardColor ?? (reverseColor.value ? colors[0] : colors[1]);
      }

      return style;
    });

    // 渲染
    return () => {
      let children = [];

      if (trend.value === undefined) {
        children.push(
          <div class={classes.elPlaceholder.value}>
            {getSlotProp(context.slots, props, "placeholder")}
          </div>
        );
      }
      else {
        if (context.slots.label || props.label) {
          children.push(
            <div class={classes.elLabel.value}>
              {getSlotProp(context.slots, props, "label")}
            </div>
          );
        }

        let value: any = Math.abs(trend.value);

        if (is.number(props.precision) && props.precision >= 0) {
          value = value.toFixed(props.precision);
        }

        if (props.symbol) {
          value = `${value}${props.symbol}`;
        }

        children.push(
          <>
            <div class={classes.elMark.value}></div>
            <div class={classes.elValue.value}>
              {value}
            </div>
          </>
        );
      }

      return (
        <div class={classes.el.value} style={styles.el.value}>
          {children}
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Type, Success, Status, StrokeLinecap, Formatter } from "./types";
import { defineComponent, computed } from "vue";
import { sizes } from "../../constants";
import { types, statuses, widths, strokeLinecaps, strokeWidths } from "./constants";
import VuiIcon from "../icon";
import VuiProgressLine from "./progress-line";
import VuiProgressCircle from "./progress-circle";
import VuiProgressSteps from "./progress-steps";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import clamp from "../../utils/clamp";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 进度条类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "line"
    },
    // 是否显示进度数值或状态图标
    showInfo: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 进度尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 进度条步数
    steps: {
      type: Number as PropType<number>,
      default: 0
    },
    // 进度百分比
    percentage: {
      type: Number as PropType<number>,
      default: 0
    },
    // 成功进度条相关配置
    success: {
      type: [Number, Object] as PropType<number | Success>,
      default: undefined
    },
    // 状态
    status: {
      type: String as PropType<Status>,
      validator: (status: Status) => statuses.includes(status),
      default: "normal"
    },
    // 进度环或仪表盘的画布宽度
    width: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 未完成分段的颜色
    trailColor: {
      type: String as PropType<string>,
      default: undefined
    },
    // 进度条颜色，会覆盖 status 状态下的默认颜色
    strokeColor: {
      type: [String, Array] as PropType<string | string[]>,
      default: undefined
    },
    // 进度条宽度
    strokeWidth: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 进度条的边缘形状
    strokeLinecap: {
      type: String as PropType<StrokeLinecap>,
      validator: (strokeLinecap: StrokeLinecap) => strokeLinecaps.includes(strokeLinecap),
      default: "round"
    },
    // 仪表盘的缺口角度
    gapDegree: {
      type: Number as PropType<number>,
      validator: (gapDegree: number) => gapDegree >= 0 && gapDegree <= 295,
      default: 75
    },
    // 内容的模板函数，接收 percentage 作为参数
    formatter: {
      type: Function as PropType<Formatter>,
      default: undefined
    }
  };
};

export type ProgressProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-progress",
  props: createProps(),
  setup(props, context) {
    // 进度百分比 & 状态
    const percentage = computed(() => clamp(props.percentage, 0, 100));
    const status = computed(() => percentage.value === 100 && props.status === "normal" ? "success" : props.status);

    // 画布宽度
    const width = computed(() => props.type !== "line" && !props.width ? widths[props.size] : props.width);

    // 进度条颜色 & 宽度
    const strokeColor = computed(() => is.array(props.strokeColor) ? props.strokeColor[props.strokeColor.length - 1] : props.strokeColor);
    const strokeWidth = computed(() => {
      let value = !props.strokeWidth ? strokeWidths[props.size] : props.strokeWidth;

      if (props.type !== "line") {
        value = Number((value / width.value * 100).toFixed(2));
      }

      return value;
    });

    // 仪表盘的缺口角度
    const gapDegree = computed(() => props.type === "dashboard" ? clamp(props.gapDegree, 0, 295) : 0);

    // 计算 class 样式
    const classPrefix = useClassPrefix("progress", props);
    let classes: Record<string, ComputedRef> = {};

    classes.elInfo = computed(() => `${classPrefix.value}-info`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elInfo = computed(() => {
      return {
        color: status.value !== "normal" && strokeColor.value ? strokeColor.value : undefined
      };
    });

    // 获取进度数值或状态图标
    const getProgressInfo = () => {
      if (!props.showInfo) {
        return;
      }

      const isCircle = props.type === "circle" || props.type === "dashboard";
      let info;

      if (context.slots.formatter) {
        info = context.slots.formatter(percentage.value);
      }
      else if (is.function(props.formatter)) {
        info = props.formatter(percentage.value);
      }
      else if (status.value === "exception" || status.value === "success") {
        const iconType = status.value === "exception" ? "crossmark" : "checkmark";

        info = (
          <VuiIcon type={isCircle ? iconType : `${iconType}-circle-filled`} />
        );
      }
      else {
        info = `${percentage.value}%`;
      }

      return (
        <div class={classes.elInfo.value} style={styles.elInfo.value}>
          {info}
        </div>
      );
    };

    // 渲染
    return () => {
      const info = getProgressInfo();
      const attributes = {
        classPrefix: props.classPrefix,
        size: props.size,
        percentage: percentage.value,
        success: props.success,
        status: status.value,
        trailColor: props.trailColor
      };

      if (props.type === "line") {
        return (
          <VuiProgressLine
            {...attributes}
            success={props.success}
            strokeColor={strokeColor.value}
            strokeWidth={strokeWidth.value}
            strokeLinecap={props.strokeLinecap}
          >
            {info}
          </VuiProgressLine>
        );
      }
      else if (props.type === "circle" || props.type === "dashboard") {
        return (
          <VuiProgressCircle
            {...attributes}
            success={props.success}
            width={width.value}
            strokeColor={strokeColor.value}
            strokeWidth={strokeWidth.value}
            strokeLinecap={props.strokeLinecap}
            gapDegree={gapDegree.value}
          >
            {info}
          </VuiProgressCircle>
        );
      }
      else if (props.type === "steps") {
        return (
          <VuiProgressSteps {...attributes} steps={props.steps} strokeColor={props.strokeColor}>
            {info}
          </VuiProgressSteps>
        );
      }
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { StrokeLinecapProperty } from "csstype";
import type { Size, Success, Status, StrokeLinecap } from "./types";
import { defineComponent, computed } from "vue";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import { sizes, statuses, strokeLinecaps } from "./constants";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 进度尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
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
      type: String as PropType<string>,
      default: undefined
    },
    // 进度条宽度
    strokeWidth: {
      type: Number as PropType<number>,
      default: 0
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
      default: 0
    }
  };
};

export type ProgressCircleProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-progress-circle",
  props: createProps(),
  setup(props, context) {
    // 进度环 & 仪表盘相关变量
    const radius = computed(() => 50 - props.strokeWidth / 2);
    const perimeter = computed(() => 2 * Math.PI * radius.value);

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "progress"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-circle`]: true,
        [`${className.value}-with-info`]: context.slots.default,
        [`${className.value}-${props.size}`]: props.size,
        [`${className.value}-status-${props.status}`]: props.status
      };
    });
    classes.elBar = computed(() => `${className.value}-bar`);
    classes.elBarTrail = computed(() => `${className.value}-bar-trail`);
    classes.elBarStroke = computed(() => `${className.value}-bar-stroke`);
    classes.elBarStrokeSuccess = computed(() => `${className.value}-bar-stroke-success`);

    // 计算 style 样式
    const styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      return {
        width: `${props.width}px`,
        height: `${props.width}px`
      };
    });
    styles.elBarTrail = computed(() => {
      return {
        strokeWidth: `${props.strokeWidth}px`,
        strokeLinecap: props.strokeLinecap as StrokeLinecapProperty,
        stroke: props.trailColor,
        strokeDasharray: props.gapDegree > 0 ? `${perimeter.value - props.gapDegree}px, ${perimeter.value}px` : `${perimeter.value}px, ${perimeter.value}px`,
        strokeDashoffset: props.gapDegree > 0 ? `-${props.gapDegree / 2}px` : `0px`
      };
    });
    styles.elBarStroke = computed(() => {
      return {
        strokeWidth: `${props.percentage === 0 ? 0 : props.strokeWidth}px`,
        strokeLinecap: props.strokeLinecap as StrokeLinecapProperty,
        stroke: props.strokeColor,
        strokeDasharray: props.gapDegree > 0 ? `${props.percentage / 100 * (perimeter.value - props.gapDegree)}px, ${perimeter.value}px` : `${props.percentage / 100 * perimeter.value}px, ${perimeter.value}px`,
        strokeDashoffset: props.gapDegree > 0 ? `-${props.gapDegree / 2}px` : `0px`,
        transition: `stroke 0.2s ease 0s, stroke-width 0s ease ${props.percentage === 0 ? 0.2 : 0}s, stroke-dasharray 0.2s ease 0s, stroke-dashoffset 0.2s ease 0s`
      };
    });
    styles.elBarStrokeSuccess = computed(() => {
      let style: CSSProperties = {};

      if (!is.number(props.success) && !is.object(props.success)) {
        return style;
      }

      let percentage = 0;
      let strokeColor;

      if (is.number(props.success)) {
        percentage = props.success;
      }
      else {
        percentage = props.success.percentage;
        strokeColor = props.success.strokeColor;
      }

      return {
        strokeWidth: `${percentage === 0 ? 0 : props.strokeWidth}px`,
        strokeLinecap: props.strokeLinecap as StrokeLinecapProperty,
        stroke: strokeColor,
        strokeDasharray: props.gapDegree > 0 ? `${percentage / 100 * (perimeter.value - props.gapDegree)}px, ${perimeter.value}px` : `${percentage / 100 * perimeter.value}px, ${perimeter.value}px`,
        strokeDashoffset: props.gapDegree > 0 ? `-${props.gapDegree / 2}px` : `0px`,
        transition: `stroke 0.2s ease 0s, stroke-width 0s ease ${percentage === 0 ? 0.2 : 0}s, stroke-dasharray 0.2s ease 0s, stroke-dashoffset 0.2s ease 0s`
      };
    });

    // 渲染
    return () => {
      let directive;

      if (props.gapDegree > 0) {
        directive = `M 50,50 m 0,${radius.value} a ${radius.value},${radius.value} 0 1 1 0,-${radius.value * 2} a ${radius.value},${radius.value} 0 1 1 0,${radius.value * 2}`;
      }
      else {
        directive = `M 50,50 m 0,-${radius.value} a ${radius.value},${radius.value} 0 1 1 0,${radius.value * 2} a ${radius.value},${radius.value} 0 1 1 0,-${radius.value * 2}`;
      }

      return (
        <div class={classes.el.value} style={styles.el.value}>
          <svg viewBox="0 0 100 100" class={classes.elBar.value}>
            <path d={directive} class={classes.elBarTrail.value} style={styles.elBarTrail.value}></path>
            <path d={directive} class={classes.elBarStroke.value} style={styles.elBarStroke.value}></path>
            {
              !is.number(props.success) && !is.object(props.success) ? null : (
                <path d={directive} class={classes.elBarStrokeSuccess.value} style={styles.elBarStrokeSuccess.value}></path>
              )
            }
          </svg>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
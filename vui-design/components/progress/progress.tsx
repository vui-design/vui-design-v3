import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { StrokeLinecapProperty  } from "csstype";
import type { Type, Size, Success, Status, StrokeLinecap, Formatter } from "./types";
import { defineComponent, computed } from "vue";
import VuiIcon from "../icon";
import is from "../../utils/is";
import clamp from "../../utils/clamp";
import getClassName from "../../utils/getClassName";
import { types, sizes, statuses, widths, strokeLinecaps, strokeWidths } from "./constants";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
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
    trackColor: {
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
    // 画布 & 进度条宽度
    const width = computed(() => props.type !== "line" && !props.width ? widths[props.size] : props.width);
    const strokeWidth = computed(() => {
      let value = !props.strokeWidth ? strokeWidths[props.size] : props.strokeWidth;

      if (props.type !== "line") {
        value = Number((value / width.value * 100).toFixed(2));
      }

      return value;
    });

    // 进度环 & 仪表盘相关变量
    const radius = computed(() => 50 - strokeWidth.value / 2);
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const gapDegree = computed(() => clamp(props.gapDegree, 0, 295));

    // 进度百分比 & 状态
    const percentage = computed(() => clamp(props.percentage, 0, 100));
    const status = computed(() => percentage.value === 100 && props.status === "normal" ? "success" : props.status);

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "progress"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${props.type}`]: props.type,
        [`${className.value}-with-info`]: props.showInfo,
        [`${className.value}-${props.size}`]: props.size,
        [`${className.value}-status-${status.value}`]: status.value
      };
    });
    classes.elBar = computed(() => `${className.value}-bar`);
    classes.elBarTrail = computed(() => `${className.value}-bar-trail`);
    classes.elBarStroke = computed(() => `${className.value}-bar-stroke`);
    classes.elBarStrokeSuccess = computed(() => `${className.value}-bar-stroke-success`);
    classes.elInfo = computed(() => `${className.value}-info`);

    // 计算 style 样式
    const styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (props.type === "circle" || props.type === "dashboard") {
        style.width = style.height = `${width.value}px`;
      }

      return style;
    });
    styles.elBarTrack = computed(() => {
      let style: CSSProperties = {};

      if (props.type === "line") {
        style.height = `${strokeWidth.value}px`;
        style.borderRadius = `${props.strokeLinecap === "round" ? strokeWidth.value : 0}px`;
        style.backgroundColor = props.trackColor;
      }
      else if (props.type === "circle" || props.type === "dashboard") {
        style.strokeWidth = `${strokeWidth.value}px`;
        style.strokeLinecap = props.strokeLinecap as StrokeLinecapProperty;
        style.stroke = props.trackColor;
        style.strokeDasharray = props.type === "circle" ? `${perimeter.value}px, ${perimeter.value}px` : `${perimeter.value - gapDegree.value}px, ${perimeter.value}px`;
        style.strokeDashoffset = props.type === "circle" ? `0px` : `-${gapDegree.value / 2}px`;
      }

      return style;
    });
    styles.elBarStroke = computed(() => {
      let style: CSSProperties = {};

      if (props.type === "line") {
        style.width = `${percentage.value}%`;
        style.height = `${strokeWidth.value}px`;
        style.borderRadius = `${props.strokeLinecap === "round" ? strokeWidth.value : 0}px`;
        style.backgroundColor = props.strokeColor;
      }
      else if (props.type === "circle" || props.type === "dashboard") {
        style.strokeWidth = `${percentage.value === 0 ? 0 : strokeWidth.value}px`;
        style.strokeLinecap = props.strokeLinecap as StrokeLinecapProperty;
        style.stroke = props.strokeColor;
        style.strokeDasharray = props.type === "circle" ? `${percentage.value / 100 * perimeter.value}px, ${perimeter.value}px` : `${percentage.value / 100 * (perimeter.value - gapDegree.value)}px, ${perimeter.value}px`;
        style.strokeDashoffset = props.type === "circle" ? `0px` : `-${gapDegree.value / 2}px`;
        style.transition = `stroke 0.2s ease 0s, stroke-width 0s ease ${percentage.value === 0 ? 0.2 : 0}s, stroke-dasharray 0.2s ease 0s, stroke-dashoffset 0.2s ease 0s`;
      }

      return style;
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

      if (props.type === "line") {
        style.width = `${percentage}%`;
        style.height = `${strokeWidth.value}px`;
        style.borderRadius = `${props.strokeLinecap === "round" ? strokeWidth.value : 0}px`;
        style.backgroundColor = strokeColor;
      }
      else if (props.type === "circle" || props.type === "dashboard") {
        style.strokeWidth = `${percentage === 0 ? 0 : strokeWidth.value}px`;
        style.strokeLinecap = props.strokeLinecap as StrokeLinecapProperty;
        style.stroke = strokeColor;
        style.strokeDasharray = props.type === "circle" ? `${percentage / 100 * perimeter.value}px, ${perimeter.value}px` : `${percentage / 100 * (perimeter.value - gapDegree.value)}px, ${perimeter.value}px`;
        style.strokeDashoffset = props.type === "circle" ? `0px` : `-${gapDegree.value / 2}px`;
        style.transition = `stroke 0.2s ease 0s, stroke-width 0s ease ${percentage === 0 ? 0.2 : 0}s, stroke-dasharray 0.2s ease 0s, stroke-dashoffset 0.2s ease 0s`;
      }

      return style;
    });
    styles.elInfo = computed(() => {
      return {
        color: status.value !== "normal" && props.strokeColor ? props.strokeColor : undefined
      };
    });

    // 渲染
    return () => {
      let children = [];

      if (props.type === "line") {
        children.push(
          <div class={classes.elBar.value}>
            <div class={classes.elBarTrail.value} style={styles.elBarTrack.value}>
              <div class={classes.elBarStroke.value} style={styles.elBarStroke.value}></div>
              {
                !is.number(props.success) && !is.object(props.success) ? null : (
                  <div class={classes.elBarStrokeSuccess.value} style={styles.elBarStrokeSuccess.value}></div>
                )
              }
            </div>
          </div>
        );
      }
      else if (props.type === "circle" || props.type === "dashboard") {
        let directive;

        if (props.type === "circle") {
          directive = `M 50,50 m 0,-${radius.value} a ${radius.value},${radius.value} 0 1 1 0,${radius.value * 2} a ${radius.value},${radius.value} 0 1 1 0,-${radius.value * 2}`;
        }
        else if (props.type === "dashboard") {
          directive = `M 50,50 m 0,${radius.value} a ${radius.value},${radius.value} 0 1 1 0,-${radius.value * 2} a ${radius.value},${radius.value} 0 1 1 0,${radius.value * 2}`;
        }

        children.push(
          <svg viewBox="0 0 100 100" class={classes.elBar.value}>
            <path d={directive} class={classes.elBarTrail.value} style={styles.elBarTrack.value}></path>
            <path d={directive} class={classes.elBarStroke.value} style={styles.elBarStroke.value}></path>
            {
              !is.number(props.success) && !is.object(props.success) ? null : (
                <path d={directive} class={classes.elBarStrokeSuccess.value} style={styles.elBarStrokeSuccess.value}></path>
              )
            }
          </svg>
        );
      }

      if (props.showInfo) {
        let info;

        if (context.slots.formatter) {
          info = context.slots.formatter(percentage.value);
        }
        else if (props.formatter) {
          info = props.formatter(percentage.value);
        }
        else if (status.value === "exception") {
          info = (
            <VuiIcon type={props.type === "line" ? "crossmark-circle-filled" : "crossmark"} />
          );
        }
        else if (status.value === "success") {
          info = (
            <VuiIcon type={props.type === "line" ? "checkmark-circle-filled" : "checkmark"} />
          );
        }
        else {
          info = `${percentage.value}%`;
        }

        children.push(
          <div class={classes.elInfo.value} style={styles.elInfo.value}>
            {info}
          </div>
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
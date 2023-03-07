import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
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
    }
  };
};

export type ProgressLineProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-progress-line",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "progress"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-line`]: true,
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

    styles.elBarTrail = computed(() => {
      return {
        height: `${props.strokeWidth}px`,
        borderRadius: `${props.strokeLinecap === "round" ? props.strokeWidth : 0}px`,
        backgroundColor: props.trailColor
      };
    });
    styles.elBarStroke = computed(() => {
      return {
        width: `${props.percentage}%`,
        borderRadius: `${props.strokeLinecap === "round" ? props.strokeWidth : 0}px`,
        backgroundColor: props.strokeColor
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
        width: `${percentage}%`,
        borderRadius: `${props.strokeLinecap === "round" ? props.strokeWidth : 0}px`,
        backgroundColor: strokeColor
      };
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <div class={classes.elBar.value}>
            <div class={classes.elBarTrail.value} style={styles.elBarTrail.value}>
              <div class={classes.elBarStroke.value} style={styles.elBarStroke.value}></div>
              {
                !is.number(props.success) && !is.object(props.success) ? null : (
                  <div class={classes.elBarStrokeSuccess.value} style={styles.elBarStrokeSuccess.value}></div>
                )
              }
            </div>
          </div>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Status } from "./types";
import { defineComponent, computed } from "vue";
import { sizes } from "../../constants";
import { statuses } from "./constants";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import range from "../../utils/range";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
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
      type: [String, Array] as PropType<string | string[]>,
      default: undefined
    }
  };
};

export type ProgressStepsProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-progress-steps",
  props: createProps(),
  setup(props, context) {
    // 
    const steps = computed(() => range(0, props.steps));
    const activeStep = computed(() => Math.round(props.steps * ((props.percentage ?? 0) / 100)));

    // 计算 class 样式
    const classPrefix = useClassPrefix("progress", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-steps`]: true,
        [`${classPrefix.value}-with-info`]: context.slots.default,
        [`${classPrefix.value}-${props.size}`]: props.size,
        [`${classPrefix.value}-status-${props.status}`]: props.status
      };
    });
    classes.elBar = computed(() => `${classPrefix.value}-bar`);
    classes.elBarStep = computed(() => `${classPrefix.value}-bar-step`);
    classes.elInfo = computed(() => `${classPrefix.value}-info`);

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <div class={classes.elBar.value}>
            {
              steps.value.map((step, stepIndex) => {
                let stepClassName = "";
                let stepStylle = {
                  backgroundColor: props.trailColor
                };

                if (stepIndex <= (activeStep.value - 1)) {
                  stepClassName = `${classPrefix.value}-bar-step-active`;

                  if (is.string(props.strokeColor)) {
                    stepStylle.backgroundColor = props.strokeColor;
                  }
                  else if (is.array(props.strokeColor)) {
                    stepStylle.backgroundColor = props.strokeColor[stepIndex];
                  }
                }

                return (
                  <div class={[classes.elBarStep.value, stepClassName]} style={stepStylle}></div>
                );
              })
            }
          </div>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
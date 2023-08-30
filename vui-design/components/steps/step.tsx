import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes } from "vue";
import type { Key } from "../../types";
import type { Status, Step } from "./types";
import { defineComponent, inject, computed, onMounted, onUpdated, onBeforeUnmount } from "vue";
import { getSlotProp } from "../../utils/vue";
import { statuses } from "./constants";
import { StepsInjectionKey } from "./context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import useKey from "../../hooks/useKey";
import is from "../../utils/is";
import noop from "../../utils/noop";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 步骤唯一标识
    key: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 步骤索引
    index: {
      type: Number as PropType<number>,
      default: 0
    },
    // 自定义步骤图标类型/图标
    icon: {
      type: [String, Function] as PropType<string | RenderFunction>,
      default: undefined
    },
    // 步骤标题
    title: {
      type: [String, Number, Function] as PropType<string | number | RenderFunction>,
      default: undefined
    },
    // 步骤详细描述
    description: {
      type: [String, Number, Function] as PropType<string | number | RenderFunction>,
      default: undefined
    },
    // 步骤状态
    status: {
      type: String as PropType<Status>,
      validator: (status: Status) => statuses.includes(status),
      default: undefined
    },
    // 禁用点击
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type StepProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-step",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiSteps = inject(StepsInjectionKey, undefined);

    // 唯一标识
    const key = useKey();

    // 内部状态
    const status = computed(() => utils.getStepStatus(vuiSteps, props.index, props.status));
    const nextStepStatus = computed(() => utils.getNextStepStatus(vuiSteps, props.index));
    const active = computed(() => props.index === vuiSteps?.step);

    // 
    const getStep = () => {
      return {
        key: key.value,
        index: props.index,
        status: status.value
      } as Step;
    };

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      vuiSteps?.onChange(props.index);
    };

    // 组件挂载完成后执行
    onMounted(() => {
      vuiSteps?.addStep(getStep());
    });

    // 组件更新完成后执行
    onUpdated(() => {
      vuiSteps?.addStep(getStep());
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      vuiSteps?.removeStep(key.value);
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("steps-item", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${status.value}`]: !!status.value,
        [`${classPrefix.value}-next-${nextStepStatus.value}`]: !!nextStepStatus.value,
        [`${classPrefix.value}-active`]: active.value
      };
    });
    classes.elContent = computed(() => {
      return {
        [`${classPrefix.value}-content`]: true,
        [`${classPrefix.value}-content-clickable`]: vuiSteps?.clickable && !vuiSteps?.changeOnTitle && !props.disabled
      };
    });
    classes.elTitle = computed(() => {
      return {
        [`${classPrefix.value}-title`]: true,
        [`${classPrefix.value}-title-clickable`]: vuiSteps?.clickable && vuiSteps?.changeOnTitle && !props.disabled
      };
    });
    classes.elDot = computed(() => `${classPrefix.value}-dot`);
    classes.elIcon = computed(() => `${classPrefix.value}-icon`);
    classes.elCustomIcon = computed(() => `${classPrefix.value}-custom-icon`);
    classes.elDescription = computed(() => `${classPrefix.value}-description`);

    // 渲染
    return () => {
      // 图标
      let icon;

      if (vuiSteps?.type === "dot") {
        icon = vuiSteps?.dot ? vuiSteps.dot({
          index: props.index,
          status: status.value,
          className: classes.elDot.value
        }) : (
          <div class={classes.elDot.value}></div>
        );
      }
      else if (context.slots.icon || props.icon) {
        icon = (
          <div class={classes.elCustomIcon.value}>
            {
              context.slots.icon ? context.slots.icon() : (
                is.function(props.icon) ? props.icon() : (
                  <VuiIcon type={props.icon} />
                )
              )
            }
          </div>
        );
      }
      else {
        icon = (
          <div class={classes.elIcon.value}>
            {
              status.value === "finish" || status.value === "error" ? (
                <VuiIcon type={status.value === "finish" ? "checkmark" : "crossmark"} />
              ) : (
                props.index + 1
              )
            }
          </div>
        );
      }

      // 标题
      let title;

      if (context.slots.title || props.title) {
        title = (
          <div class={classes.elTitle.value} onClick={vuiSteps?.changeOnTitle ? handleClick : noop}>
            {getSlotProp(context.slots, props, "title")}
          </div>
        );
      }

      // 详细描述
      let description;

      if (context.slots.description || props.description) {
        description = (
          <div class={classes.elDescription.value}>
            {getSlotProp(context.slots, props, "description")}
          </div>
        );
      }

      // 
      return (
        <div class={classes.el.value}>
          <div
            class={classes.elContent.value}
            onClick={!vuiSteps?.changeOnTitle ? handleClick : noop}
          >
            {icon}
            {title}
            {description}
          </div>
        </div>
      );
    };
  }
});
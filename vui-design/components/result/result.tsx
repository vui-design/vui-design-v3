import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Status } from "./types";
import { defineComponent, computed } from "vue";
import VuiIcon from "../icon";
import VuiResultException from "./result-exception";
import getClassName from "../../utils/getClassName";
import { statuses } from "./constants";

const iconTypes = {
  info: "info-filled",
  warning: "warning-filled",
  success: "checkmark-circle-filled",
  error: "crossmark-circle-filled"
};

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 结果状态
    status: {
      type: String as PropType<Status>,
      validator: (status: Status) => statuses.includes(status),
      default: "info"
    },
    // 自定义图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标题
    title: {
      type: String as PropType<string>,
      default: undefined
    },
    // 描述信息
    description: {
      type: String as PropType<string>,
      default: undefined
    },
    // 附加内容，一般用于放置操作按钮
    extra: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type ResultProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-result",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "result"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${props.status}`]: props.status
      };
    });
    classes.elIcon = computed(() => `${className.value}-icon`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elDescription = computed(() => `${className.value}-description`);
    classes.elContent = computed(() => `${className.value}-content`);
    classes.elExtra = computed(() => `${className.value}-extra`);

    // 渲染
    return () => {
      let children = [];

      // 图标
      let icon;

      if (context.slots.icon) {
        icon = context.slots.icon();
      }
      else if (["info", "warning", "success", "error"].indexOf(props.status) > -1) {
        let iconType = props.icon;

        if (!iconType) {
          iconType = iconTypes[props.status];
        }

        icon = (
          <VuiIcon type={iconType} />
        );
      }
      else {
        icon = (
          <VuiResultException status={props.status} width={300} />
        );
      }

      children.push(
        <div class={classes.elIcon.value}>
          {icon}
        </div>
      );

      // 标题
      children.push(
        <div class={classes.elTitle.value}>
          {context.slots.title?.() ?? props.title}
        </div>
      );

      // 描述信息
      if (context.slots.description || props.description) {
        children.push(
          <div class={classes.elDescription.value}>
            {context.slots.description?.() ?? props.description}
          </div>
        );
      }

      // 内容
      if (context.slots.default) {
        children.push(
          <div class={classes.elContent.value}>
            {context.slots.default?.()}
          </div>
        );
      }

      // 额外内容
      if (context.slots.extra || props.extra) {
        children.push(
          <div class={classes.elExtra.value}>
            {context.slots.extra?.() ?? props.extra}
          </div>
        );
      }

      // 
      return (
        <div class={classes.el.value}>
          {children}
        </div>
      );
    };
  }
});
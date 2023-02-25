import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Formatter } from "./types";
import { defineComponent, computed } from "vue";
import VuiNumber from "./number";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标题
    title: {
      type: String as PropType<string>,
      default: undefined
    },
    // 附加内容，位于标题右侧
    extra: {
      type: String as PropType<string>,
      default: undefined
    },
    // 数值
    value: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 数值精度
    precision: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 占位文本，当 value 为 undefined 时显示
    placeholder: {
      type: String as PropType<string>,
      default: undefined
    },
    // 设置小数点
    decimalSeparator: {
      type: String as PropType<string>,
      default: "."
    },
    // 设置千分位标识符
    groupSeparator: {
      type: String as PropType<string>,
      default: ","
    },
    // 自定义数值展示
    formatter: {
      type: Function as PropType<Formatter>,
      default: undefined
    },
    // 数值前缀，可通过此属性设置前置图标
    prefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 数值后缀，可通过此属性设置后置单位
    suffix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 自定义头部样式
    headerStyle: {
      type: [String, Object] as PropType<string | CSSProperties>,
      default: undefined
    },
    // 自定义主体样式
    bodyStyle: {
      type: [String, Object] as PropType<string | CSSProperties>,
      default: undefined
    },
    // 自定义底部样式
    footerStyle: {
      type: [String, Object] as PropType<string | CSSProperties>,
      default: undefined
    },
    // 自定义底部样式
    valueStyle: {
      type: [String, Object] as PropType<string | CSSProperties>,
      default: undefined
    }
  };
};

export type StatisticProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-statistic",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "statistic"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);
    classes.elHeader = computed(() => `${className.value}-header`);
    classes.elBody = computed(() => `${className.value}-body`);
    classes.elFooter = computed(() => `${className.value}-footer`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elExtra = computed(() => `${className.value}-extra`);

    // 渲染
    return () => {
      const title = context.slots.title?.() ?? props.title;
      const extra = context.slots.extra?.() ?? props.extra;
      const formatter = context.slots.formatter ?? props.formatter;
      const prefix = context.slots.prefix ?? props.prefix;
      const suffix = context.slots.suffix ?? props.suffix;
      const footer = context.slots.footer?.();

      return (
        <div class={classes.el.value}>
          {
            !title && !extra ? null : (
              <div class={classes.elHeader.value} style={props.headerStyle}>
                {
                  !title ? null : (
                    <div class={classes.elTitle.value}>{title}</div>
                  )
                }
                {
                  !extra ? null : (
                    <div class={classes.elExtra.value}>{extra}</div>
                  )
                }
              </div>
            )
          }
          <div class={classes.elBody.value} style={props.bodyStyle}>
            <VuiNumber
              classNamePrefix={className.value}
              value={props.value}
              precision={props.precision}
              placeholder={props.placeholder}
              decimalSeparator={props.decimalSeparator}
              groupSeparator={props.groupSeparator}
              formatter={formatter}
              prefix={prefix}
              suffix={suffix}
              style={props.valueStyle}
            />
          </div>
          {
            !footer ? null : (
              <div class={classes.elFooter.value} style={props.footerStyle}>{footer}</div>
            )
          }
        </div>
      );
    };
  }
});
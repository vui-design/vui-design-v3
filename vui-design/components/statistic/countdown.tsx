import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Formatter } from "./types";
import { defineComponent, ref, computed, onMounted, onUpdated, onBeforeUnmount } from "vue";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import utils from "./utils";

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
    // 到期时间，可以是日期字符串、时间戳，或日期对象
    value: {
      type: [String, Number, Date] as PropType<string | number | Date>,
      default: undefined
    },
    // 自定义显示格式，为函数类型时接收当前时间戳和到期时间戳作为参数
    formatter: {
      type: [String, Function] as PropType<string | Formatter>,
      default: undefined
    },
    // 
    milliseconds: {
      type: Number as PropType<number>,
      default: 1000 / 30
    },
    // 前缀，可通过此属性设置前置图标
    prefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 后缀，可通过此属性设置后置单位
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
    }
  };
};

export type CountdownProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-countdown",
  props: createProps(),
  emits: ["finish"],
  setup(props, context) {
    // 状态
    const defaultValue = ref();
    const token = ref();

    // 开始倒计时
    const start = () => {
      if (props.milliseconds <= 0) {
        return;
      }

      window.clearInterval(token.value);
      token.value = window.setInterval(() => {
        const value = utils.parser(props.value);
        const now = utils.now();

        if (now > value) {
          stop();
        }

        let newValue;

        if (is.function(props.formatter)) {
          newValue = props.formatter(value, now);
        }
        else {
          newValue = utils.formatter(value, now, props.formatter);
        }

        defaultValue.value = newValue;
      }, props.milliseconds);
    };

    // 停止倒计时
    const stop = () => {
      if (!token.value) {
        return;
      }

      window.clearInterval(token.value);
      token.value = undefined;

      const value = utils.parser(props.value);
      const now = utils.now();

      if (value < now) {
        context.emit("finish");
      }
    };

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "countdown"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);
    classes.elHeader = computed(() => `${className.value}-header`);
    classes.elBody = computed(() => `${className.value}-body`);
    classes.elFooter = computed(() => `${className.value}-footer`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elExtra = computed(() => `${className.value}-extra`);
    classes.elValue = computed(() => `${className.value}-value`);
    classes.elValuePrefix = computed(() => `${className.value}-value-prefix`);
    classes.elValueSuffix = computed(() => `${className.value}-value*suffix`);

    // 组件挂载完成后执行
    onMounted(() => start());

    // 组件更新后执行
    onUpdated(() => start());

    // 组件卸载之前执行
    onBeforeUnmount(() => stop());

    // 渲染
    return () => {
      const title = context.slots.title?.() ?? props.title;
      const extra = context.slots.extra?.() ?? props.extra;
      const prefix = context.slots.prefix?.() ?? props.prefix;
      const suffix = context.slots.suffix?.() ?? props.suffix;
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
            <div class={classes.elValue.value}>
              {
                !prefix ? null : (
                  <div class={classes.elValuePrefix.value}>{prefix}</div>
                )
              }
              {defaultValue.value}
              {
                !suffix ? null : (
                  <div class={classes.elValueSuffix.value}>{suffix}</div>
                )
              }
            </div>
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
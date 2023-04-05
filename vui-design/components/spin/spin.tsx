import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Indicator } from "./types";
import { Transition, defineComponent, ref, computed, watch, onBeforeUnmount } from "vue";
import { sizes } from "../../constants";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 全屏加载
    fullscreen: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否显示
    visible: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否为加载中状态
    spinning: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 延迟显示加载效果的时间，单位毫秒（防止闪烁）
    delay: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 自定义加载指示符
    indicator: {
      type: Function as PropType<Indicator>,
      default: undefined
    },
    // 消息文案
    message: {
      type: String as PropType<string>,
      default: undefined
    },
    // 打开动画
    animation: {
      type: String as PropType<string>,
      default: "vui-spin-fade"
    }
  };
};

export type SpinProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-spin",
  props: createProps(),
  setup(props, context) {
    // 显示状态
    const visible = computed(() => props.visible);

    // 是否延迟显示加载效果
    const shouldBeDelayed = computed(() => is.number(props.delay) && props.delay > 0);
    const delayer = ref<number>();

    // 加载状态
    const spinning = ref(props.spinning && !shouldBeDelayed.value);
    const setSpinning = (value: boolean) => {
      if (spinning.value === value) {
        return;
      }

      spinning.value = value;
    };

    // 监听 spinning 属性变化
    watch(() => props.spinning, newValue => {
      if (delayer.value) {
        clearTimeout(delayer.value);
        delayer.value = undefined;
      }

      if (shouldBeDelayed.value) {
        delayer.value = setTimeout(() => setSpinning(newValue), props.delay);
      }
      else {
        setSpinning(newValue);
      }
    }, {
      immediate: true
    });

    // 打开前事件回调
    const handleBeforeOpen = () => {

    };

    // 打开事件回调
    const handleOpen = () => {
      context.emit("open");
    };

    // 关闭前事件回调
    const handleBeforeClose = () => {

    };

    // 关闭事件回调
    const handleClose = () => {
      context.emit("close");
    };

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      if (delayer.value) {
        clearTimeout(delayer.value);
        delayer.value = undefined;
      }
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("spin", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-fullscreen`]: props.fullscreen,
        [`${classPrefix.value}-with-content`]: context.slots.default,
        [`${classPrefix.value}-${props.size}`]: props.size,
        [`${classPrefix.value}-spinning`]: spinning.value
      };
    });
    classes.elContent = computed(() => `${classPrefix.value}-content`);
    classes.elSpinner = computed(() => `${classPrefix.value}-spinner`);
    classes.elDot = computed(() => `${classPrefix.value}-dot`);
    classes.elDotItem = computed(() => `${classPrefix.value}-dot-item`);
    classes.elMessage = computed(() => `${classPrefix.value}-message`);

    // 渲染
    return () => {
      let children = [];

      // 
      if (context.slots.default) {
        children.push(
          <div class={classes.elContent.value}>
            {context.slots.default?.()}
          </div>
        );
      }

      // 
      if (spinning.value) {
        let spinner = [];

        if (context.slots.indicator) {
          spinner.push(context.slots.indicator());
        }
        else if (is.function(props.indicator)) {
          spinner.push(props.indicator());
        }
        else {
          spinner.push(
            <div class={classes.elDot.value}>
              <div class={classes.elDotItem.value}></div>
              <div class={classes.elDotItem.value}></div>
              <div class={classes.elDotItem.value}></div>
            </div>
          );
        }

        if (context.slots.message || props.message) {
          spinner.push(
            <div class={classes.elMessage.value}>
              {context.slots.message?.() ?? props.message}
            </div>
          );
        }

        children.push(
          <div class={classes.elSpinner.value}>
            {spinner}
          </div>
        );
      }

      // 
      return (
        <Transition appear name={props.animation} onBeforeEnter={handleBeforeOpen} onAfterEnter={handleOpen} onBeforeLeave={handleBeforeClose} onAfterLeave={handleClose}>
          {
            props.fullscreen && !visible.value ? null : (
              <div class={classes.el.value}>
                {children}
              </div>
            )
          }
        </Transition>
      );
    };
  }
});
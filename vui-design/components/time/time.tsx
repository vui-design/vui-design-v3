import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Type } from "./types";
import { defineComponent, ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { types } from "./constants";
import { useI18n } from "../../locale";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import padStart from "../../utils/padStart";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 显示类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "relative"
    },
    // 需要对比的时间，可以是日期字符串、时间戳或 Date 对象
    value: {
      type: [String, Number, Date] as PropType<string | number | Date>,
      default: undefined
    },
    // 自动更新间隔，单位：秒
    interval: {
      type: Number as PropType<number>,
      default: 60
    }
  };
};

export type TimeProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-time",
  props: createProps(),
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // 状态
    const defaultValue = ref();
    const token = ref();

    // 
    const change = () => {
      let date;

      if (is.string(props.value)) {
        date = new Date(props.value.replace(/-/g, "/"));
      }
      else if (is.number(props.value)) {
        date = new Date(String(props.value).length > 10 ? props.value : props.value * 1000);
      }
      else if (is.date(props.value)) {
        date = props.value;
      }

      if (is.date(date)) {
        let newValue;

        if (props.type === "relative") {
          const now = new Date();
          let direction;
          let diff = now.getTime() - date.getTime();

          if (diff >= 0) {
            direction = translate("time.before");
          }
          else {
            direction = translate("time.after");
            diff = -diff;
          }

          const years = Math.floor(diff / (86400000 * 365));
          const months = Math.floor(diff / (86400000 * 30));
          const days = Math.floor(diff / 86400000);
          const hours = Math.floor(diff / 3600000);
          const minutes = Math.floor(diff / 60000);

          if (years > 0) {
            newValue = years + (years === 1 ? translate("time.year") : translate("time.years")) + direction;
          }
          else if (months > 0) {
            newValue = months + (months === 1 ? translate("time.month") : translate("time.months")) + direction;
          }
          else if (days > 0) {
            newValue = days + (days === 1 ? translate("time.day") : translate("time.days")) + direction;
          }
          else if (hours > 0) {
            newValue = hours + (hours === 1 ? translate("time.hour") : translate("time.hours")) + direction;
          }
          else if (minutes > 0) {
            newValue = minutes + (minutes === 1 ? translate("time.minute") : translate("time.minutes")) + direction;
          }
          else {
            newValue = translate("time.just");
          }
        }
        else {
          const year = date.getFullYear();
          const month = padStart(date.getMonth() + 1, 2, "0");
          const day = padStart(date.getDate(), 2, "0");
          const hour = padStart(date.getHours(), 2, "0");
          const minute = padStart(date.getMinutes(), 2, "0");
          const second = padStart(date.getSeconds(), 2, "0");

          if (props.type === "date") {
            newValue = year + "-" + month + "-" + day;
          }
          else if (props.type === "datetime") {
            newValue = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
          }
        }

        defaultValue.value = newValue;
      }
      else {
        defaultValue.value = "";
      }
    };

    // 开启定时器
    const start = () => {
      change();

      if (props.type !== "relative" || props.interval <= 0) {
        return stop();
      }

      window.clearInterval(token.value);
      token.value = window.setInterval(() => change(), props.interval * 1000);
    };

    // 关闭定时器
    const stop = () => {
      if (!token.value) {
        return;
      }

      window.clearInterval(token.value);
      token.value = undefined;
    };

    // 监听 type、value 属性变化
    watch([() => props.type, () => props.value], () => start());

    // 组件挂载完成后执行
    onMounted(() => start());

    // 组件卸载之前执行
    onBeforeUnmount(() => stop());

    // 计算 class 样式
    const classPrefix = useClassPrefix("time", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 渲染
    return () => {
      return (
        <span class={classes.el.value}>{defaultValue.value}</span>
      );
    };
  }
});
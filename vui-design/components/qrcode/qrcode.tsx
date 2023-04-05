import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Status, CorrectLevel, HTMLALinkElement } from "./types";
import { Transition, defineComponent, toRefs, ref, computed, watchEffect } from "vue";
import { useI18n } from "../../locale";
import { statuses, correctLevels } from "./constants";
import QRCode from "arale-qrcode";
import VuiSpin from "../spin";
import VuiLink from "../link";
import useClassPrefix from "../../hooks/useClassPrefix";
import getStyle from "../../utils/getStyle";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 要编码的字符串
    value: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 二维码的宽高尺寸
    size: {
      type: Number as PropType<number>,
      default: 160
    },
    // 二维码中图片的地址（目前只支持图片地址）
    image: {
      type: String as PropType<string>,
      default: undefined
    },
    // 二维码中图片的尺寸
    imageSize: {
      type: Number as PropType<number>,
      default: 40
    },
    // 是否含有边框
    bordered: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 二维码状态
    status: {
      type: String as PropType<Status>,
      validator: (status: Status) => statuses.includes(status),
      default: "active"
    },
    // 纠错等级
    correctLevel: {
      type: Number as PropType<CorrectLevel>,
      validator: (correctLevel: CorrectLevel) => correctLevels.includes(correctLevel),
      default: 3
    },
    // 二维码背景色
    background: {
      type: String as PropType<string>,
      default: "#ffffff"
    },
    // 二维码前景色
    foreground: {
      type: String as PropType<string>,
      default: "#000000"
    },
    // 二维码三个角的颜色
    pdground: {
      type: String as PropType<string>,
      default: "#000000"
    },
    // 遮罩动画
    animation: {
      type: String as PropType<string>,
      default: "vui-qrcode-mask-fade"
    }
  };
};

export type QrcodeProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-qrcode",
  props: createProps(),
  emits: ["refresh"],
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // DOM 引用
    const containerRef = ref<HTMLDivElement>();
    const canvasRef = ref<HTMLDivElement>();

    // 解构属性
    const { value, size, image, imageSize, correctLevel, background, foreground, pdground } = toRefs(props);

    // 监听属性变化并实时更新二维码
    watchEffect(onCleanup => {
      if (!containerRef.value || !canvasRef.value) {
        return;
      }

      const borderWidth = parseInt(getStyle(containerRef.value, "border-width"));
      const padding = parseInt(getStyle(containerRef.value, "padding"));
      const qrcode = new QRCode({
        text: value.value,
        render: "canvas",
        size: size.value - (borderWidth + padding) * 2,
        correctLevel: correctLevel.value,
        background: background.value,
        foreground: foreground.value,
        pdground: pdground.value,
        image: image.value,
        imageSize: imageSize.value
      });

      canvasRef.value.innerHTML = "";
      canvasRef.value.appendChild(qrcode);

      onCleanup(() => {
        if (canvasRef.value) {
          canvasRef.value.innerHTML = "";
        }
      });
    });

    // 下载
    const download = (filename: string) => {
      if (!canvasRef.value) {
        return;
      }

      const canvas = canvasRef.value.querySelector("canvas");

      if (!canvas) {
        return;
      }

      const link: HTMLALinkElement = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      const url = canvas.toDataURL();
      const event = document.createEvent("MouseEvents");

      link.href = url;
      link.download = filename ?? "QRCode.png";

      event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      link.dispatchEvent(event);
    };

    context.expose({
      download
    });

    // onRefresh 事件回调
    const handleRefresh = () => {
      context.emit("refresh");
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("qrcode", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-bordered`]: props.bordered,
        [`${classPrefix.value}-${props.status}`]: props.status
      };
    });
    classes.elMask = computed(() => `${classPrefix.value}-mask`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      return {
        width: `${size.value}px`,
        height: `${size.value}px`,
        backgroundColor: props.background
      };
    });

    // 渲染
    return () => {
      let mask;

      if (props.status === "loading") {
        mask = (
          <div class={classes.elMask.value}>
            <VuiSpin />
          </div>
        );
      }
      else if (props.status === "expired") {
        mask = (
          <div class={classes.elMask.value}>
            <p>{translate("qrcode.expired")}</p>
            <VuiLink type="primary" icon="refresh" onClick={handleRefresh}>{translate("qrcode.refresh")}</VuiLink>
          </div>
        );
      }

      return (
        <div ref={containerRef} class={classes.el.value} style={styles.el.value}>
          <div ref={canvasRef}></div>
          <Transition name={props.animation}>{mask}</Transition>
        </div>
      );
    };
  }
});
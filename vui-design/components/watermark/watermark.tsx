import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent, ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import setStyles from "../../utils/setStyles";
import utils from "./utils";

const size = 2;
const rowGap = 4;

export interface WatermarkFontType {
  color?: string;
  fontSize?: number | string;
  fontWeight?: "normal" | "light" | "weight" | number;
  fontStyle?: "none" | "normal" | "italic" | "oblique";
  fontFamily?: string;
};

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 水印的宽度
    width: {
      type: Number as PropType<number>,
      default: 120
    },
    // 水印的高度
    height: {
      type: Number as PropType<number>,
      default: 64
    },
    // 水印文字内容
    content: {
      type: [String, Array] as PropType<string | string[]>,
      default: undefined
    },
    // 水印文字样式
    font: {
      type: Object as PropType<WatermarkFontType>,
      default: undefined
    },
    // 水印图片地址，优先级高于 content
    image: {
      type: String as PropType<string>,
      default: undefined
    },
    // 水印绘制时，旋转的角度
    rotate: {
      type: Number as PropType<number>,
      default: -20
    },
    // 水印之间的间距
    gap: {
      type: Array as unknown as PropType<[number, number]>,
      default: undefined
    },
    // 水印距离容器左上角的偏移量，默认为 gap/2
    offset: {
      type: Array as unknown as PropType<[number, number]>,
      default: undefined
    },
    // 水印元素的 z-index 层级
    zIndex: {
      type: Number as PropType<number>,
      default: 10
    }
  };
};

export type WatermarkProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-watermark",
  props: createProps(),
  setup(props, context) {
    // DOM 引用
    const containerRef = ref<HTMLDivElement>();
    const watermarkRef = ref<HTMLDivElement>();

    // 文字样式
    const color = computed(() => props.font?.color ?? "rgba(0, 0, 0, 0.15)");
    const fontSize = computed(() => props.font?.fontSize ?? 16);
    const fontWeight = computed(() => props.font?.fontWeight ?? "normal");
    const fontStyle = computed(() => props.font?.fontStyle ?? "normal");
    const fontFamily = computed(() => props.font?.fontFamily ?? "sans-serif");

    // 位置信息
    const gapX = computed(() => props.gap?.[0] ?? 100);
    const gapY = computed(() => props.gap?.[1] ?? 100);
    const gapXCenter = computed(() => gapX.value / 2);
    const gapYCenter = computed(() => gapY.value / 2);
    const offsetLeft = computed(() => props.offset?.[0] ?? gapXCenter.value);
    const offsetTop = computed(() => props.offset?.[1] ?? gapYCenter.value);

    // 水印样式
    const style = computed(() => {
      const style: CSSProperties = {
        zIndex: props.zIndex ?? 10,
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundRepeat: "repeat",
        pointerEvents: "none"
      };
      let left = offsetLeft.value - gapXCenter.value;
      let top = offsetTop.value - gapYCenter.value;

      if (left > 0) {
        style.left = `${left}px`;
        style.width = `calc(100% - ${left}px)`;

        left = 0;
      }
      if (top > 0) {
        style.top = `${top}px`;
        style.height = `calc(100% - ${top}px)`;

        top = 0;
      }

      style.backgroundPosition = `${left}px ${top}px`;

      return style;
    });

    // 计算水印尺寸
    const getSize = (
      ctx: CanvasRenderingContext2D
    ): [number, number] => {
      const content = props.content;
      const image = props.image;
      const width = props.width;
      const height = props.height;

      let defaultWidth = 120;
      let defaultHeight = 64;

      if (!image && ctx.measureText) {
        ctx.font = `${Number(fontSize.value)}px ${fontFamily.value}`;

        const contents = is.array(content) ? content : [content];
        const widths = contents.map(item => ctx.measureText(item as string).width);

        defaultWidth = Math.ceil(Math.max(...widths));
        defaultHeight = Number(fontSize.value) * contents.length + (contents.length - 1) * rowGap;
      }

      return [width ?? defaultWidth, height ?? defaultHeight];
    };

    // 旋转
    const rotating = (
      ctx: CanvasRenderingContext2D,
      rotateX: number,
      rotateY: number,
      rotate: number
    ): void => {
      ctx.translate(rotateX, rotateY);
      ctx.rotate((Math.PI / 180) * Number(rotate));
      ctx.translate(-rotateX, -rotateY);
    };

    // 绘制水印文字
    const drawTexts = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number
    ) => {
      const ratio = utils.getDevicePixelRatio();
      const content = props.content;
      const mergedFontSize = Number(fontSize.value) * ratio;

      ctx.font = `${fontStyle.value} normal ${fontWeight.value} ${mergedFontSize}px/${height}px ${fontFamily.value}`;
      ctx.fillStyle = color.value;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.translate(width / 2, 0);

      const contents = is.array(content) ? content : [content];

      contents?.forEach((item, index) => {
        ctx.fillText(item ?? "", x, y + index * (mergedFontSize + rowGap * ratio));
      });
    };

    // 绘制水印图片
    const drawImage = (
      ctx: CanvasRenderingContext2D,
      img: CanvasImageSource,
      x: number,
      y: number,
      width: number,
      height: number
    ): void => {
      ctx.drawImage(img, x, y, width, height);
    };

    // 创建水印
    const create = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const image = props.image;
      const rotate = props.rotate ?? -20;

      if (ctx) {
        if (!watermarkRef.value) {
          watermarkRef.value = document.createElement("div");
        }

        const ratio = utils.getDevicePixelRatio();
        const [width, height] = getSize(ctx);
        const canvasWidth = (gapX.value + width) * ratio;
        const canvasHeight = (gapY.value + height) * ratio;

        canvas.setAttribute("width", `${canvasWidth * size}px`);
        canvas.setAttribute("height", `${canvasHeight * size}px`);

        const drawX = (gapX.value * ratio) / 2;
        const drawY = (gapY.value * ratio) / 2;
        const drawWidth = width * ratio;
        const drawHeight = height * ratio;
        const rotateX = (drawWidth + gapX.value * ratio) / 2;
        const rotateY = (drawHeight + gapY.value * ratio) / 2;

        const alternateDrawX = drawX + canvasWidth;
        const alternateDrawY = drawY + canvasHeight;
        const alternateRotateX = rotateX + canvasWidth;
        const alternateRotateY = rotateY + canvasHeight;

        ctx.save();

        rotating(ctx, rotateX, rotateY, rotate);

        if (image) {
          const img = new Image();

          img.onload = () => {
            drawImage(ctx, img, drawX, drawY, drawWidth, drawHeight);

            ctx.restore();

            rotating(ctx, alternateRotateX, alternateRotateY, rotate);
            drawImage(ctx, img, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
            append(canvas.toDataURL(), width);
          };
          img.crossOrigin = "anonymous";
          img.referrerPolicy = "no-referrer";
          img.src = image;
        }
        else {
          drawTexts(ctx, drawX, drawY, drawWidth, drawHeight);

          ctx.restore();

          rotating(ctx, alternateRotateX, alternateRotateY, rotate);
          drawTexts(ctx, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
          append(canvas.toDataURL(), width);
        }
      }
    };

    // 添加水印
    const append = (base64Url: string, markWidth: number) => {
      if (containerRef.value && watermarkRef.value) {
        setStyles(watermarkRef.value, {
          ...style.value,
          backgroundImage: `url("${base64Url}")`,
          backgroundSize: `${(gapX.value + markWidth) * size}px`,
        });

        containerRef.value.append(watermarkRef.value);

        const observer = new MutationObserver((mutations: MutationRecord[]) => {
          mutations.forEach(mutation => {
            if (utils.maybeRefresh(mutation, watermarkRef.value as HTMLDivElement)) {
              destroy();
              create();
            }
          });
        });

        observer.observe(containerRef.value, {
          childList: true,
          attributes: true,
          characterData: true,
          subtree: true,
          attributeOldValue: true,
          characterDataOldValue: true
        });
      }
    };

    // 销毁水印
    const destroy = () => {
      if (watermarkRef.value) {
        watermarkRef.value.remove();
        watermarkRef.value = undefined;
      }
    };

    // 组件属性发生变更时，重新生成水印
    watch(() => props, () => {
      create();
    }, {
      deep: true,
      flush: "post"
    });

    // 组件挂载完成后创建水印，并在卸载前销毁
    onMounted(() => create());
    onBeforeUnmount(() => destroy());

    // 计算 class 样式
    const classPrefix = useClassPrefix("watermark", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 渲染
    return () => {
      return (
        <div ref={containerRef} class={classes.el.value}>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
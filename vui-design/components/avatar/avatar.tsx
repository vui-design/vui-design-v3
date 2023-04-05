import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Breakpoint, ScreenSizes } from "../../utils/responsive-observer";
import type { Size } from "../../types";
import type { Shape, CrossOrigin } from "./types";
import { defineComponent, inject, ref, computed, nextTick, onMounted, onUpdated } from "vue";
import { breakpoints } from "../../utils/responsive-observer";
import { sizes } from "../../constants";
import { shapes, crossOrigins } from "./constants";
import { AvatarGroupInjectionKey } from "./context";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import useResponsive from "../../hooks/useResponsive";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 头像形状
    shape: {
      type: String as PropType<Shape>,
      validator: (shape: Shape) => shapes.includes(shape),
      default: undefined
    },
    // 头像尺寸
    size: {
      type: [String, Number, Object] as PropType<Size | number | ScreenSizes>,
      default: undefined
    },
    // 图片类头像的资源地址
    src: {
      type: String as PropType<string>,
      default: undefined
    },
    // 设置图片类头像响应式资源地址
    srcset: {
      type: String as PropType<string>,
      default: undefined
    },
    // 图片类头像无法显示时的替代文本
    alt: {
      type: String as PropType<string>,
      default: undefined
    },
    // CORS 属性设置
    crossOrigin: {
      type: String as PropType<CrossOrigin>,
      validator: (crossOrigin: CrossOrigin) => crossOrigins.includes(crossOrigin),
      default: undefined
    },
    // 头像的图标类型/图标
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 字符类型距离左右两侧边界单位像素
    gap: {
      type: Number as PropType<number>,
      default: 4
    }
  };
};

export type AvatarProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-avatar",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiAvatarGroup = inject(AvatarGroupInjectionKey, undefined);

    // DOM 引用
    const avatarRef = ref<HTMLDivElement>();
    const avatarTextRef = ref<HTMLDivElement>();

    // 订阅响应
    const screens = useResponsive();

    // 基础属性
    const type = computed(() => props.src ? "image" : ((context.slots.icon || props.icon) ? "icon" : "text"));
    const shape = computed(() => vuiAvatarGroup?.shape ?? props.shape ?? "circle");
    const size = computed(() => {
      let value = vuiAvatarGroup?.size ?? props.size ?? "medium";

      if (is.string(value) || is.number(value)) {
        return value;
      }
      else if (is.object(value)) {
        const breakpoint: Breakpoint = breakpoints.find(breakpoint => screens.value[breakpoint])!;

        return value[breakpoint];
      }
    });

    // 是否为预设尺寸
    const isPresetSize = computed(() => sizes.includes(size.value as string));

    // 文本类头像的内容缩放比例
    const scale = ref(1);
    const response = () => {
      if (!avatarRef.value || !avatarTextRef.value) {
        return;
      }

      const boundary = avatarRef.value.getBoundingClientRect().width;
      const width = avatarTextRef.value.offsetWidth;
      const isOverflowed = (boundary - (props.gap * 2)) < width;

      scale.value = isOverflowed ? ((boundary - (props.gap * 2)) / width) : 1;
    };

    // 图片类头像加载失败的事件回调
    const handleError = (e: Event) => {
      context.emit("error", e);
    };

    // 组件挂载完成后执行
    onMounted(() => nextTick(() => response()));

    // 组件更新后执行
    onUpdated(() => nextTick(() => response()));

    // 计算 class 样式
    const classPrefix = useClassPrefix("avatar", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-with-${type.value}`]: type.value,
        [`${classPrefix.value}-${shape.value}`]: shape.value,
        [`${classPrefix.value}-${size.value}`]: isPresetSize.value
      };
    });
    classes.elChildren = computed(() => `${classPrefix.value}-${type.value}`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (!isPresetSize.value && size.value) {
        style.width = style.height = style.lineHeight = `${size.value}px`;
        style.fontSize = `${(size.value as number) / 2}px`;
      }

      return style;
    });
    styles.elChildren = computed(() => {
      return {
        transform: `scale(${scale.value}) translate(-50%, -50%)`
      };
    });

    // 渲染
    return () => {
      let children;

      if (type.value === "image") {
        children = (
          <div class={classes.elChildren.value}>
            <img src={props.src} srcset={props.srcset} alt={props.alt} crossorigin={props.crossOrigin} onError={handleError} />
          </div>
        );
      }
      else if (type.value === "icon") {
        children = (
          <div class={classes.elChildren.value}>
            {
              context.slots.icon?.() ?? (
                <VuiIcon type={props.icon} />
              )
            }
          </div>
        );
      }
      else if (type.value === "text") {
        children = (
          <div ref={avatarTextRef} class={classes.elChildren.value} style={styles.elChildren.value}>{context.slots.default?.()}</div>
        );
      }

      return (
        <div ref={avatarRef} class={classes.el.value} style={styles.el.value}>{children}</div>
      );
    };
  }
});
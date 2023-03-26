import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Breakpoint, Screens } from "../../utils/responsive-observer";
import type { Justify, Align, Gutter } from "./types";
import { defineComponent, provide, ref, reactive, computed, onMounted, onBeforeUnmount } from "vue";
import useSupportRowGap from "../../hooks/useSupportRowGap";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import responsiveObserver, { breakpoints } from "../../utils/responsive-observer";
import { justifys, aligns } from "./constants";
import { RowInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // Flex 布局下的水平排列方式
    justify: {
      type: String as PropType<Justify>,
      validator: (justify: Justify) => justifys.includes(justify),
      default: "start"
    },
    // Flex 布局下的垂直对齐方式
    align: {
      type: String as PropType<Align>,
      validator: (align: Align) => aligns.includes(align),
      default: "top"
    },
    // 栅格间隔
    gutter: {
      type: [Number, Object, Array] as PropType<number | Gutter | [number | Gutter, number | Gutter]>,
      default: 0
    },
    // 是否自动换行
    wrap: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type RowProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-row",
  props: createProps(),
  setup(props, context) {
    // 是否支持 rowGap
    const isSupportRowGap = useSupportRowGap();

    // 
    const screens = ref<Screens>({
      xxl: true,
      xl: true,
      lg: true,
      md: true,
      sm: true,
      xs: true
    });

    // 间隔
    const gutter = computed(() => {
      const { gutter = 0 } = props;
      const results: [number, number] = [0, 0];
      const normalizedGutter = is.array(gutter) ? gutter : [gutter, 0];

      normalizedGutter.forEach((g, index) => {
        if (is.object(g)) {
          for (let i = 0; i < breakpoints.length; i++) {
            const breakpoint: Breakpoint = breakpoints[i];

            if (screens.value[breakpoint] && g[breakpoint] !== undefined) {
              results[index] = g[breakpoint] as number;
              break;
            }
          }
        }
        else {
          results[index] = g || 0;
        }
      });

      return results;
    });

    // 向后代组件注入当前组件
    provide(RowInjectionKey, reactive({
      gutter,
      wrap: computed(() => props.wrap),
      isSupportRowGap
    }));

    // 订阅响应
    let token: number;

    onMounted(() => {
      token = responsiveObserver.subscribe((value: Screens) => {
        const currentGutter = props.gutter || 0;

        if ((!is.array(currentGutter) && is.object(currentGutter)) || (is.array(currentGutter) && (is.object(currentGutter[0]) || is.object(currentGutter[1])))) {
          screens.value = value;
        }
      });
    });

    onBeforeUnmount(() => {
      responsiveObserver.unsubscribe(token);
    });

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "row"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-justify-${props.justify}`]: props.justify,
        [`${className.value}-align-${props.align}`]: props.align,
        [`${className.value}-nowrap`]: props.wrap === false
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      const g = gutter.value;
      const horizontalGutter = g[0] > 0 ? `${g[0] / -2}px` : undefined;
      const verticalGutter = g[1] > 0 ? `${g[1] / -2}px` : undefined;
      let style: CSSProperties = {};

      if (horizontalGutter) {
        style.marginLeft = horizontalGutter;
        style.marginRight = horizontalGutter;
      }

      if (isSupportRowGap.value) {
        style.rowGap = `${g[1]}px`;
      }
      else if (verticalGutter) {
        style.marginTop = verticalGutter;
        style.marginBottom = verticalGutter;
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value} style={styles.el.value}>{context.slots.default?.()}</div>
      );
    };
  }
});
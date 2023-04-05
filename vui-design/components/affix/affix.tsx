import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { GetScrollContainer } from "../../types";
import type { AffixState } from "./types";
import { defineComponent, ref, computed, watch, watchEffect, onMounted } from "vue";
import VuiResizeObserver from "../resize-observer";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import throttleByRaf from "../../utils/throttleByRaf";
import addEventListener from "../../utils/addEventListener";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 距离窗口顶部达到指定偏移量后触发
    offsetTop: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 距离窗口底部达到指定偏移量后触发
    offsetBottom: {
      type: Number as PropType<number>,
      default: undefined
    },
    // Affix 所属滚动容器，值为一个返回对应 DOM 元素的函数
    getScrollContainer: {
      type: Function as PropType<GetScrollContainer>,
      default: () => typeof window === "undefined" ? undefined : window
    },
    // 滚动容器的外层滚动元素，默认是 window
    // Affix 将会监听该元素的滚动事件，并实时更新位置
    // 主要是为了解决 getScrollContainer 属性返回非 window 元素时，如果外层元素滚动，可能会导致固钉跑出其所属滚动容器的问题
    getUpperScrollContainer: {
      type: Function as PropType<GetScrollContainer>,
      default: () => typeof window === "undefined" ? undefined : window
    }
  };
};

export type AffixProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-affix",
  props: createProps(),
  emits: ["change"],
  setup(props, context) {
    // DOM 引用
    const scrollContainerRef = ref<Window | HTMLElement>();
    const containerRef = ref<HTMLDivElement>();

    // 状态
    const containerStyle = ref();
    const affixStyle = ref();
    const affixed = ref(false);

    // 
    const offsetTop = computed(() => is.undefined(props.offsetTop) && is.undefined(props.offsetBottom) ? 0 : props.offsetTop);
    const offsetBottom = computed(() => props.offsetBottom);

    // 
    const update = throttleByRaf(() => {
      if (!scrollContainerRef.value || !containerRef.value) {
        return;
      }

      const newState = {} as AffixState;

      const scrollContainerRect = utils.getElementRect(scrollContainerRef.value);
      const containerRect = utils.getElementRect(containerRef.value);

      const top = utils.getFixedTop(scrollContainerRect, containerRect, offsetTop.value);
      const bottom = utils.getFixedBottom(scrollContainerRect, containerRect, offsetBottom.value);

      if (!is.undefined(top)) {
        newState.containerStyle = {
          width: containerRect.width + "px",
          height: containerRect.height + "px"
        };
        newState.affixStyle = {
          position: "fixed",
          top: top,
          width: containerRect.width + "px",
          height: containerRect.height + "px"
        };
      }
      else if (!is.undefined(bottom)) {
        newState.containerStyle = {
          width: containerRect.width + "px",
          height: containerRect.height + "px"
        };
        newState.affixStyle = {
          position: "fixed",
          bottom: bottom,
          width: containerRect.width + "px",
          height: containerRect.height + "px"
        };
      }

      newState.affixed = !!newState.affixStyle;

      if (affixed.value !== newState.affixed) {
        context.emit("change", newState.affixed);
      }

      affixed.value = newState.affixed;
      containerStyle.value = newState.containerStyle;
      affixStyle.value = newState.affixStyle;
    });
    
    // 
    watch([offsetTop, offsetBottom], () => update());

    // 
    const handleResize = () => update();

    // 组件挂载完成后执行
    onMounted(() => {
      // Binding of scroll events inside the scroll container
      watchEffect(onCleanup => {
        const scrollContainer = props.getScrollContainer?.() ?? null;

        scrollContainerRef.value = scrollContainer;

        if (scrollContainer) {
          const scrollEvent = addEventListener(scrollContainer, "scroll", update);
          const resizeEvent = addEventListener(scrollContainer, "resize", update);

          onCleanup(() => {
            scrollEvent.remove();
            resizeEvent.remove();
          });
        }
      });

      // When the scroll container is not a window, you need to bind the outer scroll event of the scroll container to update the position
      watchEffect(onCleanup => {
        if (!scrollContainerRef.value) {
          return;
        }

        const upperScrollContainer = props.getUpperScrollContainer();

        if (upperScrollContainer) {
          const scrollEvent = addEventListener(upperScrollContainer, "scroll", update);
          const resizeEvent = addEventListener(upperScrollContainer, "resize", update);

          onCleanup(() => {
            scrollEvent.remove();
            resizeEvent.remove();
          });
        }
      });
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("affix", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: affixed.value
      };
    });

    // 渲染
    return () => {
      return (
        <VuiResizeObserver onResize={handleResize}>
          <div ref={containerRef} style={containerStyle.value}>
            <div class={classes.el.value} style={affixStyle.value}>
              {context.slots.default?.()}
            </div>
          </div>
        </VuiResizeObserver>
      );
    };
  }
});
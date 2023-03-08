import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { GetScrollContainer, AffixState } from "./types";
import { defineComponent, getCurrentInstance, ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from "vue";
import VuiResizeObserver from "../resize-observer";
import is from "../../utils/is";
import throttleByRaf from "../../utils/throttleByRaf";
import getClassName from "../../utils/getClassName";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
    getScrollContainer: {
      type: Function as PropType<GetScrollContainer>,
      default: () => typeof window === "undefined" ? null : window
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
    }
  };
};

export type AffixProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-affix",
  props: createProps(),
  emits: ["change"],
  setup(props, context) {
    // 获取当前组件实例
    const instance = getCurrentInstance();

    // DOM 引用
    const scrollContainerRef = ref();
    const containerRef = ref<HTMLDivElement>();
    const affixRef = ref<HTMLDivElement>();

    // 
    const timeout = ref();
    const affixed = ref(false);
    const status = ref("none");
    const containerStyle = ref();
    const affixStyle = ref();

    // 
    const offsetTop = computed(() => is.undefined(props.offsetTop) && is.undefined(props.offsetBottom) ? 0 : props.offsetTop);
    const offsetBottom = computed(() => props.offsetBottom);

    // 
    watch(() => props.getScrollContainer, value => {
      let scrollContainer = null;

      if (value) {
        scrollContainer = value() || null;
      }

      if (scrollContainerRef.value !== scrollContainer) {
        utils.removeObserver(instance);

        if (scrollContainer) {
          utils.addObserver(scrollContainer, instance);
          doUpdatePosition();
        }

        scrollContainerRef.value = scrollContainer;
      }
    });

    // 
    watch(() => [props.offsetTop, props.offsetBottom], () => {
      doUpdatePosition();
    });

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "affix"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: affixed.value
      };
    });

    // 
    const prepare = () => {
      status.value = "prepare";
      containerStyle.value = undefined;
      affixStyle.value = undefined;

      instance?.update();
    };

    // 
    const measure = () => {
      if (status.value !== "prepare" || !containerRef.value || !affixRef.value || !props.getScrollContainer) {
        return;
      }

      const scrollContainer = props.getScrollContainer();

      if (!scrollContainer) {
        return;
      }

      const newState = {} as AffixState;

      const containerRect = utils.getElementRect(containerRef.value);
      const scrollContainerRect = utils.getElementRect(scrollContainer);

      const top = utils.getFixedTop(containerRect, scrollContainerRect, offsetTop.value);
      const bottom = utils.getFixedBottom(containerRect, scrollContainerRect, offsetBottom.value);

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
      newState.status = "none";

      if (affixed.value !== newState.affixed) {
        context.emit("change", newState.affixed);
      }

      affixed.value = newState.affixed;
      status.value = newState.status;
      containerStyle.value = newState.containerStyle;
      affixStyle.value = newState.affixStyle;
    };

    // 
    const doUpdatePosition = throttleByRaf(() => {
      prepare();
    });

    // 
    const doLazyUpdatePosition = throttleByRaf(() => {
      if (props.getScrollContainer && affixStyle.value) {
        const scrollContainer = props.getScrollContainer();

        if (scrollContainer && containerRef.value) {
          const containerRect = utils.getElementRect(containerRef.value);
          const scrollContainerRect = utils.getElementRect(scrollContainer);

          const top = utils.getFixedTop(containerRect, scrollContainerRect, offsetTop.value);
          const bottom = utils.getFixedBottom(containerRect, scrollContainerRect, offsetBottom.value);

          if ((!is.undefined(top) && affixStyle.value.top === top) || (!is.undefined(bottom) && affixStyle.value.bottom === bottom)) {
            return;
          }
        }
      }

      prepare();
    });

    // 
    context.expose({
      doUpdatePosition,
      doLazyUpdatePosition
    });

    // 
    const handleResize = () => {
      doUpdatePosition();
    };

    // 组件挂载完成后执行
    onMounted(() => {
      if (props.getScrollContainer) {
        timeout.value = setTimeout(() => {
          const scrollContainer = props.getScrollContainer();

          utils.addObserver(scrollContainer, instance);
          doUpdatePosition();
        });
      }
    });

    // 组件更新完成后执行
    onUpdated(() => {
      measure();
    });

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      timeout.value && clearTimeout(timeout.value);
      utils.removeObserver(instance);
      doUpdatePosition?.cancel();
      doLazyUpdatePosition?.cancel();
    });

    // 渲染
    return () => {
      return (
        <VuiResizeObserver onResize={handleResize}>
          <div ref={containerRef} style={containerStyle.value}>
            <div ref={affixRef} class={classes.el.value} style={affixStyle.value}>
              {context.slots.default?.()}
            </div>
          </div>
        </VuiResizeObserver>
      );
    };
  }
});
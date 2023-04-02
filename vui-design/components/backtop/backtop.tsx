import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { EventListener } from "../../utils/addEventListener";
import type { GetScrollContainer } from "./types";
import { Transition, defineComponent, ref, computed, nextTick, onMounted, onUpdated, onBeforeUnmount } from "vue";
import is from "../../utils/is";
import throttleByRaf from "../../utils/throttleByRaf";
import scrollTo from "../../utils/scrollTo";
import addEventListener from "../../utils/addEventListener";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 滚动高度达到此参数值才出现 Backtop 按钮
    threshold: {
      type: Number as PropType<number>,
      default: 400
    },
    // Backtop 按钮距离页面右侧距离
    right: {
      type: [String, Number] as PropType<string | number>,
      default: 40
    },
    // Backtop 按钮距离页面底部距离
    bottom: {
      type: [String, Number] as PropType<string | number>,
      default: 40
    },
    // 回到顶部滚动动画持续时间，单位毫秒
    duration: {
      type: Number as PropType<number>,
      default: 500
    },
    // 指定滚动容器
    getScrollContainer: {
      type: Function as PropType<GetScrollContainer>,
      default: () => typeof window === "undefined" ? undefined : window
    },
    // 
    animation: {
      type: String as PropType<string>,
      default: "vui-backtop-fade"
    }
  };
};

export type BacktopProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-backtop",
  props: createProps(),
  setup(props, context) {
    // DOM 引用
    const scrollContainerRef = ref<Window | HTMLElement>();

    // 状态
    const visible = ref<boolean>(false);
    const scrollEvent = ref<EventListener>();

    // 获取滚动容器当前的滚动距离
    const getScrollTop = () => {
      if (!scrollContainerRef.value) {
        return 0;
      }

      if (scrollContainerRef.value === window) {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
      }
      else {
        return (scrollContainerRef.value as HTMLElement).scrollTop;
      }
    };

    // 滚动容器滚动时的事件回调
    const handleScroll = throttleByRaf(() => {
      visible.value = getScrollTop() >= props.threshold;
    });

    // 回到顶部按钮点击时的事件回调
    const handleClick = (e: MouseEvent) => {
      context.emit("click", e);

      if (!scrollContainerRef.value) {
        return;
      }

      scrollTo(scrollContainerRef.value, 0, props.duration);
    };

    // 
    onMounted(() => nextTick(() => {
      const scrollContainer = props.getScrollContainer();

      scrollContainerRef.value = scrollContainer;

      if (scrollContainer) {
        scrollEvent.value = addEventListener(scrollContainer, "scroll", handleScroll);
      }

      handleScroll();
    }));

    // 
    onUpdated(() => nextTick(() => {
      if (scrollEvent.value) {
        const scrollContainer = props.getScrollContainer();

        if (scrollContainerRef.value !== scrollContainer) {
          scrollContainerRef.value = scrollContainer;
          scrollEvent.value.remove();

          if (scrollContainer) {
            scrollEvent.value = addEventListener(scrollContainer, "scroll", handleScroll);
          }

          handleScroll();
        }
      }
    }));

    // 
    onBeforeUnmount(() => {
      if (scrollEvent.value) {
        scrollEvent.value.remove();
  
        scrollContainerRef.value = undefined;
        scrollEvent.value = undefined;
      }
    });

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "backtop"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);
    classes.elContent = computed(() => `${className.value}-content`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      return {
        right: is.string(props.right) ? props.right : `${props.right}px`,
        bottom: is.string(props.bottom) ? props.bottom : `${props.bottom}px`
      };
    });

    // 渲染
    return () => {
      let backtop;

      if (visible.value) {
        backtop = (
          <div class={classes.el.value} style={styles.el.value} onClick={handleClick}>
            {
              context.slots.default ? context.slots.default() : (
                <div class={classes.elContent.value}>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                    <path d="M772.551111 493.174949c-7.938586 7.951515-18.010505 11.649293-28.069495 11.649293-10.05899 0-20.130909-3.710707-28.069495-11.649293l-165.236363-165.236363v264.261818c0 21.721212-18.010505 39.718788-39.718788 39.718788s-39.718788-17.997576-39.718788-39.718788V327.938586l-165.223435 165.236363c-15.36 15.36-40.77899 15.36-56.138989 0-15.36-15.36-15.36-40.77899 0-56.138989L483.400404 204.024242c15.36-15.36 40.77899-15.36 56.13899 0l233.024646 233.011718c15.347071 15.36 15.347071 40.248889-0.012929 56.138989zM511.469899 733.595152c-20.66101 0-37.598384-16.937374-37.598384-38.128485 0-20.66101 16.937374-38.128485 37.598384-38.128485 20.648081 0 37.598384 16.950303 37.598384 38.128485 0 21.191111-16.950303 38.128485-37.598384 38.128485M511.469899 833.163636c-20.66101 0-37.598384-16.937374-37.598384-38.128484 0-20.66101 16.937374-38.128485 37.598384-38.128485 20.648081 0 37.598384 16.937374 37.598384 38.128485 0 21.178182-16.950303 38.128485-37.598384 38.128484"></path>
                  </svg>
                </div>
              )
            }
          </div>
        );
      }

      return (
        <Transition appear name={props.animation}>
          {backtop}
        </Transition>
      );
    };
  }
});
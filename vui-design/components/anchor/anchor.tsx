import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { EventListener } from "../../utils/addEventListener";
import type { GetScrollContainer, Section, AnchorLink } from "./types";
import { defineComponent, provide, ref, reactive, computed, nextTick, onMounted, onUpdated, onBeforeUnmount } from "vue";
import VuiAffix from "../affix";
import is from "../../utils/is";
import getScroll from "../../utils/getScroll";
import getOffsetTop from "../../utils/getOffsetTop";
import scrollTo from "../../utils/scrollTo";
import addEventListener from "../../utils/addEventListener";
import getClassName from "../../utils/getClassName";
import { AnchorInjectionKey } from "./context";

const sharpMatcherRegx = /#([^#]+)$/;

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 固钉模式
    affix: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 静态模式（非固钉模式）下是否显示小圆点
    showInkInStatic: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 锚点区域边界
    bounds: {
      type: Number as PropType<number>,
      default: 5
    },
    // 锚点滚动偏移量
    offset: {
      type: Number as PropType<number>,
      default: 0
    },
    // 指定滚动容器
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
    },
    // 自定义高亮的锚点链接
    getCurrentAnchorLink: {
      type: Function as PropType<() => any>,
      default: undefined
    },
    // 阻止锚点链接的默认行为，即点击锚点链接时，不将锚点名添加到地址栏
    preventDefault: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type AnchorProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-anchor",
  inheritAttrs: false,
  props: createProps(),
  emits: ["click", "change"],
  setup(props, context) {
    // DOM 引用
    const scrollContainerRef = ref<Window | HTMLElement>();
    const anchorRef = ref<HTMLDivElement>();
    const anchorInkThumbRef = ref<HTMLDivElement>();

    // 状态
    const links = ref<string[]>([]);
    const link = ref<string>("");
    const scrollEvent = ref<EventListener>();
    const scrolling = ref<boolean>(false);

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "anchor"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-affixed`]: props.affix
      };
    });
    classes.elWrapper = computed(() => `${className.value}-wrapper`);
    classes.elInk = computed(() => {
      return {
        [`${className.value}-ink`]: true,
        [`${className.value}-ink-active`]: link.value
      };
    });
    classes.elInkThumb = computed(() => `${className.value}-ink-thumb`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elWrapper = computed(() => {
      const offset = props.offsetTop ?? props.offsetBottom;

      return {
        maxHeight: offset ? `calc(100vh - ${offset}px)` : `100vh`
      };
    });
    styles.elInkThumb = computed(() => {
      return {
        display: !props.affix && !props.showInkInStatic ? "none" : ""
      };
    });

    // 
    const addLink = (link: string) => links.value.push(link);
    const removeLink = (link: string) => links.value.splice(links.value.indexOf(link), 1);

    // 获取高亮的锚点链接
    const getCurrAnchorLink = (offset: number = 0, bounds: number = 5) => {
      if (is.function(props.getCurrentAnchorLink)) {
        return props.getCurrentAnchorLink();
      }

      if (is.undefined(document)) {
        return "";
      }

      const scrollContainer = props.getScrollContainer();
      let sections: Array<Section> = [];

      links.value.forEach((link: string) => {
        const sharpLinkMatch = sharpMatcherRegx.exec(String(link));

        if (!sharpLinkMatch) {
          return;
        }

        const selector = sharpLinkMatch[1];
        const target = document.getElementById(selector);

        if (!target) {
          return;
        }

        const top = getOffsetTop(target, scrollContainer);

        if (top < offset + bounds) {
          sections.push({
            top,
            link
          });
        }
      });

      if (sections.length) {
        const section = sections.reduce((prev, current) => current.top > prev.top ? current : prev);

        return section.link;
      }

      return "";
    };

    // 设置高亮的描点链接
    const setCurrAnchorLink = (newHref: string) => {
      const oldHref = link.value;

      if (oldHref === newHref) {
        return;
      }

      link.value = newHref;
      context.emit("change", newHref, oldHref);
    };

    // 更新 inkThumb 位置
    const changeInkThumb = () => {
      if (is.undefined(document)) {
        return;
      }

      if (!anchorRef.value || !anchorInkThumbRef.value) {
        return;
      }

      const target = anchorRef.value.querySelector(`.${className.value}-link-title-active`);

      if (target) {
        anchorInkThumbRef.value.style.top = `${(target as HTMLElement).offsetTop + (target.clientHeight / 2) - (anchorInkThumbRef.value.offsetHeight / 2)}px`;
      }
    };

    // 
    const scrollToLink = (link: string) => {
      setCurrAnchorLink(link);

      const sharpLinkMatch = sharpMatcherRegx.exec(String(link));

      if (!sharpLinkMatch) {
        return;
      }

      const selector = sharpLinkMatch[1];
      const target = document.getElementById(selector);

      if (!target) {
        return;
      }

      const scrollContainer = props.getScrollContainer();
      const scrollTop = getScroll(scrollContainer);
      const offsetTop = getOffsetTop(target, scrollContainer);
      let y = scrollTop + offsetTop;

      y -= is.undefined(props.offset) ? 0 : props.offset;

      scrolling.value = true;
      scrollTo(scrollContainer, y, 450, () => scrolling.value = false);
    };

    // 
    const handleClick = (e: MouseEvent, info: AnchorLink) => {
      if (props.preventDefault) {
        e.preventDefault();
      }

      context.emit("click", e, info);
    };

    // 
    const handleScroll = () => {
      if (scrolling.value) {
        return;
      }

      const link = getCurrAnchorLink(is.undefined(props.offset) ? 0 : props.offset, props.bounds);

      setCurrAnchorLink(link);
    };

    // 向后代组件注入当前组件
    provide(AnchorInjectionKey, reactive({
      link,
      addLink,
      removeLink,
      scrollTo: scrollToLink,
      onClick: handleClick
    }));

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

      changeInkThumb();
    }));

    // 
    onBeforeUnmount(() => {
      if (scrollEvent.value) {
        scrollEvent.value.remove();
      }
    });

    // 渲染
    return () => {
      const attributes = {
        ...context.attrs,
        class: [classes.elWrapper.value, context.attrs.class],
        style: [styles.elWrapper.value, context.attrs.style]
      };

      const anchor = (
        <div ref={anchorRef} {...attributes}>
          <div class={classes.el.value}>
            <div class={classes.elInk.value}>
              <div ref={anchorInkThumbRef} class={classes.elInkThumb.value} style={styles.elInkThumb.value}></div>
            </div>
            {context.slots.default?.()}
          </div>
        </div>
      );

      if (props.affix) {
        return (
          <VuiAffix getScrollContainer={props.getScrollContainer} offsetTop={props.offsetTop} offsetBottom={props.offsetBottom}>
            {anchor}
          </VuiAffix>
        );
      }
      else {
        return anchor;
      }
    };
  }
});
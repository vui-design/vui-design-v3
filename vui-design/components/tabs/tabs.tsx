import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Key, Size } from "../../types";
import type { Type, Tab } from "./types";
import { defineComponent, cloneVNode, provide, toRefs, ref, reactive, computed, watch, nextTick } from "vue";
import { getSlotProp } from "../../utils/vue";
import { sizes, keyCodes } from "../../constants";
import { types } from "./constants";
import { TabsInjectionKey } from "./context";
import VuiResizeObserver from "../resize-observer";
import VuiIcon from "../icon";
import VuiTabsNav from "./tab-nav";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 默认激活的面板（非受控模式）
    defaultActiveKey: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 当前激活的面板（受控模式）
    activeKey: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 页签基本样式
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "line"
    },
    // 页签尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 是否可以添加页签
    addable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否允许关闭页签
    closable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 隐藏时销毁 TabPanel 的子元素
    destroyOnHide: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 页签右侧附加内容
    extra: {
      type: [String, Number, Function] as PropType<string | number | RenderFunction>,
      default: undefined
    },
    // 用于设置页签头部的样式
    headerStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 用于设置页签内容部分的样式
    bodyStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    }
  };
};

export type TabsProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-tabs",
  props: createProps(),
  emits: ["update:activeKey", "change", "add", "close"],
  setup(props, context) {
    // DOM 引用
    const scrollerRef = ref<HTMLDivElement>();
    const scrollerContentRef = ref<HTMLDivElement>();

    // 解构属性
    const { closable, destroyOnHide } = toRefs(props);

    // 是否为受控模式
    const isControlled = useControlled("activeKey");

    // 激活页签（defaultActiveKey 非受控模式，activeKey 受控模式）
    const defaultActiveKey = ref(props.defaultActiveKey);
    const activeKey = computed(() => isControlled.value ? props.activeKey : defaultActiveKey.value);

    // 滚动相关状态
    const scrollable = ref<boolean>(false);
    const scrollWidth = ref<number>(0);
    const ping = ref<string>("left");

    // 用于更新内嵌的 TabPanel 集合
    const tabs = ref<Tab[]>([]);
    const addTab = (tab: Tab) => {
      const index = tabs.value.findIndex(target => target.key === tab.key);

      if (index > -1) {
        tabs.value.splice(index, 1, tab);
      }
      else {
        tabs.value.splice(tab.index, 0, tab);
      }
    };
    const removeTab = (key: Key) => {
      const index = tabs.value.findIndex(target => target.key === key);

      if (index > -1) {
        tabs.value.splice(index, 1);
      }
    };

    // 向后代组件注入当前组件
    provide(TabsInjectionKey, reactive({
      activeKey,
      closable,
      destroyOnHide,
      addTab,
      removeTab
    }));

    // 
    const getNavigationTab = (tabs: Tab[], activeKey: Key, direction: number): Tab => {
      const tabIndex = (tabs.findIndex(tab => tab.key === activeKey) + direction + tabs.length) % tabs.length;
      const tab = tabs[tabIndex];

      if (tab?.disabled) {
        return getNavigationTab(tabs, tab.key, direction);
      }
      else {
        return tab;
      }
    };

    // 
    const getScrollWidth = () => {
      return scrollWidth.value;
    };

    // 
    const setScrollWidth = (value: number) => {
      if (!scrollerRef.value || !scrollerContentRef.value) {
        return;
      }

      const scrollerWidth = scrollerRef.value.offsetWidth;
      const scrollerContentWidth = scrollerContentRef.value.offsetWidth;
      let newPing = "";

      if (value === 0) {
        newPing = "left";
      }
      else if (scrollerContentWidth - value <= scrollerWidth) {
        newPing = "right";
      }

      scrollWidth.value = value;
      ping.value = newPing;
    };

    // 
    const scrollToActiveTab = () => {
      if (!scrollerRef.value || !scrollerContentRef.value || !scrollable.value) {
        return;
      }

      const activeTab = scrollerContentRef.value.querySelector(`.${classPrefix.value}-nav-active`);

      if (!activeTab) {
        return;
      }

      const scrollerBounding = scrollerRef.value.getBoundingClientRect();
      const scrollerContentBounding = scrollerContentRef.value.getBoundingClientRect();
      const activeTabBounding = activeTab.getBoundingClientRect();
      const scrollWidth = getScrollWidth();
      let value = scrollWidth;

      if (scrollerContentBounding.right < scrollerBounding.right) {
        value = scrollerContentRef.value.offsetWidth - scrollerBounding.width;
      }

      if (activeTabBounding.left < scrollerBounding.left) {
        value = scrollWidth - (scrollerBounding.left - activeTabBounding.left);
      }
      else if (activeTabBounding.right > scrollerBounding.right) {
        value = scrollWidth + activeTabBounding.right - scrollerBounding.right;
      }

      if (scrollWidth !== value) {
        setScrollWidth(Math.max(value, 0));
      }
    };

    // 监听 TabPanel 集合变化
    watch(tabs, newValue => {
      const tab = newValue.find(tab => !tab.disabled);

      if (!isControlled.value && defaultActiveKey.value === undefined && tab) {
        defaultActiveKey.value = tab.key;
      }
    }, {
      immediate: true,
      deep: true
    });

    // 监听 activeKey 属性变化
    watch(activeKey, newValue => {
      nextTick(() => setTimeout(() => scrollToActiveTab(), 0));
    }, {
      immediate: true
    });

    // 
    const handleResize = () => {
      if (!scrollerRef.value || !scrollerContentRef.value) {
        return;
      }

      const scrollerWidth = scrollerRef.value.offsetWidth;
      const scrollerContentWidth = scrollerContentRef.value.offsetWidth;
      const scrollWidth = getScrollWidth();

      if (scrollerWidth < scrollerContentWidth) {
        scrollable.value = true;

        if (scrollerContentWidth - scrollWidth < scrollerWidth) {
          setScrollWidth(scrollerContentWidth - scrollerWidth);
        }
      }
      else {
        scrollable.value = false;

        if (scrollWidth > 0) {
          setScrollWidth(0);
        }
      }
    };

    // 
    const handleScroll = (e: WheelEvent) => {
      if (!scrollable.value) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      const delta = -e.deltaY;

      if (delta > 0) {
        handleScrollPrev();
      }
      else {
        handleScrollNext();
      }
    };

    // 
    const handleScrollPrev = () => {
      if (!scrollerRef.value || !scrollerContentRef.value) {
        return;
      }

      const scrollerWidth = scrollerRef.value.offsetWidth;
      const scrollWidth = getScrollWidth();

      if (!scrollWidth) {
        return;
      }

      const value = scrollWidth > scrollerWidth ? (scrollWidth - scrollerWidth) : 0;

      setScrollWidth(value);
    };

    // 
    const handleScrollNext = () => {
      if (!scrollerRef.value || !scrollerContentRef.value) {
        return;
      }

      const scrollerWidth = scrollerRef.value.offsetWidth;
      const scrollerContentWidth = scrollerContentRef.value.offsetWidth;
      const scrollWidth = getScrollWidth();

      if (scrollerContentWidth - scrollWidth <= scrollerWidth) {
        return;
      }

      const value = (scrollerContentWidth - scrollWidth) > scrollerWidth * 2 ? (scrollWidth + scrollerWidth) : (scrollerContentWidth - scrollerWidth);

      setScrollWidth(value);
    };

    // 
    const handleAdd = () => {
      context.emit("add");
    };

    // 
    const handleClose = (key: Key) => {
      context.emit("close", key);

      if (key === activeKey.value) {
        let tabIndex = tabs.value.findIndex(tab => tab.key === activeKey.value);

        if (tabIndex > 0) {
          tabIndex = tabIndex - 1;
        }
        else {
          tabIndex = tabIndex + 1;
        }

        const tab = tabs.value[tabIndex];

        handleChange(tab ? tab.key : undefined);
      }
    };

    // 
    const handleNavigation = (e: KeyboardEvent) => {
      if (e.keyCode !== keyCodes.left && e.keyCode !== keyCodes.right) {
        return;
      }

      if (tabs.value.length < 2 || activeKey.value === undefined) {
        return;
      }

      const tab = getNavigationTab(tabs.value, activeKey.value, e.keyCode === keyCodes.right ? 1 : -1);

      if (!tab) {
        return;
      }

      handleChange(tab.key);
    };

    // 
    const handleChange = (key?: Key) => {
      if (!isControlled.value) {
        defaultActiveKey.value = key;
      }

      context.emit("update:activeKey", key);
      context.emit('change', key);
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("tabs", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.type}`]: true,
        [`${classPrefix.value}-${props.size}`]: props.size
      };
    });
    classes.elHeader = computed(() => `${classPrefix.value}-header`);
    classes.elHeaderContent = computed(() => `${classPrefix.value}-header-content`);
    classes.elHeaderExtra = computed(() => `${classPrefix.value}-header-extra`);
    classes.elBody = computed(() => `${classPrefix.value}-body`);
    classes.elBodyContent = computed(() => `${classPrefix.value}-body-content`);
    classes.elScroller = computed(() => {
      return {
        [`${classPrefix.value}-scroller`]: true,
        [`${classPrefix.value}-scroller-scrollable`]: scrollable.value,
        [`${classPrefix.value}-scroller-ping-${ping.value}`]: scrollable.value && ping.value
      };
    });
    classes.elScrollerContent = computed(() => `${classPrefix.value}-scroller-content`);
    classes.elBtnPrev = computed(() => {
      return {
        [`${classPrefix.value}-btn`]: true,
        [`${classPrefix.value}-btn-prev`]: true
      };
    });
    classes.elBtnNext = computed(() => {
      return {
        [`${classPrefix.value}-btn`]: true,
        [`${classPrefix.value}-btn-next`]: true
      };
    });
    classes.elBtnAdd = computed(() => {
      return {
        [`${classPrefix.value}-btn`]: true,
        [`${classPrefix.value}-btn-add`]: true
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elScrollerContent = computed(() => {
      return {
        transform: `translateX(-${scrollWidth.value}px)`
      } as CSSProperties;
    });

    // 获取 header 内容
    const getHeader = () => {
      let btnPrev;

      if (scrollable.value) {
        btnPrev = (
          <div key="btn-prev" class={classes.elBtnPrev.value} onClick={handleScrollPrev}>
            <VuiIcon type="chevron-left" />
          </div>
        );
      }

      let btnNext;

      if (scrollable.value) {
        btnNext = (
          <div key="btn-next" class={classes.elBtnNext.value} onClick={handleScrollNext}>
            <VuiIcon type="chevron-right" />
          </div>
        );
      }

      let btnAdd;

      if (props.addable) {
        btnAdd = (
          <div key="btn-add" class={classes.elBtnAdd.value} onClick={handleAdd}>
            <VuiIcon type="plus" />
          </div>
        );
      }

      let extra;

      if (context.slots.extra || props.extra) {
        extra = (
          <div class={classes.elHeaderExtra.value}>
            {getSlotProp(context.slots, props, "extra")}
          </div>
        );
      }

      return (
        <VuiResizeObserver onResize={handleResize}>
          <div class={classes.elHeader.value} style={props.headerStyle}>
            <div class={classes.elHeaderContent.value}>
              {btnPrev}
              <div ref={scrollerRef} class={classes.elScroller.value} onWheel={handleScroll}>
                <VuiResizeObserver onResize={handleResize}>
                  <div ref={scrollerContentRef} tabindex="0" class={classes.elScrollerContent.value} style={styles.elScrollerContent.value} onKeydown={handleNavigation}>
                    {
                      tabs.value.map(tab => {
                        return (
                          <VuiTabsNav
                            classPrefix={props.classPrefix}
                            key={tab.key}
                            icon={tab.icon}
                            title={tab.title}
                            closable={tab.closable}
                            disabled={tab.disabled}
                            onClick={handleChange}
                            onClose={handleClose}
                          />
                        );
                      })
                    }
                  </div>
                </VuiResizeObserver>
              </div>
              {btnNext}
              {btnAdd}
            </div>
            {extra}
          </div>
        </VuiResizeObserver>
      );
    };

    // 获取 body 内容
    const getBody = () => {
      const panels = utils.getChildren(context.slots.default?.());

      return (
        <div class={classes.elBody.value} style={props.bodyStyle}>
          <div class={classes.elBodyContent.value}>
            {
              panels?.map((panel, panelIndex) => {
                return cloneVNode(panel, {
                  index: panelIndex
                });
              })
            }
          </div>
        </div>
      );
    };

    // 渲染
    return () => {
      const header = getHeader();
      const body = getBody();

      return (
        <div class={classes.el.value}>
          {header}
          {body}
        </div>
      );
    };
  }
});
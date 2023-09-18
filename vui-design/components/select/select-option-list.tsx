import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Children, Scroll, Option } from "./types";
import { defineComponent, inject, ref, computed, watch, nextTick } from "vue";
import { scroll } from "./constants";
import { PopupInjectionKey } from "../popup/context";
import VuiSelectOptionGroup from "./select-option-group";
import VuiSelectOption from "./select-option";
import useClassPrefix from "../../hooks/useClassPrefix";
import getStyle from "../../utils/getStyle";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 当前选中的选项或选项列表
    value: {
      type: [Object, Array] as PropType<Option | Option[]>,
      default: undefined
    },
    // 当前激活的方式
    activedType: {
      type: String as PropType<string>,
      default: "keyboard"
    },
    // 当前激活的选项
    activedValue: {
      type: Object as PropType<Option>,
      default: undefined
    },
    // 当前激活的选项索引
    activedValueIndex: {
      type: Number as PropType<number>,
      default: 0
    },
    // 选项列表
    options: {
      type: Array as PropType<Option[]>,
      default: () => []
    },
    // 虚拟滚动配置
    scroll: {
      type: Object as PropType<Scroll>,
      default: () => scroll
    },
    // 是否支持多选
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type SelectOptionListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-select-option-list",
  props: createProps(),
  emits: ["preselect", "select", "deselect"],
  setup(props, context) {
    // 注入祖先组件
    const vuiPopup = inject(PopupInjectionKey, undefined);

    // DOM 引用
    const containerRef = ref<HTMLDivElement>();

    // 分页状态
    const pageSize = computed(() => props.scroll.pageSize ?? 8);
    const averageHeight = computed(() => props.scroll.averageHeight ?? 34);
    const threshold = computed(() => props.scroll.threshold ?? 100);
    const range = ref<[number, number]>([0, pageSize.value * 2]);
    const pageable = ref<boolean>(true);
    const preventScrolling = ref<boolean>(false);

    // 在可见状态、当前激活的选项索引及选项列表发生变化时，更新渲染列表
    watch([
      () => vuiPopup?.visible,
      () => props.activedValueIndex,
      () => props.options
    ], () => {
      nextTick(() => getPageList());
    });

    // 获取目标滚动高度
    const getScrollStatus = () => {
      const paddingTop = parseInt(getStyle(containerRef.value as HTMLElement, "paddingTop"));
      const itemRectTop = props.activedValueIndex * averageHeight.value + paddingTop;
      const itemRectBottom = itemRectTop + averageHeight.value;
      const viewRectTop = (containerRef.value as HTMLElement).scrollTop;
      const viewRectBottom = viewRectTop + (containerRef.value as HTMLElement).clientHeight;
      let scrollTop = props.activedValueIndex * averageHeight.value + paddingTop;

      if (itemRectTop < viewRectTop) {
        scrollTop = itemRectTop - paddingTop;
      }
      else if (itemRectBottom > viewRectBottom) {
        scrollTop = itemRectBottom - (containerRef.value as HTMLElement).clientHeight + paddingTop;
      }
      else {
        scrollTop = (containerRef.value as HTMLElement).scrollTop;
      }

      return {
        paddingTop,
        itemRectTop,
        itemRectBottom,
        viewRectTop,
        viewRectBottom,
        scrollTop
      };
    };

    // 
    const getRange = (paddingTop: number, scrollTop: number): [number, number] => {
      const reserve = Math.ceil(pageSize.value / 2);
      const scrollSize = scrollTop < paddingTop ? 0 : (scrollTop - paddingTop);
      let startIndex = Math.floor(scrollSize / averageHeight.value);
      let endIndex = 0;

      if (startIndex < reserve) {
        startIndex = 0;
      }
      else {
        startIndex = startIndex - reserve;
      }

      let options = props.options.slice(startIndex, props.options.length);

      if (options.length < pageSize.value * 2) {
        startIndex = props.options.length - pageSize.value * 2;
        endIndex = props.options.length;
      }
      else {
        endIndex = startIndex + pageSize.value * 2;
      }

      return [startIndex, endIndex];
    };

    // 更新当前渲染列表
    const getPageList = () => {
      if (props.options.length > threshold.value) {
        // 
        const { paddingTop, itemRectTop, itemRectBottom, viewRectTop, viewRectBottom, scrollTop } = getScrollStatus();

        // 
        if (props.activedType === "keyboard") {
          if ((itemRectTop < viewRectTop) || (itemRectBottom > viewRectBottom)) {
            (containerRef.value as HTMLElement).scrollTop = scrollTop;
          }
        }

        // 
        range.value = getRange(paddingTop, scrollTop);
        pageable.value = true;
        preventScrolling.value = true;
      }
      else {
        // 
        const { itemRectTop, itemRectBottom, viewRectTop, viewRectBottom, scrollTop } = getScrollStatus();

        // 
        if (props.activedType === "keyboard") {
          if ((itemRectTop < viewRectTop) || (itemRectBottom > viewRectBottom)) {
            (containerRef.value as HTMLElement).scrollTop = scrollTop;
          }
        }

        // 
        range.value = [0, 0];
        pageable.value = false;
        preventScrolling.value = false;
      }
    };

    // onScroll 事件回调
    const handleScroll = (e: UIEvent) => {
      if (preventScrolling.value) {
        preventScrolling.value = false;
      }
      else {
        if (props.options.length > threshold.value) {
          // 
          const paddingTop = parseInt(getStyle(e.target as HTMLElement, "paddingTop"));
          let scrollTop = (e.target as HTMLElement).scrollTop;

          // 
          range.value = getRange(paddingTop, scrollTop);
          pageable.value = true;
          preventScrolling.value = false;
        }
        else {
          // 
          range.value = [0, 0];
          pageable.value = false;
          preventScrolling.value = false;
        }
      }
    };

    // onOptionMouseenter 事件回调
    const handleOptionMouseenter = (value: string | number | boolean) => {
      context.emit("preselect", value);
    };

    // onOptionClick 事件回调
    const handleOptionClick = (value: string | number | boolean) => {
      if (props.multiple) {
        const index = (props.value as Option[]).findIndex(target => target.value === value);

        if (index === -1) {
          context.emit("select", value);
        }
        else {
          context.emit("deselect", value);
        }
      }
      else {
        context.emit("select", value);
      }
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("select-option-list", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      if (pageable.value) {
        return {
          height: (props.options.length * averageHeight.value) + "px",
          paddingTop: (range.value[0] * averageHeight.value) + "px"
        };
      }
    });

    // 渲染
    return () => {
      let options = props.options;

      if (pageable.value) {
        options = options.slice(range.value[0], range.value[1]);
      }

      return (
        <div ref={containerRef} class={classes.el.value} onScroll={handleScroll}>
          <div style={styles.el.value}>
            {
              options.map(option => {
                if (option.type === "option-group") {
                  return (
                    <VuiSelectOptionGroup
                      key={option.key}
                      classPrefix={props.classPrefix}
                      level={option.level}
                      label={option.label}
                      disabled={option.disabled}
                    />
                  );
                }
                else if (option.type === "option" || option.type === "keyword") {
                  let actived = props.activedValue?.value === option.value;
                  let selected = false;
                  let disabled = option.disabled;

                  if (props.multiple) {
                    if (props.value && (props.value as Option[]).length > 0) {
                      selected = (props.value as Option[]).findIndex(target => target.value === option.value) > -1;
                    }
                  }
                  else {
                    if (props.value) {
                      selected = (props.value as Option).value === option.value;
                    }
                  }

                  return (
                    <VuiSelectOption
                      key={option.key}
                      classPrefix={props.classPrefix}
                      type={option.type}
                      level={option.level}
                      value={option.value}
                      label={option.label}
                      children={option.children as Children}
                      actived={actived}
                      selected={selected}
                      disabled={disabled}
                      onMouseenter={handleOptionMouseenter}
                      onClick={handleOptionClick}
                    />
                  );
                }
              })
            }
          </div>
        </div>
      );
    };
  }
});
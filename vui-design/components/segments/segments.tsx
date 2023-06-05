import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Key, Size } from "../../types";
import type { SegmentsItem } from "./types";
import { defineComponent, provide, toRefs, ref, reactive, computed, watch, nextTick } from "vue";
import { sizes } from "../../constants";
import { SegmentsInjectionKey } from "./context";
import VuiResizeObserver from "../resize-observer";
import VuiSegmentsItem from "./segments-item";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import is from "../../utils/is";
import setStyles from "../../utils/setStyles";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 默认选中的分段（非受控模式）
    defaultActiveKey: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 当前选中的分段（受控模式）
    activeKey: {
      type: [String, Number, Symbol] as PropType<Key>,
      default: undefined
    },
    // 以数据化配置形式设置分段控制器的选项列表
    options: {
      type: Array as PropType<Array<string | number | SegmentsItem>>,
      default: () => []
    },
    // 是否为块级元素，为 true 时宽度撑满父元素
    block: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 分段控制器的尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 是否禁用分段控制器
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
  };
};

export type SegmentsProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-segments",
  props: createProps(),
  emits: ["update:activeKey", "change"],
  setup(props, context) {
    // 解构属性
    const { disabled } = toRefs(props);

    // DOM 引用
    const segmentsRef = ref<HTMLDivElement>();
    const segmentsThumbRef = ref<HTMLDivElement>();

    // 是否为受控模式
    const isControlled = useControlled("activeKey");

    // 选中值（defaultActiveKey 非受控模式，activeKey 受控模式）
    const defaultActiveKey = ref(props.defaultActiveKey);
    const activeKey = computed(() => isControlled.value ? props.activeKey : defaultActiveKey.value);

    // 用于更新下属分段集合
    const keys = ref<Key[]>([]);
    const addKey = (key: Key) => keys.value.push(key);
    const removeKey = (key: Key) => keys.value.splice(keys.value.indexOf(key), 1);

    // 更新 thumb 样式
    const setThumbStyle = () => {
      if (!segmentsRef.value || !segmentsThumbRef.value) {
        return;
      }

      const target: HTMLDivElement | null = segmentsRef.value.querySelector(`.${classPrefix.value}-item-selected`);

      if (!target) {
        return;
      }

      setStyles(segmentsThumbRef.value, {
        width: target.clientWidth ? `${target.clientWidth}px` : undefined,
        transform: target.offsetLeft ? `translate3d(${target.offsetLeft}px, 0px, 0px)` : undefined
      });
    };

    // 非受控模式下，若未设置 defaultActiveKey，则默认选中第一个分段
    watch(keys.value, newKeys => {
      if (!isControlled.value && !is.existy(defaultActiveKey.value)) {
        defaultActiveKey.value = newKeys[0];
      }
    }, {
      immediate: true,
      deep: true
    });

    // 选中分段发生变化时，更新 thumb 的位置
    watch(activeKey, () => {
      nextTick(() => setThumbStyle());
    }, {
      immediate: true,
      deep: true
    });

    // onResize 事件回调
    const handleResize = () => setThumbStyle();

    // onChange 事件回调
    const handleChange = (activeKey: Key) => {
      if (!isControlled.value) {
        defaultActiveKey.value = activeKey;
      }

      context.emit("update:activeKey", activeKey);
      context.emit('change', activeKey);
    };

    // 向后代组件注入当前组件
    provide(SegmentsInjectionKey, reactive({
      activeKey,
      disabled,
      addKey,
      removeKey,
      onChange: handleChange
    }));

    // 计算 class 样式
    const classPrefix = useClassPrefix("segments", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-block`]: props.block,
        [`${classPrefix.value}-${props.size}`]: props.size
      };
    });
    classes.elThumb = computed(() => `${classPrefix.value}-thumb`);

    // 渲染
    return () => {
      let children;

      if (props.options && props.options.length > 0) {
        const options = props.options.map(option => {
          if (is.string(option) || is.number(option)) {
            option = {
              key: option,
              label: option
            };
          }

          return option as SegmentsItem;
        });

        children = options.map((option, optionIndex) => {
          let label;

          if (context.slots.label) {
            label = context.slots.label({
              option,
              index: optionIndex
            });
          }
          else {
            label = is.function(option.label) ? option.label() : option.label;
          }

          return (
            <VuiSegmentsItem
              classPrefix={props.classPrefix}
              key={option.key}
              icon={option.icon as string}
              disabled={option.disabled}
            >
              {label}
            </VuiSegmentsItem>
          );
        });
      }
      else {
        children = context.slots.default?.();
      }

      return (
        <VuiResizeObserver onResize={handleResize}>
          <div ref={segmentsRef} class={classes.el.value}>
            <div ref={segmentsThumbRef} class={classes.elThumb.value}></div>
            {children}
          </div>
        </VuiResizeObserver>
      );
    };
  }
});
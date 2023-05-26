import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Key } from "../../types";
import type { ArrowAlign } from "./types";
import { defineComponent, provide, toRefs, ref, reactive, computed, watch } from "vue";
import { arrowAligns } from "./constants";
import { CollapseInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 默认展开面板的 key 或 key 集合
    defaultActiveKeys: {
      type: [String, Number, Symbol, Array] as PropType<Key | Key[]>,
      default: undefined
    },
    // 当前展开面板的 key 或 key 集合
    activeKeys: {
      type: [String, Number, Symbol, Array] as PropType<Key | Key[]>,
      default: undefined
    },
    // 是否显示外边框
    bordered: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 使折叠面板透明且无边框
    ghost: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否显示面板的箭头图标
    showArrow: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 箭头图标的位置
    arrowAlign: {
      type: String as PropType<ArrowAlign>,
      validator: (arrowAlign: ArrowAlign) => arrowAligns.includes(arrowAlign),
      default: "left"
    },
    // 是否开启手风琴模式，开启后每次至多展开一个面板
    accordion: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否允许点击整个标题栏以展开面板，为 false 时仅在点击箭头图标时展开
    clickHeaderToCollapse: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 销毁折叠隐藏的面板内容
    destroyInactivePanel: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否禁用所有面板
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type CollapseProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-collapse",
  props: createProps(),
  setup(props, context) {
    // 解构属性
    const { showArrow, arrowAlign, accordion, clickHeaderToCollapse, destroyInactivePanel, disabled } = toRefs(props);

    // 展开状态（defaultActiveKeys 非受控模式，activeKeys 受控模式）
    const defaultActiveKeys = ref(props.defaultActiveKeys);
    const activeKeys = computed(() => utils.getActiveKeys(props.activeKeys ?? defaultActiveKeys.value, accordion.value));

    // 监听 activeKeys 属性变化
    watch(() => props.activeKeys, newActiveKeys => {
      defaultActiveKeys.value = utils.getActiveKeys(newActiveKeys, accordion.value);
    }, {
      deep: true
    });

    // 展开&收起事件回调
    const handleChange = (key: Key) => {
      let newActiveKeys;

      if (accordion.value) {
        newActiveKeys = activeKeys.value;

        if (newActiveKeys === key) {
          newActiveKeys = undefined;
        }
        else {
          newActiveKeys = key;
        }
      }
      else {
        newActiveKeys = [...activeKeys.value as Key[]];

        const index = newActiveKeys.indexOf(key);

        if (index === -1) {
          newActiveKeys.push(key);
        }
        else {
          newActiveKeys.splice(index, 1);
        }
      }

      defaultActiveKeys.value = newActiveKeys;

      context.emit("update:activeKeys", newActiveKeys);
      context.emit("change", newActiveKeys);
    };

    // 向后代组件注入当前组件
    provide(CollapseInjectionKey, reactive({
      activeKeys,
      showArrow,
      arrowAlign,
      accordion,
      clickHeaderToCollapse,
      destroyInactivePanel,
      disabled,
      onChange: handleChange
    }));

    // 计算 class 样式
    const classPrefix = useClassPrefix("collapse", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-bordered`]: props.bordered && !props.ghost,
        [`${classPrefix.value}-ghost`]: props.ghost
      }
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
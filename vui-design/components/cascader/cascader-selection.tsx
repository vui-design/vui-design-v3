import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Option, OptionKeys, Formatter } from "./types";
import { defineComponent, ref, computed } from "vue";
import { useI18n } from "../../locale";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 当前选中的选项集合
    value: {
      type: Array as PropType<Option[]>,
      default: () => []
    },
    // 选择框占位文本
    placeholder: {
      type: String as PropType<string>,
      default: undefined
    },
    // 自定义选项的 value、label、children 或 disabled 等字段
    optionKeys: {
      type: Object as PropType<OptionKeys>,
      default: () => utils.optionKeys
    },
    // 选择后展示的渲染函数，用于自定义显示格式
    formatter: {
      type: Function as PropType<Formatter>,
      default: (labels: Array<string | number>, options: Option[]) => labels.join(" / ")
    },
    // 是否支持搜索
    searchable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 当前搜索关键词
    keyword: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否允许一键清空
    clearable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 当前是否处于 hover 状态
    hovered: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 当前是否处于 focus 状态
    focused: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 当前是否处于 focus 状态
    actived: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 输入框是否为禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type CascaderProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-cascader-selection",
  props: createProps(),
  emits: ["mouseenter", "mouseleave", "focus", "blur", "click", "keydown", "input", "clear"],
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // DOM 引用
    const inputRef = ref<HTMLInputElement>();

    // 选中的选项集合的显示文本
    const text = computed(() => utils.getSelectionText(props.value, props.optionKeys, props.formatter));

    // 输入法输入状态
    const composing = ref<boolean>(false);

    // 是否显示清空按钮
    const showBtnClear = computed(() => props.clearable && props.hovered && !props.disabled && (props.keyword || props.value.length > 0));

    // 对外提供 focus、blur 等方法
    const focus = () => inputRef.value?.focus();
    const blur = () => inputRef.value?.blur();

    context.expose({
      focus,
      blur
    });

    // onMouseenter 事件回调
    const handleMouseenter = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("mouseenter", e);
    };

    // onMouseleave 事件回调
    const handleMouseleave = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("mouseleave", e);
    };
    
    // onMousedown 事件回调
    const handleMousedown = (e: MouseEvent) => {
      if (props.disabled || e.target === inputRef.value) {
        return;
      }

      focus();
      e.preventDefault();
    };

    // onFocus 事件回调
    const handleFocus = (e: FocusEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("focus", e);
    };

    // onBlur 事件回调
    const handleBlur = (e: FocusEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("blur", e);
    };

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("click", e);
    };

    // onKeydown 事件回调
    const handleKeydown = (e: KeyboardEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("keydown", e);
    };

    // onComposition 事件回调
    const handleComposition = (e: CompositionEvent) => {
      if (props.disabled) {
        return;
      }

      if (e.type === "compositionend") {
        composing.value = false;
        handleInput(e);
      }
      else {
        composing.value = true;
      }
    };

    // onInput 事件回调
    const handleInput = (e: Event) => {
      if (composing.value || props.disabled) {
        return;
      }

      context.emit("input", (e.target as HTMLInputElement).value);
    };

    // onClear 事件回调
    const handleClear = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }

      context.emit("clear", e);
      e.stopPropagation();
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("cascader-selection", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elValue = computed(() => `${classPrefix.value}-value`);
    classes.elInput = computed(() => `${classPrefix.value}-input`);
    classes.elPlaceholder = computed(() => `${classPrefix.value}-placeholder`);
    classes.elBtnClear = computed(() => `${classPrefix.value}-btn-clear`);
    classes.elArraw = computed(() => `${classPrefix.value}-arrow`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      return {
        cursor: props.disabled ? "not-allowed" : (props.searchable ? "text" : "pointer")
      };
    });
    styles.elValue = computed(() => {
      return {
        opacity: !!props.keyword ? 0 : (props.focused && props.actived ? 0.4 : 1)
      };
    });
    styles.elInput = computed(() => {
      return {
        opacity: props.focused ? 1 : 0
      };
    });
    styles.elPlaceholder = computed(() => {
      return {
        display: props.value.length === 0 ? "block" : "none",
        opacity: props.value.length === 0 ? (props.keyword ? 0 : 1) : 0
      };
    });

    // 渲染
    return () => {
      return (
        <div
          class={classes.el.value}
          style={styles.el.value}
          onMouseenter={handleMouseenter}
          onMouseleave={handleMouseleave}
          onMousedown={handleMousedown}
          onClick={handleClick}
        >
          {
            props.value.length === 0 ? null : (
              <div key="value" class={classes.elValue.value} style={styles.elValue.value}>
                {text.value}
              </div>
            )
          }
          <div key="input" class={classes.elInput.value} style={styles.elInput.value}>
            <input
              type="text"
              autocomplete="off"
              ref={inputRef}
              value={props.keyword}
              readonly={!props.searchable}
              disabled={props.disabled}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeydown={handleKeydown}
              onCompositionstart={handleComposition}
              onCompositionupdate={handleComposition}
              onCompositionend={handleComposition}
              onInput={handleInput}
            />
          </div>
          <div key="placeholder" class={classes.elPlaceholder.value} style={styles.elPlaceholder.value}>
            {props.placeholder ?? translate("cascader.placeholder")}
          </div>
          {
            showBtnClear.value ? (
              <div key="btn-clear" class={classes.elBtnClear.value} onClick={handleClear}>
                <VuiIcon type="crossmark-circle-filled" />
              </div>
            ) : (
              <div key="arrow" class={classes.elArraw.value}></div>
            )
          }
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Key } from "../../types";
import type { Option } from "./types";
import { defineComponent, ref, computed } from "vue";
import { useI18n } from "../../locale";
import VuiIcon from "../icon";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

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
    // 选择框占位文本
    placeholder: {
      type: String as PropType<string>,
      default: undefined
    },
    // 回填到选择框的选项属性值
    backfillOptionProp: {
      type: String as PropType<string>,
      default: "children"
    },
    // 是否支持多选
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 多选模式下选择框中最多显示多少个 tag 标签
    maxTagCount: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 隐藏剩余 tag 标签时显示的内容，参数为剩余数量
    maxTagPlaceholder: {
      type: Function as PropType<(count: number) => string>,
      default: (count: number) => `+${count}`
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
    // 是否允许清空
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
    // 当前是否处于禁用状态
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type SelectSelectionProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-select-selection",
  props: createProps(),
  emits: ["mouseenter", "mouseleave", "focus", "blur", "click", "keydown", "input", "deselect", "clear"],
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // DOM 引用
    const inputRef = ref<HTMLInputElement>();

    // 多选模式下的选中数量
    const count = computed(() => props.multiple ? (props.value as Option[]).length : 0);

    // 多选模式下的选中数量是否超出 maxTagCount 限制
    const overflowed = computed(() => props.multiple && is.number(props.maxTagCount) && props.maxTagCount > 0 && count.value > props.maxTagCount);

    // 输入法输入状态
    const composing = ref(false);

    // 是否显示取消选择按钮/清空按钮/下拉箭头
    const showBtnDeselect = computed(() => props.multiple && !props.disabled);
    const showBtnClear = computed(() => props.clearable && props.hovered && !props.disabled && (props.keyword || (props.multiple ? count.value > 0 : !is.undefined(props.value))));
    const showArrow = computed(() => !props.multiple);

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

    // onDeselect 事件回调
    const handleDeselect = (e: MouseEvent, option: Option) => {
      if (props.disabled) {
        return;
      }

      context.emit("deselect", option.value);
      e.stopPropagation();
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
    const classPrefix = useClassPrefix("select-selection", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elItemList = computed(() => `${classPrefix.value}-item-list`);
    classes.elItem = computed(() => `${classPrefix.value}-item`);
    classes.elItemContent = computed(() => `${classPrefix.value}-item-content`);
    classes.elItemBtnDeselect = computed(() => `${classPrefix.value}-item-btn-deselect`);
    classes.elInput = computed(() => `${classPrefix.value}-input`);
    classes.elPlaceholder = computed(() => `${classPrefix.value}-placeholder`);
    classes.elBtnClear = computed(() => `${classPrefix.value}-btn-clear`);
    classes.elArraw = computed(() => `${classPrefix.value}-arrow`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      return {
        cursor: props.disabled ? "not-allowed" : (props.focused ? "text" : "pointer")
      };
    });
    styles.elItem = computed(() => {
      return props.multiple ? undefined : {
        opacity: !!props.keyword ? 0 : (props.focused && props.actived ? 0.4 : 1)
      };
    });
    styles.elPlaceholder = computed(() => {
      return props.multiple ? {
        display: count.value === 0 ? "block" : "none",
        opacity: count.value === 0 ? (props.keyword ? 0 : 1) : 0
      } : {
        display: is.undefined(props.value) ? "block" : "none",
        opacity: is.undefined(props.value) ? (props.keyword ? 0 : 1) : "none",
      };
    });
    styles.elInput = computed(() => {
      return {
        opacity: props.focused ? 1 : 0
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
            props.multiple ? (
              <>
                {
                  (props.value as Option[]).slice(0, props.maxTagCount).map((option: Option) => {
                    return (
                      <div key={option.value as Key} class={classes.elItem.value}>
                        <div class={classes.elItemContent.value}>
                          {option[props.backfillOptionProp]}
                        </div>
                        {
                          showBtnDeselect && !option.disabled ? (
                            <div class={classes.elItemBtnDeselect.value} onClick={e => handleDeselect(e, option)}>
                              <VuiIcon type="crossmark" />
                            </div>
                          ) : null
                        }
                      </div>
                    );
                  })
                }
                {
                  overflowed.value ? (
                    <div key="maxTagPlaceholder" class={classes.elItem.value}>
                      <div class={classes.elItemContent}>
                        {props.maxTagPlaceholder(count.value - (props.maxTagCount as number))}
                      </div>
                    </div>
                  ) : null
                }
              </>
            ) : (
              is.undefined(props.value) ? null : (
                <div key={(props.value as Option).value as Key} class={classes.elItem.value} style={styles.elItem.value}>
                  <div class={classes.elItemContent.value}>
                    {props.value[props.backfillOptionProp]}
                  </div>
                </div>
              )
            )
          }
          <div key="input" class={classes.elInput.value} style={styles.elInput.value}>
            {
              props.multiple && props.searchable ? (
                <pre>{props.keyword}</pre>
              ) : null
            }
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
            {props.placeholder ?? translate("select.placeholder")}
          </div>
          {
            showBtnClear.value ? (
              <div key="btn-clear" class={classes.elBtnClear.value} onClick={handleClear}>
                <VuiIcon type="crossmark-circle-filled" />
              </div>
            ) : (
              showArrow.value ? (
                <div key="arrow" class={classes.elArraw.value}></div>
              ) : null
            )
          }
        </div>
      );
    };
  }
});
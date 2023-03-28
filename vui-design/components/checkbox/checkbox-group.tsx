import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Checkbox, Layout, Type, Size } from "./types";
import { defineComponent, provide, inject, toRefs, ref, reactive, computed, watch } from "vue";
import { layouts, types, sizes } from "./constants";
import { FormItemInjectionKey } from "../form/context";
import { CheckboxGroupInjectionKey } from "./context";
import VuiCheckbox from "../checkbox";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 原生 input[type="checkbox"] 元素名称
    name: {
      type: String as PropType<string>,
      default: undefined
    },
    // 多选组合布局方式
    layout: {
      type: String as PropType<Layout>,
      validator: (layout: Layout) => layouts.includes(layout),
      default: "horizontal"
    },
    // 多选组合样式类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 多选组合尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: undefined
    },
    // 该属性仅在 type 为 button 时有效，用于指定每个多选按钮的最小宽度
    minWidth: {
      type: String as PropType<string | number>,
      default: undefined
    },
    // 默认选中的值（非受控模式）
    defaultValue: {
      type: Array as PropType<Array<string | number>>,
      default: () => []
    },
    // 选中的值（受控模式）
    value: {
      type: Array as PropType<Array<string | number>>,
      default: undefined
    },
    // 以配置形式设置多选组合的选项列表
    options: {
      type: Array as PropType<Array<string | number | Checkbox>>,
      default: () => []
    },
    // 是否禁用多选组合
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 选中值变化时是否触发父级表单验证
    validator: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type CheckboxGroupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-checkbox-group",
  props: createProps(),
  emits: ["update:value", "change"],
  setup(props, context) {
    // 注入祖先组件
    const vuiFormItem = inject(FormItemInjectionKey, undefined);

    // 解构属性
    const { name, type, size, minWidth, disabled } = toRefs(props);

    // 选中值
    const defaultValue = ref(props.defaultValue);
    const value = computed(() => props.value ?? defaultValue.value);

    // onChange 事件回调
    const handleChange = (checked: boolean, value: string | number) => {
      let nextValue = [...defaultValue.value];

      if (checked) {
        nextValue.push(value);
      }
      else {
        nextValue.splice(nextValue.indexOf(value), 1);
      }

      defaultValue.value = nextValue;

      context.emit("update:value", nextValue);
      context.emit('change', nextValue);

      if (props.validator) {
        vuiFormItem?.onChange(nextValue);
      }
    };

    // 向后代组件注入当前组件
    provide(CheckboxGroupInjectionKey, reactive({
      name,
      type,
      size,
      minWidth,
      value,
      disabled,
      onChange: handleChange
    }));

    // 
    watch(() => props.value, newValue => {
      if (is.array(newValue)) {
        defaultValue.value = [...newValue];
      }
    }, {
      immediate: true,
      deep: true
    });

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "checkbox-group"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${props.layout}`]: true
      };
    });

    // 渲染
    return () => {
      let children;

      if (props.options && props.options.length > 0) {
        const options = props.options.map(option => {
          if (is.string(option) || is.number(option)) {
            option = {
              label: option,
              value: option
            };
          }

          return option as Checkbox;
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
            <VuiCheckbox
              key={is.boolean(option.value) ? optionIndex : option.value}
              value={option.value}
              disabled={option.disabled}
              validator={false}
            >
              {label}
            </VuiCheckbox>
          );
        });
      }
      else {
        children = context.slots.default?.();
      }

      return (
        <div class={classes.el.value}>{children}</div>
      );
    };
  }
});
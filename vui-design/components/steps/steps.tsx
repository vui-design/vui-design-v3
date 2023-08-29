import type { ExtractPropTypes, PropType, RenderFunction, ComputedRef, HTMLAttributes } from "vue";
import type { Key, Size } from "../../types";
import type { Type, Direction, Status, Step } from "./types";
import { defineComponent, cloneVNode, provide, toRefs, ref, reactive, computed } from "vue";
import { sizes } from "../../constants";
import { types, directions, statuses } from "./constants";
import { StepsInjectionKey } from "./context";
import useClassPrefix from "../../hooks/useClassPrefix";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 步骤条类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "default"
    },
    // 步骤条方向
    direction: {
      type: String as PropType<Direction>,
      validator: (direction: Direction) => directions.includes(direction),
      default: "horizontal"
    },
    // 步骤条尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 当前步骤，从 0 开始记数
    step: {
      type: Number as PropType<number>,
      default: 0
    },
    // 当前步骤的状态
    status: {
      type: String as PropType<Status>,
      validator: (status: Status) => statuses.includes(status),
      default: "process"
    },
    // 仅在步骤标题上点击时触发 change 事件，默认点击步骤标题、图标或描述时均触发；该属性仅在绑定了 onChange 事件时有效
    changeOnTitle: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 自定义点状步骤条的步骤点
    dot: {
      type: Function as PropType<RenderFunction>,
      default: undefined
    },
    // 点击步骤时触发的事件回调函数
    onChange: {
      type: Function as PropType<(step: number) => void>,
      default: undefined
    }
  };
};

export type StepsProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-steps",
  props: createProps(),
  setup(props, context) {
    // 解构属性
    const { type, step, status, changeOnTitle } = toRefs(props);

    // 是否可点击
    const clickable = computed(() => !!props.onChange);

    // 
    const dot = computed(() => context.slots?.dot ?? props.dot);

    // 用于更新内嵌的 Step 集合
    const steps = ref<Step[]>([]);
    const addStep = (step: Step) => {
      const index = steps.value.findIndex(target => target.key === step.key);

      if (index > -1) {
        steps.value.splice(index, 1, step);
      }
      else {
        steps.value.splice(step.index, 0, step);
      }
    };
    const removeStep = (key: Key) => {
      const index = steps.value.findIndex(target => target.key === key);

      if (index > -1) {
        steps.value.splice(index, 1);
      }
    };

    // 
    const handleChange = (index: Number) => {
      context.emit("change", index);
    };

    // 向后代组件注入当前组件
    provide(StepsInjectionKey, reactive({
      type,
      steps,
      step,
      status,
      clickable,
      changeOnTitle,
      dot,
      addStep,
      removeStep,
      onChange: handleChange
    }));

    // 计算 class 样式
    const classPrefix = useClassPrefix("steps", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.type}`]: props.type,
        [`${classPrefix.value}-${props.direction}`]: props.direction,
        [`${classPrefix.value}-${props.size}`]: props.size
      };
    });

    // 渲染
    return () => {
      const steps = utils.getChildren(context.slots.default?.());

      return (
        <div class={classes.el.value}>
          {
            steps?.map((step, stepIndex) => {
              return cloneVNode(step, {
                index: stepIndex
              });
            })
          }
        </div>
      );
    };
  }
});
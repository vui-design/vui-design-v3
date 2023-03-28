import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Type, Color, Placement } from "./types";
import { defineComponent, computed } from "vue";
import { getSlotProp } from "../..//utils/vue";
import { types, colors, placements } from "./constants";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 缎带类型
    type: {
      type: String as PropType<Type>,
      validator: (type: Type) => types.includes(type),
      default: "primary"
    },
    // 自定义缎带的颜色
    color: {
      type: String as PropType<string | Color>,
      default: undefined
    },
    // 缎带文本
    text: {
      type: String as PropType<string>,
      default: undefined
    },
    // 缎带位置
    placement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "right"
    }
  };
};

export type RibbonProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-ribbon",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "ribbon"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-${props.type}`]: props.type && !props.color,
        [`${className.value}-${props.color}`]: props.color && colors.includes(props.color),
        [`${className.value}-placement-${props.placement}`]: true
      };
    });
    classes.elText = computed(() => `${className.value}-text`);
    classes.elCorner = computed(() => `${className.value}-corner`);
    classes.elWrapper = computed(() => `${className.value}-wrapper`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (props.color && colors.indexOf(props.color) === -1) {
        style.backgroundColor = props.color;
        style.color = "#fff";
      }

      return style;
    });
    styles.elCorner = computed(() => {
      let style: CSSProperties = {};

      if (props.color && colors.indexOf(props.color) === -1) {
        style.color = props.color;
      }

      return style;
    });

    // 渲染
    return () => {
      let ribbon;
  
      if (context.slots.text || props.text) {
        ribbon = (
          <div class={classes.el.value} style={styles.el.value}>
            <div class={classes.elText.value}>
              {getSlotProp(context.slots, props, "text")}
            </div>
            <div class={classes.elCorner.value} style={styles.elCorner.value}></div>
          </div>
        );
      }

      return (
        <div class={classes.elWrapper.value}>
          {context.slots.default?.()}
          {ribbon}
        </div>
      );
    };
  }
});
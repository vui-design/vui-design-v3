import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Status, Color } from "./types";
import { defineComponent, computed } from "vue";
import getClassName from "../../utils/getClassName";
import { statuses, colors } from "./constants";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 徽标数值
    count: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 最大显示数值
    overflowCount: {
      type: Number as PropType<number>,
      default: 99
    },
    // 徽标文本
    text: {
      type: String as PropType<string>,
      default: undefined
    },
    // 不显示具体的数值或文本
    dot: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 设置徽标为状态点
    status: {
      type: String as PropType<Status>,
      validator: (status: Status) => statuses.includes(status),
      default: undefined
    },
    // 自定义状态点的颜色
    color: {
      type: String as PropType<string | Color>,
      default: undefined
    },
    // 设置徽标的位置偏移
    offset: {
      type: Array as PropType<Array<number>>,
      default: undefined
    },
    // 设置鼠标放在徽标上时显示的文字
    title: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type BadgeProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-badge",
  props: createProps(),
  setup(props, context) {
    // 是否独立使用
    const isAlone = computed(() => context.slots.default === undefined);

    // 是否为 status 状态点
    const isStatus = computed(() => props.status || props.color);

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "badge"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-alone`]: isAlone.value && !isStatus.value,
        [`${className.value}-status`]: isStatus.value
      };
    });
    classes.elDot = computed(() => {
      return {
        [`${className.value}-dot`]: true,
        [`${className.value}-dot-${props.status}`]: props.status,
        [`${className.value}-dot-${props.color}`]: props.color && colors.includes(props.color)
      };
    });
    classes.elCount = computed(() => `${className.value}-count`);
    classes.elText = computed(() => `${className.value}-text`);

    // 计算 style 样式
    const styles: Record<string, ComputedRef> = {};

    styles.elDot = computed(() => {
      let style: CSSProperties = {};

      if (!isAlone.value && !isStatus.value && props.offset && props.offset.length === 2) {
        const [top, left] = props.offset;

        style.top = `${top}px`;
        style.right = `${-left}px`;
      }

      if (props.color && colors.indexOf(props.color) === -1) {
        style.borderColor = style.backgroundColor = props.color;
      }

      return style;
    });

    // 渲染
    return () => {
      let children = [];

      if (!isStatus.value) {
        if (!isAlone.value) {
          children.push(context.slots.default?.());
        }

        if (props.count || props.text) {
          if (props.dot) {
            children.push(
              <sup class={classes.elDot.value} style={styles.elDot.value} title={props.title}></sup>
            );
          }
          else {
            let text;

            if (props.count) {
              text = props.count <= props.overflowCount ? props.count : `${props.overflowCount}+`;
            }
            else {
              text = props.text;
            }

            children.push(
              <sup class={props.count ? classes.elCount.value : classes.elText.value} style={styles.elDot.value} title={props.title}>
                {text}
              </sup>
            );
          }
        }
      }
      else {
        children.push(
          <i class={classes.elDot.value} style={styles.elDot.value} title={props.title}></i>
        );

        if (props.text) {
          children.push(
            <div class={classes.elText.value}>
              {props.text}
            </div>
          );
        }  
      }

      return (
        <div class={classes.el.value}>
          {children}
        </div>
      );
    };
  }
});
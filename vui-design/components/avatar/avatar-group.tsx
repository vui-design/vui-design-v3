import type { VNode, ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Trigger, Placement } from "../popup/types";
import type { Color } from "../tooltip/types";
import type { ScreenSizes } from "../../utils/responsive-observer";
import type { Shape, Size } from "./types";
import { defineComponent, provide, toRefs, reactive, computed } from "vue";
import VuiTooltip from "../tooltip";
import VuiAvatar from "../avatar";
import VuiSpace from "../space";
import getClassName from "../../utils/getClassName";
import { flatten } from "../../utils/vue";
import { triggers, placements } from "../popup/constants";
import { colors } from "../tooltip/constants";
import { shapes } from "./constants";
import { AvatarGroupInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 头像形状
    shape: {
      type: String as PropType<Shape>,
      validator: (shape: Shape) => shapes.includes(shape),
      default: "circle"
    },
    // 头像尺寸
    size: {
      type: [String, Number, Object] as PropType<Size | number | ScreenSizes>,
      default: "medium"
    },
    // 显示的最大头像个数
    maxCount: {
      type: Number as PropType<number>,
      default: undefined
    },
    // 多余头像的气泡颜色
    maxTooltipColor: {
      type: String as PropType<string | Color>,
      validator: (color: string | Color) => colors.includes(color),
      default: "light"
    },
    // 多余头像的气泡触发方式
    maxTooltipTrigger: {
      type: String as PropType<Trigger>,
      validator: (trigger: Trigger) => triggers.includes(trigger),
      default: "hover"
    },
    // 多余头像的气泡弹出位置
    maxTooltipPlacement: {
      type: String as PropType<Placement>,
      validator: (placement: Placement) => placements.includes(placement),
      default: "top"
    }
  };
};

export type AvatarGroupProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-avatar-group",
  props: createProps(),
  setup(props, context) {
    // 解构属性
    const { shape, size } = toRefs(props);

    // 最大头像个数
    const maxCount = computed(() => props.maxCount && props.maxCount > 0 ? props.maxCount : 0);

    // 向后代组件注入当前组件
    provide(AvatarGroupInjectionKey, reactive({
      shape,
      size
    }));

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "avatar-group"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);
    classes.elPlaceholder = computed(() => `${className.value}-placeholder`);

    // 渲染
    return () => {
      const avatars = flatten(context.slots.default?.());
      const overflowedCount = avatars.length - maxCount.value;
      let children = [];

      avatars.forEach((avatar: VNode, index: number) => {
        if (maxCount.value && index >= maxCount.value) {
          return;
        }

        children.push(avatar);
      });

      if (maxCount.value && overflowedCount > 0) {
        children.push(
          <VuiTooltip
            color={props.maxTooltipColor}
            trigger={props.maxTooltipTrigger}
            placement={props.maxTooltipPlacement}
            v-slots={{
              content: () => (
                <VuiSpace gutter="small">{avatars.slice(maxCount.value)}</VuiSpace>
              )
            }}
          >
            <VuiAvatar class={classes.elPlaceholder.value}>&#43;{overflowedCount}</VuiAvatar>
          </VuiTooltip>
        );
      }

      return (
        <div class={classes.el.value}>{children}</div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import VuiAvatar from "../avatar";
import useClassPrefix from "../../hooks/useClassPrefix";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 头像
    avatar: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标题
    title: {
      type: String as PropType<string>,
      default: undefined
    },
    // 描述内容
    description: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type ListItemMetaProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-list-item-meta",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const classPrefix = useClassPrefix("list-item-meta", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elAvatar = computed(() => `${classPrefix.value}-avatar`);
    classes.elContent = computed(() => `${classPrefix.value}-content`);
    classes.elTitle = computed(() => `${classPrefix.value}-title`);
    classes.elDescription = computed(() => `${classPrefix.value}-description`);

    // 渲染
    return () => {
      let children = [];

      // 头像
      let avatar;

      if (context.slots.avatar) {
        avatar = context.slots.avatar?.();
      }
      else if (props.avatar) {
        avatar = (
          <VuiAvatar src={props.avatar} />
        );
      }

      if (avatar) {
        children.push(
          <div class={classes.elAvatar.value}>
            {avatar}
          </div>
        );
      }

      // 内容
      children.push(
        <div class={classes.elContent.value}>
          <div class={classes.elTitle.value}>
            {getSlotProp(context.slots, props, "title")}
          </div>
          <div class={classes.elDescription.value}>
            {getSlotProp(context.slots, props, "description")}
          </div>
        </div>
      );

      // 
      return (
        <div class={classes.el.value}>
          {children}
        </div>
      );
    };
  }
});
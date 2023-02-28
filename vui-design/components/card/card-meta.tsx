import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, computed } from "vue";
import VuiAvatar from "../avatar";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
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
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 描述内容
    description: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    }
  };
};

export type CardMetaProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-card-meta",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "card-meta"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);
    classes.elAvatar = computed(() => `${className.value}-avatar`);
    classes.elDetail = computed(() => `${className.value}-detail`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elDescription = computed(() => `${className.value}-description`);

    // 渲染
    return () => {
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
        avatar = (
          <div class={classes.elAvatar.value}>{avatar}</div>
        );
      }

      // 详情
      let detail = (
        <div class={classes.elDetail.value}>
          <div class={classes.elTitle.value}>
            {context.slots.title?.() ?? props.title}
          </div>
          <div class={classes.elDescription.value}>
            {context.slots.description?.() ?? props.description}
          </div>
        </div>
      );

      // 
      return (
        <div class={classes.el.value}>
          {avatar}
          {detail}
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { SkeletonAvatarProps } from "./skeleton-avatar";
import type { SkeletonTitleProps } from "./skeleton-title";
import type { SkeletonParagraphProps } from "./skeleton-paragraph";
import { defineComponent, computed } from "vue";
import VuiSkeletonAvatar from "./skeleton-avatar";
import VuiSkeletonTitle from "./skeleton-title";
import VuiSkeletonParagraph from "./skeleton-paragraph";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 为 true 时，显示占位图，反之则直接展示子组件
    loading: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 是否展示动画效果
    animated: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否显示头像占位图
    avatar: {
      type: [Boolean, Object] as PropType<boolean | SkeletonAvatarProps>,
      default: false
    },
    // 是否显示标题占位图
    title: {
      type: [Boolean, Object] as PropType<boolean | SkeletonTitleProps>,
      default: true
    },
    // 是否显示段落占位图
    paragraph: {
      type: [Boolean, Object] as PropType<boolean | SkeletonParagraphProps>,
      default: true
    }
  };
};

export type SkeletonProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

const getAvatarProps = function(
  title: boolean | SkeletonTitleProps,
  paragraph: boolean | SkeletonParagraphProps
): SkeletonAvatarProps {
  if (title && !paragraph) {
    return {
      shape: "square"
    };
  }

  return {
    shape: "circle"
  };
};


const getTitleProps = function(
  avatar: boolean | SkeletonAvatarProps,
  paragraph: boolean | SkeletonParagraphProps
): SkeletonTitleProps {
  if (!avatar && paragraph) {
    return {
      width: "40%"
    };
  }

  if (avatar && paragraph) {
    return {
      width: "50%"
    };
  }

  return {};
};

const getParagraphProps = function(
  avatar: boolean | SkeletonAvatarProps,
  title: boolean | SkeletonTitleProps
): SkeletonParagraphProps {
  let result: SkeletonParagraphProps = {};

  if (!avatar || !title) {
    result.width = "60%";
  }

  if (!avatar && title) {
    result.rows = 3;
  }
  else {
    result.rows = 2;
  }

  return result;
};

const getCustomizedProps = function<T>(props: T | boolean | undefined): T | {} {
  if (is.object(props)) {
    return props;
  }

  return {};
};

export default defineComponent({
  name: "vui-skeleton",
  props: createProps(),
  setup(props, context) {

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "skeleton"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);
    classes.elHeader = computed(() => `${className.value}-header`);
    classes.elBody = computed(() => `${className.value}-body`);

    // 渲染
    return () => {
      if (props.loading === false) {
        return (
          <>{context.slots.default?.()}</>
        )
      }

      let children = [];

      if (props.avatar) {
        children.push(
          <div class={classes.elHeader.value}>
            <VuiSkeletonAvatar {...{
              classNamePrefix: props.classNamePrefix,
              animated: props.animated,
              ...getAvatarProps(props.title, props.paragraph),
              ...getCustomizedProps(props.avatar)
            }} />
          </div>
        );
      }

      if (props.title || props.paragraph) {
        let title;
  
        if (props.title) {
          title = (
            <VuiSkeletonTitle {...{
              classNamePrefix: props.classNamePrefix,
              animated: props.animated,
              ...getTitleProps(props.avatar, props.paragraph),
              ...getCustomizedProps(props.title)
            }} />
          );
        }
  
        let paragraph;
  
        if (props.paragraph) {
          paragraph = (
            <VuiSkeletonParagraph {...{
              classNamePrefix: props.classNamePrefix,
              animated: props.animated,
              ...getParagraphProps(props.avatar, props.title),
              ...getCustomizedProps(props.paragraph)
            }} />
          );
        }
  
        children.push(
          <div class={classes.elBody.value}>
            {title}
            {paragraph}
          </div>
        );
      }

      return (
        <div class={classes.el.value}>{children}</div>
      );
    };
  }
});
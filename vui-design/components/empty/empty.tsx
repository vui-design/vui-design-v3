import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent, computed } from "vue";
import { useI18n } from "../../locale";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 显示图片
    image: {
      type: String as PropType<string>,
      default: undefined
    },
    // 自定义图片样式
    imageStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义描述内容
    description: {
      type: [Boolean, String] as PropType<boolean | string>,
      default: true
    }
  };
};

export type EmptyProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-empty",
  props: createProps(),
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // 计算 class 样式
    const classPrefix = useClassPrefix("empty", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elImage = computed(() => `${classPrefix.value}-image`);
    classes.elDescription = computed(() => `${classPrefix.value}-description`);
    classes.elContent = computed(() => `${classPrefix.value}-content`);

    // 渲染
    return () => {
      let children = [];

      // 图片
      let image;

      if (context.slots.image) {
        image = context.slots.image();
      }
      else if (is.string(props.image)) {
        image = (
          <img alt="empty" src={props.image} />
        );
      }
      else {
        image = (
          <svg viewBox="0 0 64 40" xmlns="http://www.w3.org/2000/svg">
            <ellipse fill="#f5f5f5" fill-rule="evenodd" clip-rule="evenodd" cx="32" cy="33" rx="32" ry="7" />
            <path stroke="#d9d9d9" fill="none" d="M55,13.3L44.9,1.8c-0.5-0.8-1.2-1.3-1.9-1.3H21.1c-0.7,0-1.5,0.5-1.9,1.3L9,13.3v9.2h46V13.3z" />
            <path stroke="#d9d9d9" fill="#fafafa" d="M41.6,16.4c0-1.6,1-2.9,2.2-2.9H55v18.1c0,2.1-1.3,3.9-3,3.9H12c-1.6,0-3-1.7-3-3.9V13.5h11.2c1.2,0,2.2,1.3,2.2,2.9v0c0,1.6,1,2.9,2.2,2.9h14.8C40.6,19.4,41.6,18,41.6,16.4L41.6,16.4z" />
          </svg>
        );
      }

      children.push(
        <div class={classes.elImage.value} style={props.imageStyle}>
          {image}
        </div>
      );

      // 描述内容
      let description;

      if (context.slots.description) {
        description = context.slots.description();
      }
      else if (props.description) {
        description = is.boolean(props.description) ? translate("empty.description") : props.description;
      }

      if (description) {
        children.push(
          <div class={classes.elDescription.value}>
            {description}
          </div>
        );
      }

      // 附加内容
      if (context.slots.default) {
        children.push(
          <div class={classes.elContent.value}>
            {context.slots.default()}
          </div>
        );
      }

      // 
      return (
        <div class={classes.el.value}>
          {children}
        </div>
      );
    };
  }
});
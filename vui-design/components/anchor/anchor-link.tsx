import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, inject, computed, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import { getSlot, getSlotProp } from "../../utils/vue";
import { AnchorInjectionKey } from "./context";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 锚点链接
    href: {
      type: String as PropType<string>,
      default: undefined
    },
    // 文字内容
    title: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 指定在何处显示链接的资源
    target: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type AnchorLinkProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-anchor-link",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiAnchor = inject(AnchorInjectionKey, undefined);

    // 状态
    const active = computed(() => vuiAnchor?.link === props.href);

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "anchor-link"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-active`]: active.value
      };
    });
    classes.elTitle = computed(() => {
      return {
        [`${className.value}-title`]: true,
        [`${className.value}-title-active`]: active.value
      };
    });

    // 
    watch(() => props.href, (value, oldValue) => {
      nextTick(() => {
        vuiAnchor?.removeLink(oldValue as string);
        vuiAnchor?.addLink(value as string);
      });
    });

    // 
    const handleClick = (e: MouseEvent) => {
      vuiAnchor?.scrollTo(props.href as string);
      vuiAnchor?.onClick(e, {
        href: props.href,
        title: props.title,
        target: props.target
      });
    };

    // 
    onMounted(() => {
      vuiAnchor?.addLink(props.href as string);
    });

    // 
    onBeforeUnmount(() => {
      vuiAnchor?.removeLink(props.href as string);
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          <a
            href={props.href}
            target={props.target}
            class={classes.elTitle.value}
            title={is.string(props.title) ? props.title : ""}
            onClick={handleClick}
          >
            {getSlotProp(context.slots, props, "title")}
          </a>
          {getSlot(context.slots)}
        </div>
      );
    };
  }
});
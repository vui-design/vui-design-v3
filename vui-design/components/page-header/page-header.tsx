import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Breadcrumb, Tag } from "./types";
import { defineComponent, computed } from "vue";
import VuiAvatar from "../avatar";
import VuiBreadcrumb, { BreadcrumbItem as VuiBreadcrumbItem } from "../breadcrumb";
import VuiIcon from "../icon";
import VuiTag from "../tag";
import is from "../../utils/is";
import getClassName from "../../utils/getClassName";
import { getSlotProp } from "../../utils/vue";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 面包屑配置
    breadcrumb: {
      type: Array as PropType<Breadcrumb[]>,
      default: undefined
    },
    // 自定义后退按钮图标类型
    backIcon: {
      type: [String, Boolean] as PropType<string | boolean>,
      default: true
    },
    // 标题左侧的头像地址
    avatar: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标题
    title: {
      type: String as PropType<string>,
      default: undefined
    },
    // 副标题
    subTitle: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标题右侧的 Tag 列表
    tags: {
      type: Array as PropType<Tag[]>,
      default: undefined
    },
    // 操作区
    extra: {
      type: String as PropType<string>,
      default: undefined
    },
    // 底部内容
    footer: {
      type: String as PropType<string>,
      default: undefined
    },
    // 背景类型
    ghost: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 后退按钮点击事件回调
    onBack: {
      type: Function as PropType<(e: MouseEvent) => void>,
      default: undefined
    }
  };
};

export type PageHeaderProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-page-header",
  props: createProps(),
  setup(props, context) {
    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "page-header"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-with-footer`]: context.slots.footer,
        [`${className.value}-ghost`]: props.ghost
      };
    });
    classes.elBreadcrumb = computed(() => `${className.value}-breadcrumb`);
    classes.elHeader = computed(() => `${className.value}-header`);
    classes.elHeaderMain = computed(() => `${className.value}-header-main`);
    classes.elBody = computed(() => `${className.value}-body`);
    classes.elFooter = computed(() => `${className.value}-footer`);
    classes.elBack = computed(() => `${className.value}-back`);
    classes.elAvatar = computed(() => `${className.value}-avatar`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elSubTitle = computed(() => `${className.value}-sub-title`);
    classes.elTags = computed(() => `${className.value}-tags`);
    classes.elExtra = computed(() => `${className.value}-extra`);

    // 后退按钮点击事件回调
    const handleBack = (e: MouseEvent) => {
      props.onBack?.(e);
    };

    // 获取面包屑
    const getBreadcrumb = () => {
      if (!context.slots.breadcrumb && !is.array(props.breadcrumb)) {
        return;
      }

      return (
        <div class={classes.elBreadcrumb.value}>
          {
            context.slots.breadcrumb ? context.slots.breadcrumb() : (
              <VuiBreadcrumb>
                {
                  props.breadcrumb!.map((item: Breadcrumb, index: number) => {
                    const attributes = {
                      key: index,
                      icon: item.icon,
                      href: item.href,
                      target: item.target
                    };

                    return (
                      <VuiBreadcrumbItem {...attributes}>{item.title}</VuiBreadcrumbItem>
                    );
                  })
                }
              </VuiBreadcrumb>
            )
          }
        </div>
      );
    };

    // 获取头部内容
    const getHeader = () => {
      // 后退按钮
      let backIcon;

      if (props.backIcon) {
        backIcon = (
          <div class={classes.elBack.value} onClick={handleBack}>
            {
              context.slots.backIcon ? context.slots.backIcon() : (
                <VuiIcon type={is.boolean(props.backIcon) ? "arrow-left" : props.backIcon} />
              )
            }
          </div>
        );
      }

      // 头像
      let avatar;

      if (context.slots.avatar || props.avatar) {
        avatar = (
          <div class={classes.elAvatar.value}>
            {
              context.slots.avatar ? context.slots.avatar() : (
                <VuiAvatar src={props.avatar} />
              )
            }
          </div>
        );
      }

      // 标题
      let title;

      if (context.slots.title || props.title) {
        title = (
          <div class={classes.elTitle.value}>
            {getSlotProp(context.slots, props, "title")}
          </div>
        );
      }

      // 副标题
      let subTitle;

      if (context.slots.subTitle || props.subTitle) {
        subTitle = (
          <div class={classes.elSubTitle.value}>
            {getSlotProp(context.slots, props, "subTitle")}
          </div>
        );
      }

      // 标签
      let tags;

      if (context.slots.tags || props.tags) {
        tags = (
          <div class={classes.elTags.value}>
            {
              context.slots.tags ? context.slots.tags() : props.tags!.map((tag: Tag, index: number) => {
                return (
                  <VuiTag key={index} color={tag.color}>{tag.title}</VuiTag>
                );
              })
            }
          </div>
        );
      }

      // 操作区
      let extra;

      if (context.slots.extra || props.extra) {
        extra = (
          <div class={classes.elExtra.value}>
            {getSlotProp(context.slots, props, "extra")}
          </div>
        );
      }

      return (
        <div class={classes.elHeader.value}>
          <div class={classes.elHeaderMain.value}>
            {backIcon}
            {avatar}
            {title}
            {subTitle}
            {tags}
          </div>
          {extra}
        </div>
      );
    };

    // 获取内容
    const getBody = () => {
      if (!context.slots.default) {
        return;
      }

      return (
        <div class={classes.elBody.value}>
          {context.slots.default()}
        </div>
      );
    };

    // 获取底部内容
    const getFooter = () => {
      if (!context.slots.footer && !props.footer) {
        return;
      }

      return (
        <div class={classes.elFooter.value}>
          {getSlotProp(context.slots, props, "footer")}
        </div>
      );
    };

    // 渲染
    return () => {
      const breadcrumb = getBreadcrumb();
      const header = getHeader();
      const body = getBody();
      const footer = getFooter();

      return (
        <div class={classes.el.value}>
          {breadcrumb}
          {header}
          {body}
          {footer}
        </div>
      );
    };
  }
});
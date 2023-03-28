import type { VNode, ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Shadow } from "./types";
import { defineComponent, provide, ref, reactive, computed } from "vue";
import { flatten } from "../../utils/vue";
import { shadows, gridCardLoadingBlocks } from "./constants";
import { CardInjectionKey } from "./context";
import VuiIcon from "../icon";
import VuiRow from "../row";
import VuiCol from "../col";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 卡片图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 卡片标题
    title: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 卡片右上角的操作区域
    extra: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 卡片封面
    cover: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否具有边框
    bordered: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 卡片阴影
    shadow: {
      type: String as PropType<Shadow>,
      validator: (shadow: Shadow) => shadows.includes(shadow),
      default: "never"
    },
    // 是否为加载状态
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 自定义头部区域样式
    headerStyle: {
      type: [String, Object] as PropType<string | CSSProperties>,
      default: undefined
    },
    // 自定义内容区域样式
    bodyStyle: {
      type: [String, Object] as PropType<string | CSSProperties>,
      default: undefined
    },
    // 自定义底部区域样式
    footerStyle: {
      type: [String, Object] as PropType<string | CSSProperties>,
      default: undefined
    }
  };
};

export type CardProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-card",
  props: createProps(),
  setup(props, context) {
    // 向后代组件注入当前组件
    const gridRefs = ref<string[]>([]);
    const addGridRef = (id: string) => gridRefs.value.push(id);
    const removeGridRef = (id: string) => gridRefs.value.splice(gridRefs.value.indexOf(id), 1);

    provide(CardInjectionKey, reactive({
      addGridRef,
      removeGridRef
    }));

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "card"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-bordered`]: props.bordered,
        [`${className.value}-shadow-${props.shadow}`]: props.shadow,
        [`${className.value}-with-grid`]: gridRefs.value.length > 0
      };
    });
    classes.elHeader = computed(() => `${className.value}-header`);
    classes.elIcon = computed(() => `${className.value}-icon`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elExtra = computed(() => `${className.value}-extra`);
    classes.elCover = computed(() => `${className.value}-cover`);
    classes.elBody = computed(() => `${className.value}-body`);
    classes.elLoading = computed(() => `${className.value}-loading`);
    classes.elLoadingBlock = computed(() => `${className.value}-loading-block`);
    classes.elActions = computed(() => `${className.value}-actions`);
    classes.elAction = computed(() => `${className.value}-action`);
    classes.elActionDivider = computed(() => `${className.value}-action-divider`);
    classes.elFooter = computed(() => `${className.value}-footer`);

    // 渲染
    return () => {
      // 头部区域
      let header;
      let icon;
      let title = context.slots.title?.() ?? props.title;
      let extra = context.slots.extra?.() ?? props.extra;

      if (context.slots.icon) {
        icon = context.slots.icon?.();
      }
      else if (props.icon) {
        icon = (
          <VuiIcon type={props.icon} />
        );
      }

      if (icon || title || extra) {
        header = (
          <div class={classes.elHeader.value} style={props.headerStyle}>
            {
              !icon ? null : (
                <div class={classes.elIcon.value}>{icon}</div>
              )
            }
            {
              !title ? null : (
                <div class={classes.elTitle.value}>{title}</div>
              )
            }
            {
              !extra ? null : (
                <div class={classes.elExtra.value}>{extra}</div>
              )
            }
          </div>
        );
      }

      // 封面
      let cover;

      if (context.slots.cover) {
        cover = context.slots.cover?.();
      }
      else if (props.cover) {
        cover = (
          <img src={props.cover} />
        );
      }

      if (cover) {
        cover = (
          <div class={classes.elCover.value}>
            {cover}
          </div>
        );
      }

      // 内容区域
      let body = (
        <div class={classes.elBody.value} style={props.bodyStyle}>
          {
            !props.loading ? context.slots.default?.() : (
              <div class={classes.elLoading.value}>
                {
                  gridCardLoadingBlocks.map((row: number[]) => {
                    return (
                      <VuiRow gutter={8}>
                        {
                          row.map((col: number) => {
                            return (
                              <VuiCol span={col}>
                                <div class={classes.elLoadingBlock.value}></div>
                              </VuiCol>
                            );
                          })
                        }
                      </VuiRow>
                    );
                  })
                }
              </div>
            )
          }
        </div>
      );

      // 操作组
      let actions;

      if (context.slots.actions) {
        const children = flatten(context.slots.actions?.());
        let kids: any[] = [];

        children.forEach((child: VNode, index: number) => {
          if (index > 0) {
            kids.push(
              <i class={classes.elActionDivider.value} />
            );
          }

          kids.push(
            <div class={classes.elAction.value}>{child}</div>
          );
        })

        actions = (
          <div class={classes.elActions.value}>
            {kids}
          </div>
        );
      }

      // 底部区域
      let footer;

      if (context.slots.footer) {
        footer = (
          <div class={classes.elFooter.value} style={props.footerStyle}>
            {context.slots.footer?.()}
          </div>
        );
      }

      // 
      return (
        <div class={classes.el.value}>
          {header}
          {cover}
          {body}
          {actions}
          {footer}
        </div>
      );
    };
  }
});
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Layout, Grid } from "./types";
import { defineComponent, provide, toRefs, reactive, computed, isVNode } from "vue";
import { flatten } from "../../utils/vue";
import { sizes } from "../../constants";
import { layouts } from "./constants";
import { ListInjectionKey } from "./context";
import VuiSpin from "../spin";
import VuiEmpty from "../empty";
import VuiRow from "../row";
import VuiCol from "../col";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 设置 ListItem 项目布局
    layout: {
      type: String as PropType<Layout>,
      validator: (layout: Layout) => layouts.includes(layout),
      default: "horizontal"
    },
    // 列表尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 是否显示边框
    bordered: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否显示分割线
    split: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 当内容还在加载中时，可以用 loading 展示一个占位
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 列表栅格配置
    grid: {
      type: Object as PropType<Grid>,
      default: undefined
    },
    // 列表数据，需要和 item 插槽同时使用
    data: {
      type: Array as PropType<any[]>,
      default: undefined
    },
    // 列表数据为空时的描述内容
    emptyText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 列表头部内容
    header: {
      type: String as PropType<string>,
      default: undefined
    },
    // 列表底部内容
    footer: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type ListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-list",
  props: createProps(),
  setup(props, context) {
    // 解构属性
    const { layout } = toRefs(props);

    // 向后代组件注入当前组件
    provide(ListInjectionKey, reactive({
      layout
    }));

    // 计算 class 样式
    const classPrefix = useClassPrefix("list", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.layout}`]: props.layout,
        [`${classPrefix.value}-${props.size}`]: props.size,
        [`${classPrefix.value}-bordered`]: props.bordered && !props.grid,
        [`${classPrefix.value}-split`]: props.split,
        [`${classPrefix.value}-grid`]: props.grid
      };
    });
    classes.elHeader = computed(() => `${classPrefix.value}-header`);
    classes.elBody = computed(() => `${classPrefix.value}-body`);
    classes.elEmpty = computed(() => `${classPrefix.value}-empty`);
    classes.elMore = computed(() => `${classPrefix.value}-more`);
    classes.elFooter = computed(() => `${classPrefix.value}-footer`);

    // 渲染
    return () => {
      let children = [];

      // 头部区域
      if (context.slots.header || props.header) {
        children.push(
          <div class={classes.elHeader.value}>
            {context.slots.header?.() ?? props.header}
          </div>
        );
      }

      // 内容区域
      const data: any[] = context.slots.default ? flatten(context.slots.default()) : props.data as any[];
      let content;

      if (data && data.length > 0) {
        if (props.grid) {
          const { gutter = 16, span, xs, sm, md, lg, xl, xxl, xxxl } = props.grid;

          content = (
            <VuiRow gutter={is.array(gutter) ? gutter : [gutter, gutter]}>
              {
                data.map((item, index) => {
                  return (
                    <VuiCol span={span} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} xxxl={xxxl}>
                      {isVNode(item) ? item : context.slots.item?.({ item, index })}
                    </VuiCol>
                  );
                })
              }
            </VuiRow>
          );
        }
        else {
          content = data.map((item, index) => isVNode(item) ? item : context.slots.item?.({ item, index }));
        }
      }
      else {
        content = (
          <VuiEmpty class={classes.elEmpty.value} description={props.emptyText} />
        );
      }

      children.push(
        <VuiSpin spinning={props.loading}>
          <div class={classes.elBody.value}>
            {content}
          </div>
        </VuiSpin>
      );

      // 加载更多操作栏
      if (context.slots.more) {
        children.push(
          <div class={classes.elMore.value}>
            {context.slots.more?.()}
          </div>
        );
      }

      // 底部区域
      if (context.slots.footer || props.footer) {
        children.push(
          <div class={classes.elFooter.value}>
            {context.slots.footer?.() ?? props.footer}
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
import type { VNode, ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import { defineComponent, inject, computed } from "vue";
import { flatten } from "../../utils/vue";
import { ListInjectionKey } from "./context";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    }
  };
};

export type ListItemProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-list-item",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiList = inject(ListInjectionKey, undefined);

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "list-item"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${className.value}`);
    classes.elMain = computed(() => `${className.value}-main`);
    classes.elActions = computed(() => `${className.value}-actions`);
    classes.elAction = computed(() => `${className.value}-action`);
    classes.elActionDivider = computed(() => `${className.value}-action-divider`);
    classes.elExtra = computed(() => `${className.value}-extra`);

    // 渲染
    return () => {
      let children = [];

      // 操作组
      const elements = flatten(context.slots.actions?.());
      let actions: any[] = [];

      elements.forEach((element: VNode, index: number) => {
        if (index > 0) {
          actions.push(
            <i class={classes.elActionDivider.value} />
          );
        }

        actions.push(
          <div class={classes.elAction.value}>
            {element}
          </div>
        );
      });

      // 
      if (vuiList?.layout === "vertical") {
        children.push(
          <div class={classes.elMain.value}>
            {context.slots.default?.()}
            {
              actions.length === 0 ? null : (
                <div class={classes.elActions.value}>
                  {actions}
                </div>
              )
            }
          </div>
        );
      }
      else {
        children.push(context.slots.default?.());

        if (actions.length > 0) {
          children.push(
            <div class={classes.elActions.value}>
              {actions}
            </div>
          );
        }
      }

      // 额外内容
      if (context.slots.extra) {
        children.push(
          <div class={classes.elExtra.value}>
            {context.slots.extra?.()}
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
import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent, inject, computed } from "vue";
import { DropdownInjectionKey } from "../dropdown/context";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 分割线距离两侧内容的间隔
    gutter: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 是否虚线
    dashed: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type MenuItemDividerProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-menu-item-divider",
  props: createProps(),
  setup(props, context) {
    // 注入祖先组件
    const vuiDropdown = inject(DropdownInjectionKey, undefined);

    // 计算 class 样式
    const classPrefix = useClassPrefix(vuiDropdown ? "dropdown-menu-item-divider" : "menu-item-divider", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-dashed`]: props.dashed
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (props.gutter) {
        style.marginTop = style.marginBottom = is.string(props.gutter) ? props.gutter : `${props.gutter}px`;
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <div class={classes.el.value} style={styles.el.value}></div>
      );
    };
  }
});
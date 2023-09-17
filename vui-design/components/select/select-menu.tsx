import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Option } from "./types";
import { defineComponent, ref, computed } from "vue";
import VuiSelectMenuItemGroup from "./select-menu-item-group";
import VuiSelectMenuItem from "./select-menu-item";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import getStyle from "../../utils/getStyle";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 当前选中的选项或选项列表
    value: {
      type: [Object, Array] as PropType<Option | Option[]>,
      default: undefined
    },
    // 当前激活的选项
    activedValue: {
      type: Object as PropType<Option>,
      default: undefined
    },
    // 选项列表
    items: {
      type: Array as PropType<Option[]>,
      default: () => []
    },
    // 是否支持多选
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 当前是否处于可见状态
    visible: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type SelectMenuProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-select-menu",
  props: createProps(),
  emits: ["preselect", "select", "deselect"],
  setup(props, context) {
    // DOM 引用
    const wrapperRef = ref<HTMLDivElement>();

    // onScroll 事件回调
    const handleScroll = (e: UIEvent) => {

    };

    // onMenuItemMouseenter 事件回调
    const handleMenuItemMouseenter = (value: string | number | boolean) => {
      context.emit("preselect", value);
    };

    // onMenuItemClick 事件回调
    const handleMenuItemClick = (value: string | number | boolean) => {
      if (props.multiple) {
        const index = (props.value as Option[]).findIndex(target => target.value === value);

        if (index === -1) {
          context.emit("select", value);
        }
        else {
          context.emit("deselect", value);
        }
      }
      else {
        context.emit("select", value);
      }
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("select-menu", props);
    let classes: Record<string, ComputedRef> = {};

    classes.elWrapper = computed(() => `${classPrefix.value}-wrapper`);
    classes.el = computed(() => `${classPrefix.value}`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      // if (pagination.pageable) {
      //   return {
      //     height: (props.options.length * pagination.averageSize) + "px",
      //     paddingTop: (pagination.range[0] * pagination.averageSize) + "px"
      //   };
      // }
    });

    // 渲染
    return () => {
      return (
        <div ref={wrapperRef} class={classes.elWrapper.value} onScroll={handleScroll}>
          <div class={classes.el.value} style={styles.el.value}>
            {
              props.items.map(item => {
                if (item.type === "option-group") {
                  return (
                    <VuiSelectMenuItemGroup
                      key={item.key}
                      classPrefix={props.classPrefix}
                      level={item.level}
                      label={item.label}
                      disabled={item.disabled}
                    />
                  );
                }
                else if (item.type === "option" || item.type === "keyword") {
                  let actived = props.activedValue?.value === item.value;
                  let selected = false;
                  let disabled = item.disabled;

                  if (props.multiple) {
                    if (props.value && (props.value as Option[]).length > 0) {
                      selected = (props.value as Option[]).findIndex(target => target.value === item.value) > -1;
                    }
                  }
                  else {
                    if (props.value) {
                      selected = (props.value as Option).value === item.value;
                    }
                  }

                  return (
                    <VuiSelectMenuItem
                      key={item.key}
                      classPrefix={props.classPrefix}
                      type={item.type}
                      level={item.level}
                      value={item.value}
                      label={item.label}
                      children={item.children}
                      actived={actived}
                      selected={selected}
                      disabled={disabled}
                      onMouseenter={handleMenuItemMouseenter}
                      onClick={handleMenuItemClick}
                    />
                  );
                }
              })
            }
          </div>
        </div>
      );
    };
  }
});
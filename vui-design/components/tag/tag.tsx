import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { Size, Color } from "./types";
import { defineComponent, ref, computed } from "vue";
import { sizes, colors } from "./constants";
import VuiIcon from "../icon";
import getClassName from "../../utils/getClassName";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标签尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 自定义标签的颜色
    color: {
      type: String as PropType<string | Color>,
      default: "default"
    },
    // 标签图标类型
    icon: {
      type: String as PropType<string>,
      default: undefined
    },
    // 标签是否可以选择
    checkable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 默认是否选中
    defaultChecked: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否选中
    checked: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 标签是否可以关闭
    closable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 默认是否可见
    defaultVisible: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 是否可见
    visible: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type TagProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-tag",
  props: createProps(),
  emits: ["click", "update:checked", "check", "update:visible", "close"],
  setup(props, context) {
    // 选中状态（defaultChecked 非受控模式，checked 受控模式）
    const defaultChecked = ref(props.defaultChecked);
    const checked = computed(() => props.checked ?? defaultChecked.value);
    
    // 可见状态（defaultVisible 非受控模式，visible 受控模式）
    const defaultVisible = ref(props.defaultVisible);
    const visible = computed(() => props.visible ?? defaultVisible.value);

    // onClick 事件回调
    const handleClick = (e: MouseEvent) => {
      context.emit("click", e);

      if (!props.checkable) {
        return;
      }

      const newChecked = !checked.value;

      defaultChecked.value = newChecked;

      context.emit("update:checked", newChecked);
      context.emit("check", newChecked);
    };

    // onClose 事件回调
    const handleClose = (e: MouseEvent) => {
      e.stopPropagation();

      if (!props.closable) {
        return;
      }

      defaultVisible.value = false;

      context.emit("update:visible", false);
      context.emit("close", e);
    };

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "tag"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      const checkedStatus = checked.value ? "checked" : "unchecked";

      return {
        [`${className.value}`]: true,
        [`${className.value}-${props.size}`]: props.size,
        [`${className.value}-${props.color}`]: props.color && colors.includes(props.color),
        [`${className.value}-${checkedStatus}`]: props.checkable
      };
    });
    classes.elIcon = computed(() => `${className.value}-icon`);
    classes.elBtnClose = computed(() => `${className.value}-btn-close`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if ((props.color && colors.indexOf(props.color) === -1) && (!props.checkable || checked.value)) {
        style.borderColor = style.backgroundColor = props.color;
        style.color = "#fff";
      }

      return style;
    });

    // 渲染
    return () => {
      if (props.closable && !visible.value) {
        return;
      }

      // 图标
      let icon;

      if (context.slots.icon || props.icon) {
        icon = (
          <div class={classes.elIcon.value}>
            {
              context.slots.icon ? context.slots.icon() : (
                <VuiIcon type={props.icon} />
              )
            }
          </div>
        );
      }

      // 关闭按钮
      let btnClose;

      if (props.closable) {
        btnClose = (
          <div class={classes.elBtnClose.value} onClick={handleClose}>
            <VuiIcon type="crossmark" />
          </div>
        );
      }

      // 
      return (
        <div class={classes.el.value} style={styles.el.value} onClick={handleClick}>
          {icon}
          <label>{context.slots.default?.()}</label>
          {btnClose}
        </div>
      );
    }
  }
});
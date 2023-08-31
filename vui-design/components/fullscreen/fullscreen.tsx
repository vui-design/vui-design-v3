import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import { defineComponent, ref, computed, watch, nextTick } from "vue";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import fullscreen from "../../utils/fullscreen";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 默认是否全屏（非受控模式）
    defaultEnabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 当前是否全屏（受控模式）
    enabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type FullscreenProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-fullscreen",
  props: createProps(),
  emits: ["update:enabled", "change"],
  setup(props, context) {
    // DOM 引用
    const containerRef = ref<HTMLDivElement>();

    // 是否为受控模式
    const isControlled = useControlled("enabled");

    // 全屏状态（defaultEnabled 非受控模式，enabled 受控模式）
    const defaultEnabled = ref(props.defaultEnabled);
    const enabled = computed(() => isControlled.value ? props.enabled : defaultEnabled.value);

    // 进入全屏
    const enter = () => {
      if (!containerRef.value) {
        return;
      }

      fullscreen.addEventListener(handleFullscreenChange);
      fullscreen.enter(containerRef.value);
    };

    // 退出全屏
    const leave = () => {
      fullscreen.leave();
    };

    // 进入全屏/退出全屏
    const toggle = (newEnabled: boolean | undefined) => {
      const fullscreenElement = fullscreen.getElement();

      if (fullscreenElement !== containerRef.value && newEnabled) {
        enter();
      }
      else if (fullscreenElement === containerRef.value && !newEnabled) {
        leave();
      }
    };

    // 监听 enabled 属性变化
    watch(enabled, newEnabled => {
      nextTick(() => toggle(newEnabled));
    }, {
      immediate: true
    });

    // onFullscreenChange 事件回调
    const handleFullscreenChange = () => {
      const fullscreenElement = fullscreen.getElement();
      const newEnabled = fullscreenElement === containerRef.value;

      if (!newEnabled) {
        fullscreen.removeEventListener(handleFullscreenChange);
      }

      if (newEnabled !== enabled.value) {
        handleChange(newEnabled);
      }
    };

    // onChange 事件回调
    const handleChange = (newEnabled: boolean) => {
      if (!isControlled.value) {
        defaultEnabled.value = newEnabled;
      }

      context.emit("update:enabled", newEnabled);
      context.emit("change", newEnabled);
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("fullscreen", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-enabled`]: enabled.value
      };
    });

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.el = computed(() => {
      let style: CSSProperties = {};

      if (enabled.value) {
        style.width = style.height = "100%";
        style.overflowY = "auto";
      }

      return style;
    });

    // 渲染
    return () => {
      return (
        <div ref={containerRef} class={classes.el.value} style={styles.el.value}>
          {context.slots.default?.()}
        </div>
      );
    };
  }
});
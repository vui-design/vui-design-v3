import type { App, Plugin, PropType } from "vue";
import type { Size } from "../../types";
import type { SpinWrapperProps, Indicator } from "./types";
import { createVNode, render, defineComponent, ref } from 'vue';
import { sizes } from "../../constants";
import Spin from "./spin";
import usePopupManager from "../../hooks/usePopupManager";
import is from "../../utils/is";

const createSpin = (properties: SpinWrapperProps) => {
  const { getPopupContainer, ...props } = properties;
  const container = is.function(getPopupContainer) ? getPopupContainer() : document.body;
  const component = defineComponent({
    name: "vui-spin-wapper",
    props: {
      visible: {
        type: Boolean as PropType<boolean>,
        default: true
      },
      size: {
        type: String as PropType<Size>,
        validator: (size: Size) => sizes.includes(size),
        default: "large"
      },
      background: {
        type: String as PropType<string>,
        default: undefined
      },
      delay: {
        type: Number as PropType<number>,
        default: undefined
      },
      indicator: {
        type: Function as PropType<Indicator>,
        default: undefined
      },
      message: {
        type: String as PropType<string>,
        default: undefined
      },
      animation: {
        type: String as PropType<string>,
        default: "vui-spin-fade"
      }
    },
    setup(props, context) {
      const visible = ref(props.visible);
      const size = ref(props.size);
      const background = ref(props.background);
      const delay = ref(props.delay);
      const indicator = ref(props.indicator);
      const message = ref(props.message);
      const animation = ref(props.animation);

      const { zIndex } = usePopupManager("popup", { visible });

      const update = (next: SpinWrapperProps) => {
        if (!is.string(next) && !is.object(next)) {
          return;
        }

        if (is.string(next)) {
          next = {
            message: next
          };
        }

        if (is.boolean(next.visible)) {
          visible.value = next.visible;
        }

        if (is.string(next.size)) {
          size.value = next.size;
        }

        if (is.string(next.background)) {
          background.value = next.background;
        }

        if (is.number(next.delay)) {
          delay.value = next.delay;
        }

        if (is.function(next.indicator)) {
          indicator.value = next.indicator;
        }

        if (is.string(next.message)) {
          message.value = next.message;
        }

        if (is.string(next.animation)) {
          animation.value = next.animation;
        }
      };

      const cancel = () => {
        visible.value = false;
      };

      const handleOpen = () => {

      };

      const handleClose = () => {
        render(null, container);
      };

      context.expose({
        update,
        cancel
      });

      return () => {
        const attributes = {
          visible: visible.value,
          fullscreen: true,
          size: size.value,
          delay: delay.value,
          indicator: indicator.value,
          message: message.value,
          animation: animation.value,
          style: {
            zIndex: zIndex.value,
            background: background.value
          },
          onOpen: handleOpen,
          onClose: handleClose
        };

        return (
          <Spin {...attributes} />
        );
      };
    }
  });

  const vm = createVNode(component, props);

  render(vm, container);

  return vm.component?.exposed;
};

Spin.spinning = function(config: string | SpinWrapperProps = "") {
  if (is.server) {
    return;
  }

  if (!is.string(config) && !is.object(config)) {
    return;
  }

  if (is.string(config)) {
    config = {
      message: config
    };
  }

  return createSpin(config);
};

Spin.install = function(app: App) {
  app.component(Spin.name, Spin);
  app.config.globalProperties.$spin = Spin;

  return app;
};

export type { SpinProps } from "./spin";

export { createProps as createSpinProps } from "./spin";

export default Spin as typeof Spin & Plugin;
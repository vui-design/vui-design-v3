import withInstall from "../../utils/withInstall";
import VuiDescriptions from "./src/descriptions";
import PropTypes from "../../utils/prop-types";
import utils from "./src/utils";

const VuiDescriptionsWrapper = {
  name: VuiDescriptions.name,
  components: {
    VuiDescriptions
  },
  props: {
    classNamePrefix: PropTypes.string,
    layout: PropTypes.oneOf(["horizontal", "vertical"]).def("horizontal"),
    layoutStyle: PropTypes.oneOf(["auto", "fixed"]),
    bordered: PropTypes.bool.def(false),
    size: PropTypes.oneOf(["small", "medium", "large"]).def("medium"),
    columns: PropTypes.number.def(3),
    colon: PropTypes.bool,
    labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    labelAlign: PropTypes.oneOf(["left", "center", "right"]),
    title: PropTypes.any,
    extra: PropTypes.any
  },
  render() {
    const { $slots: slots, $props: props } = this;
    const attributes = {
      props: {
        ...props,
        title: slots.title ? slots.title() : props.title,
        extra: slots.extra ? slots.extra() : props.extra,
        data: utils.getDataFromChildren(slots.default())
      }
    };

    return (
      <VuiDescriptions {...attributes} />
    );
  }
};

export default withInstall(VuiDescriptionsWrapper);
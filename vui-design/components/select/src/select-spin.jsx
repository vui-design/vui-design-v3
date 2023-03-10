import VuiSpin from "../../spin";
import Locale from "../../../mixins/locale";
import PropTypes from "../../../utils/prop-types";
import getClassNamePrefix from "../../../utils/getClassName";

const VuiSelectSpin = {
  name: "vui-select-spin",
  components: {
    VuiSpin
  },
  mixins: [
    Locale
  ],
  props: {
    classNamePrefix: PropTypes.string,
    loadingText: PropTypes.string
  },
  render(h) {
    const { $props: props, t: translate } = this;

    // loadingText
    const loadingText = props.loadingText || translate("vui.select.loading");

    // class
    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "spin");
    let classes = {};

    classes.el = `${classNamePrefix}`;
    classes.elMessage = `${classNamePrefix}-message`;

    // render
    return (
      <div class={classes.el}>
        <VuiSpin size="small" />
        <div class={classes.elMessage}>{loadingText}</div>
      </div>
    );
  }
};

export default VuiSelectSpin;
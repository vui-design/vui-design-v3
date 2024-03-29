import VuiLazyRender from "../../lazy-render";
import VuiCheckboxGroup from "../../checkbox/checkbox-group";
import VuiCheckbox from "../../checkbox";
import VuiRadioGroup from "../../radio/radio-group";
import VuiRadio from "../../radio";
import Portal from "../../../directives/portal";
import Outclick from "../../../directives/outclick";
import Locale from "../../../mixins/locale";
import Popup from "../../../libs/popup";
import PropTypes from "../../../utils/prop-types";
import is from "../../../utils/is";
import clone from "../../../utils/clone";
import getEventTarget from "../../../utils/getEventTarget";

const VuiTableFilter = {
  name: "vui-table-filter",
  inject: {
    vuiTable: {
      default: undefined
    },
    vuiTableThead: {
      default: undefined
    }
  },
  components: {
    VuiLazyRender,
    VuiCheckboxGroup,
    VuiCheckbox,
    VuiRadioGroup,
    VuiRadio
  },
  directives: {
    Portal,
    Outclick
  },
  mixins: [
    Locale
  ],
  props: {
    classNamePrefix: PropTypes.string.def("vui-table"),
    options: PropTypes.array.def([]),
    multiple: PropTypes.bool.def(true),
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
    locale: PropTypes.object,
    placement: PropTypes.oneOf(["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]).def("bottom-end"),
    animation: PropTypes.string.def("vui-table-column-filter-dropdown-slide"),
    getPopupContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).def(() => document.body)
  },
  data() {
    const { $props: props } = this;
    const state = {
      visible: false,
      value: props.multiple ? clone(props.value) : props.value
    };

    return {
      state
    };
  },
  watch: {
    value(value) {
      const { $props: props } = this;

      this.state.value = props.multiple ? clone(value) : value;
    }
  },
  methods: {
    createPopup() {
      if (is.server) {
        return;
      }

      if (this.popup) {
        return;
      }

      const { $refs: refs, $props: props } = this;
      const reference = refs.trigger;
      const target = refs.dropdown;
      const settings = {
        placement: props.placement
      };

      if (!reference || !target || !settings.placement) {
        return;
      }

      this.popup = new Popup(reference, target, settings);
      this.popup.target.style.zIndex = Popup.nextZIndex();
    },
    destroyPopup() {
      if (is.server) {
        return;
      }

      if (!this.popup) {
        return;
      }

      this.popup.destroy();
      this.popup = null;
    },
    handleToggle(e) {
      e.stopPropagation();

      this.state.visible = !this.state.visible;
    },
    handleClose(e) {
      const { $el: el, $refs: references, $props: props } = this;
      const target = getEventTarget(e);

      if (!target || !references.dropdown) {
        return;
      }

      if (!el.contains(references.dropdown) && references.dropdown.contains(e.target)) {
        return;
      }

      this.state.visible = false;
      this.state.value = props.multiple ? clone(props.value) : props.value;
    },
    handleChange(value) {
      this.state.value = value;
    },
    handleConfirm(e) {
      const { $props: props, state } = this;

      this.state.visible = false;
      this.state.value = props.multiple ? clone(state.value) : state.value;
      this.$emit("change", props.multiple ? clone(this.state.value) : this.state.value);
    },
    handleClear(e) {
      const { $props: props } = this;

      this.state.visible = false;
      this.state.value = props.multiple ? [] : undefined;
      this.$emit("change", props.multiple ? clone(this.state.value) : this.state.value);
    },
    handleBeforeEnter(el) {
      this.$nextTick(() => this.createPopup());
    },
    handleAfterLeave(el) {
      this.$nextTick(() => this.destroyPopup());
    }
  },
  render() {
    const { $props: props, state, t: translate } = this;
    const { handleToggle, handleClose, handleChange, handleConfirm, handleClear, handleBeforeEnter, handleAfterLeave } = this;
    const portal = props.getPopupContainer();

    // locale
    const btnConfirmText = props.locale && props.locale.confirm ? props.locale.confirm : translate("vui.table.confirm");
    const btnClearText = props.locale && props.locale.clear ? props.locale.clear : translate("vui.table.clear");

    // class
    let classes = {};

    classes.el = `${props.classNamePrefix}-column-filter`;
    classes.elTrigger = {
      [`${props.classNamePrefix}-column-filter-trigger`]: true,
      [`open`]: state.visible,
      [`active`]: props.multiple ? state.value.length : state.value
    };
    classes.elDropdown = `${props.classNamePrefix}-column-filter-dropdown`;
    classes.elDropdownBody = `${props.classNamePrefix}-column-filter-dropdown-body`;
    classes.elDropdownFooter = `${props.classNamePrefix}-column-filter-dropdown-footer`;

    // render
    return (
      <div class={classes.el} v-outclick={handleClose}>
        <div ref="trigger" class={classes.elTrigger} onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
            <path d="M0 0h1024L624.390244 462.04878v561.95122l-224.780488-112.390244V449.560976L0 0z m0 0"></path>
          </svg>
        </div>
        <VuiLazyRender render={state.visible}>
          <transition appear name={props.animation} onBeforeEnter={handleBeforeEnter} onAfterLeave={handleAfterLeave}>
            <div ref="dropdown" v-portal={portal} v-show={state.visible} class={classes.elDropdown}>
              <div class={classes.elDropdownBody}>
                {
                  props.multiple ? (
                    <VuiCheckboxGroup layout="vertical" value={state.value} validator={false} onChange={handleChange}>
                      {
                        props.options.map(option => {
                          return (
                            <VuiCheckbox key={option.value} value={option.value} label={option.label} />
                          );
                        })
                      }
                    </VuiCheckboxGroup>
                  ) : (
                    <VuiRadioGroup layout="vertical" value={state.value} validator={false} onChange={handleChange}>
                      {
                        props.options.map(option => {
                          return (
                            <VuiRadio key={option.value} value={option.value} label={option.label} />
                          );
                        })
                      }
                    </VuiRadioGroup>
                  )
                }
              </div>
              <div class={classes.elDropdownFooter}>
                <a href="javascript:;" onClick={handleConfirm}>{btnConfirmText}</a>
                <a href="javascript:;" onClick={handleClear}>{btnClearText}</a>
              </div>
            </div>
          </transition>
        </VuiLazyRender>
      </div>
    );
  }
};

export default VuiTableFilter;
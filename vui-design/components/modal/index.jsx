import withInstall from "../../utils/withInstall";
import VuiIcon from "../icon";
import VuiModal from "./src/modal";
import createChainedFunction from "../../utils/createChainedFunction";
import is from "../../utils/is";
import getClassNamePrefix from "../../utils/getClassName";

/**
* 默认配置
*/
const defaults = {
  width: 360,
  autofocusButton: "ok",
  getPopupContainer: () => document.body
};

/**
* 创建 Modal 实例
* @param {Object} options 
*/
const createModalInstance = function(options) {
  // 创建 Modal 挂载的 html 根节点
  const container = options.getPopupContainer();
  const el = document.createElement("div");

  container.appendChild(el);

  // 上述已创建 Modal 挂载的 html 根节点，这里对 getPopupContainer 选项进行重置，避免在组件实例化后又进行一次挂载
  options.getPopupContainer = false;

  // 创建 Modal 实例
  return new Vue({
    el,
    components: {
      VuiModal
    },
    data() {
      return {
        ...options,
        visible: false
      };
    },
    methods: {
      open() {
        this.visible = true;
      },
      close() {
        this.visible = false;
      },
      update(options) {
        if (!is.json(options)) {
          return;
        }

        for(let key in options) {
          this[key] = options[key];
        }
      },
      handleBeforeOpen() {

      },
      handleOpen() {

      },
      handleAfterOpen() {

      },
      handleBeforeClose() {

      },
      handleClose() {

      },
      handleAfterClose() {
        this.$destroy();
        this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
      }
    },
    render(h) {
      const { type, icon, visible, showCancelButton, cancelButtonProps, cancelText, cancelAsync, showOkButton, okButtonProps, okText, okAsync, autofocusButton, top, centered, width, className, headerStyle, bodyStyle, footerStyle, backdrop, backdropClassName, animations, getPopupContainer } = this;

      const beforeOpen = createChainedFunction(this.handleBeforeOpen.bind(this), this.beforeOpen || this.onBeforeOpen);
      const open = createChainedFunction(this.handleOpen.bind(this), this.open || this.onOpen);
      const afterOpen = createChainedFunction(this.handleAfterOpen.bind(this), this.afterOpen || this.onAfterOpen);
      const beforeClose = createChainedFunction(this.handleBeforeClose.bind(this), this.beforeClose || this.onBeforeClose);
      const close = createChainedFunction(this.handleClose.bind(this), this.close || this.onClose);
      const afterClose = createChainedFunction(this.handleAfterClose.bind(this), this.afterClose || this.onAfterClose);

      // attrs
      let attrs = {
        props: {
          visible,
          showNotice: true,
          showCancelButton,
          cancelButtonProps,
          cancelText,
          cancelAsync,
          showOkButton,
          okButtonProps,
          okText,
          okAsync,
          autofocusButton,
          closable: false,
          top,
          centered,
          width,
          className,
          headerStyle,
          bodyStyle,
          footerStyle,
          backdrop,
          backdropClassName,
          clickBackdropToClose: false,
          animations,
          getPopupContainer
        },
        on: {
          beforeOpen,
          open,
          afterOpen,
          beforeClose,
          close,
          afterClose
        }
      };

      if (is.function(this.cancel)) {
        attrs.on.cancel = this.cancel;
      }
      else if (is.function(this.onCancel)) {
        attrs.on.cancel = this.onCancel;
      }

      if (is.function(this.ok)) {
        attrs.on.ok = this.ok;
      }
      else if (is.function(this.onOk)) {
        attrs.on.ok = this.onOk;
      }

      // title
      const title = is.function(this.title) ? this.title(h) : this.title;

      // description
      const description = is.function(this.description) ? this.description(h) : this.description;

      // class
      const classNamePrefix = getClassNamePrefix(this.classNamePrefix, "modal-notice");
      let classes = {};

      classes.elNotice = {
        [`${classNamePrefix}`]: true,
        [`${classNamePrefix}-${type}`]: type
      };
      classes.elNoticeTitle = `${classNamePrefix}-title`;
      classes.elNoticeDescription = `${classNamePrefix}-description`;
      classes.elNoticeIcon = `${classNamePrefix}-icon`;

      // render
      return (
        <VuiModal {...attrs}>
          <div class={classes.elNotice}>
            <div class={classes.elNoticeIcon}>
              <VuiIcon type={icon} />
            </div>
            <div class={classes.elNoticeTitle}>{title}</div>
            {
              description && (
                <div class={classes.elNoticeDescription}>{description}</div>
              )
            }
          </div>
        </VuiModal>
      );
    }
  });
};

/**
* 对外提供 open 接口
* @param {String/Function/Object} options 
*/
VuiModal.open = function(options, type) {
  if (is.server || !is.json(options)) {
    return;
  }

  options = {
    ...defaults,
    ...options
  };

  if (type === "info") {
    options.type = type;
    options.icon = "info";
    options.showCancelButton = false;
    options.showOkButton = true;
  }
  else if (type === "warning") {
    options.type = type;
    options.icon = "warning";
    options.showCancelButton = false;
    options.showOkButton = true;
  }
  else if (type === "success") {
    options.type = type;
    options.icon = "checkmark-circle";
    options.showCancelButton = false;
    options.showOkButton = true;
  }
  else if (type === "error") {
    options.type = type;
    options.icon = "crossmark-circle";
    options.showCancelButton = false;
    options.showOkButton = true;
  }
  else if (type === "confirm") {
    options.type = type;
    options.icon = "help";
    options.showCancelButton = true;
    options.showOkButton = true;
  }

  const instance = createModalInstance(options);

  instance.open();

  return instance;
};

/**
* 对外提供 info 接口
* @param {Object} options 
*/
VuiModal.info = function(options) {
  return VuiModal.open(options, "info");
};

/**
* 对外提供 warning 接口
* @param {Object} options 
*/
VuiModal.warning = function(options) {
  return VuiModal.open(options, "warning");
};

/**
* 对外提供 success 接口
* @param {Object} options 
*/
VuiModal.success = function(options) {
  return VuiModal.open(options, "success");
};

/**
* 对外提供 error 接口
* @param {Object} options 
*/
VuiModal.error = function(options) {
  return VuiModal.open(options, "error");
};

/**
* 对外提供 confirm 接口
* @param {Object} options 
*/
VuiModal.confirm = function(options) {
  return VuiModal.open(options, "confirm");
};

/**
* 对外提供 install 接口，用于全局注册
* @param {Function} Vue 
*/
VuiModal.install = function(Vue) {
  Vue.component(VuiModal.name, VuiModal);
};

export default withInstall(VuiModal);
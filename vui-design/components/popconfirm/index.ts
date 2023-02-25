import type { App, Plugin } from "vue";
import Popconfirm from "./popconfirm";

Popconfirm.install = function(app: App) {
  app.component(Popconfirm.name, Popconfirm);

  return app;
};

export type { PopconfirmProps } from "./popconfirm";

export { createProps as createPopconfirmProps } from "./popconfirm";

export default Popconfirm as typeof Popconfirm & Plugin;
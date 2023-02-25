import type { App, Plugin } from "vue";
import Divider from "./divider";

Divider.install = function(app: App) {
  app.component(Divider.name, Divider);

  return app;
};

export type { DividerProps } from "./divider";

export { createProps as createDividerProps } from "./divider";

export default Divider as typeof Divider & Plugin;
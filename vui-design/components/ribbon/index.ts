import type { App, Plugin } from "vue";
import Ribbon from "./ribbon";

Ribbon.install = function(app: App) {
  app.component(Ribbon.name, Ribbon);

  return app;
};

export type { RibbonProps } from "./ribbon";

export { createProps as createRibbonProps } from "./ribbon";

export default Ribbon as typeof Ribbon & Plugin;
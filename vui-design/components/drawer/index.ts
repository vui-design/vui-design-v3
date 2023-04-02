import type { App, Plugin } from "vue";
import Drawer from "./drawer";

Drawer.install = function(app: App) {
  app.component(Drawer.name, Drawer);

  return app;
};

export type { DrawerProps } from "./drawer";

export { createProps as createDrawerProps } from "./drawer";

export default Drawer as typeof Drawer & Plugin;
import type { App, Plugin } from "vue";
import Switch from "./switch";

Switch.install = function(app: App) {
  app.component(Switch.name, Switch);

  return app;
};

export type { SwitchProps } from "./switch";

export { createProps as createSwitchProps } from "./switch";

export default Switch as typeof Switch & Plugin;
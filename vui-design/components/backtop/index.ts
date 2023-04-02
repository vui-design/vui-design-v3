import type { App, Plugin } from "vue";
import Backtop from "./backtop";

Backtop.install = function(app: App) {
  app.component(Backtop.name, Backtop);

  return app;
};

export type { BacktopProps } from "./backtop";

export { createProps as createBacktopProps } from "./backtop";

export default Backtop as typeof Backtop & Plugin;
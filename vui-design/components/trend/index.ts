import type { App, Plugin } from "vue";
import Trend from "./trend";

Trend.install = function(app: App) {
  app.component(Trend.name, Trend);

  return app;
};

export type { TrendProps } from "./trend";

export { createProps as createTrendProps } from "./trend";

export default Trend as typeof Trend & Plugin;
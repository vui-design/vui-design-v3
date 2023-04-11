import type { App, Plugin } from "vue";
import Rate from "./rate";

Rate.install = function(app: App) {
  app.component(Rate.name, Rate);

  return app;
};

export type { RateProps } from "./rate";

export { createProps as createRateProps } from "./rate";

export default Rate as typeof Rate & Plugin;
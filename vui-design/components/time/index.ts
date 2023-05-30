import type { App, Plugin } from "vue";
import Time from "./time";

Time.install = function(app: App) {
  app.component(Time.name, Time);

  return app;
};

export type { TimeProps } from "./time";

export { createProps as createTimeProps } from "./time";

export default Time as typeof Time & Plugin;
import type { App, Plugin } from "vue";
import Progress from "./progress";

Progress.install = function(app: App) {
  app.component(Progress.name, Progress);

  return app;
};

export type { ProgressProps } from "./progress";

export { createProps as createProgressProps } from "./progress";

export default Progress as typeof Progress & Plugin;
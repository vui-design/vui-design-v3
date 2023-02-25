import type { App, Plugin } from "vue";
import Tooltip from "./tooltip";

Tooltip.install = function(app: App) {
  app.component(Tooltip.name, Tooltip);

  return app;
};

export type { TooltipProps } from "./tooltip";

export { createProps as createTooltipProps } from "./tooltip";

export default Tooltip as typeof Tooltip & Plugin;
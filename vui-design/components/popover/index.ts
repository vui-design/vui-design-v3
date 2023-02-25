import type { App, Plugin } from "vue";
import Popover from "./popover";

Popover.install = function(app: App) {
  app.component(Popover.name, Popover);

  return app;
};

export type { PopoverProps } from "./popover";

export { createProps as createPopoverProps } from "./popover";

export default Popover as typeof Popover & Plugin;
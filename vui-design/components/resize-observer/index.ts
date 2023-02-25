import type { App, Plugin } from "vue";
import ResizeObserver from "./resize-observer";

ResizeObserver.install = function(app: App) {
  app.component(ResizeObserver.name, ResizeObserver);

  return app;
};

export type { ResizeObserverProps } from "./resize-observer";

export { createProps as createResizeObserverProps } from "./resize-observer";

export default ResizeObserver as typeof ResizeObserver & Plugin;
import type { App, Plugin } from "vue";
import LazyRender from "./lazy-render";

LazyRender.install = function(app: App) {
  app.component(LazyRender.name, LazyRender);

  return app;
};

export type { LazyRenderProps } from "./lazy-render";

export { createProps as createLazyRenderProps } from "./lazy-render";

export default LazyRender as typeof LazyRender & Plugin;
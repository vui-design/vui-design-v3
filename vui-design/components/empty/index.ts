import type { App, Plugin } from "vue";
import Empty from "./empty";

Empty.install = function(app: App) {
  app.component(Empty.name, Empty);

  return app;
};

export type { EmptyProps } from "./empty";

export { createProps as createEmptyProps } from "./empty";

export default Empty as typeof Empty & Plugin;
import type { App, Plugin } from "vue";
import Space from "./space";

Space.install = function(app: App) {
  app.component(Space.name, Space);

  return app;
};

export type { SpaceProps } from "./space";

export { createProps as createSpaceProps } from "./space";

export default Space as typeof Space & Plugin;
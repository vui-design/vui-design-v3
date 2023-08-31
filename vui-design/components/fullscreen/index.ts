import type { App, Plugin } from "vue";
import Fullscreen from "./fullscreen";

Fullscreen.install = function(app: App) {
  app.component(Fullscreen.name, Fullscreen);

  return app;
};

export type { FullscreenProps } from "./fullscreen";

export { createProps as createFullscreenProps } from "./fullscreen";

export default Fullscreen as typeof Fullscreen & Plugin;
import type { App, Plugin } from "vue";
import Icon from "./icon";

Icon.install = function(app: App) {
  app.component(Icon.name, Icon);

  return app;
};

export type { IconProps } from "./icon";

export { createProps as createIconProps } from "./icon";

export default Icon as typeof Icon & Plugin;
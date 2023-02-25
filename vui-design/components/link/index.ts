import type { App, Plugin } from "vue";
import Link from "./link";

Link.install = function(app: App) {
  app.component(Link.name, Link);

  return app;
};

export type { LinkProps } from "./link";

export { createProps as createLinkProps } from "./link";

export default Link as typeof Link & Plugin;
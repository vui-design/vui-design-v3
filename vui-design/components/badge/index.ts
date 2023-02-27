import type { App, Plugin } from "vue";
import Badge from "./badge";

Badge.install = function(app: App) {
  app.component(Badge.name, Badge);

  return app;
};

export type { BadgeProps } from "./badge";

export { createProps as createBadgeProps } from "./badge";

export default Badge as typeof Badge & Plugin;
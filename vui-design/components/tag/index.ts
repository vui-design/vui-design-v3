import type { App, Plugin } from "vue";
import Tag from "./tag";

Tag.install = function(app: App) {
  app.component(Tag.name, Tag);

  return app;
};

export type { TagProps } from "./tag";

export { createProps as createTagProps } from "./tag";

export default Tag as typeof Tag & Plugin;
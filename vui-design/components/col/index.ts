import type { App, Plugin } from "vue";
import Col from "../grid/col";

Col.install = function(app: App) {
  app.component(Col.name, Col);

  return app;
};

export type { ColProps } from "../grid/col";

export { createProps as createColProps } from "../grid/col";

export default Col as typeof Col & Plugin;
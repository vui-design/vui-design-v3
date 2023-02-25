import type { App, Plugin } from "vue";
import Row from "../grid/row";

Row.install = function(app: App) {
  app.component(Row.name, Row);

  return app;
};

export type { RowProps } from "../grid/row";

export { createProps as createRowProps } from "../grid/row";

export default Row as typeof Row & Plugin;
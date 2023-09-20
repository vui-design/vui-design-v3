import type { App, Plugin } from "vue";
import Pagination from "./pagination";

Pagination.install = function(app: App) {
  app.component(Pagination.name, Pagination);

  return app;
};

export type { PaginationProps } from "./pagination";

export { createProps as createPaginationProps } from "./pagination";

export default Pagination as typeof Pagination & Plugin;
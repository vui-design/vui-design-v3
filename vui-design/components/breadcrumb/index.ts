import type { App, Plugin } from "vue";
import Breadcrumb from "./breadcrumb";
import BreadcrumbItem from "./breadcrumb-item";

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.install = function(app: App) {
  app.component(Breadcrumb.name, Breadcrumb);
  app.component(BreadcrumbItem.name, BreadcrumbItem);

  return app;
};

export type { BreadcrumbProps } from "./breadcrumb";
export type { BreadcrumbItemProps } from "./breadcrumb-item";

export { createProps as createBreadcrumbProps } from "./breadcrumb";
export { createProps as createBreadcrumbItemProps } from "./breadcrumb-item";

export { BreadcrumbItem };
export default Breadcrumb as typeof Breadcrumb & Plugin & {
  readonly Item: typeof BreadcrumbItem;
};
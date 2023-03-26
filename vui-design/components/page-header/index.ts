import type { App, Plugin } from "vue";
import PageHeader from "./page-header";

PageHeader.install = function(app: App) {
  app.component(PageHeader.name, PageHeader);

  return app;
};

export type { PageHeaderProps } from "./page-header";

export { createProps as createPageHeaderProps } from "./page-header";

export default PageHeader as typeof PageHeader & Plugin;
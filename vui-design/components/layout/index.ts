import type { App, Plugin } from "vue";
import Layout from "./layout";
import LayoutHeader from "./layout-header";
import LayoutSider from "./layout-sider";
import LayoutContent from "./layout-content";
import LayoutFooter from "./layout-footer";

Layout.Header = LayoutHeader;
Layout.Sider = LayoutSider;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;
Layout.install = function(app: App) {
  app.component(Layout.name, Layout);
  app.component(LayoutHeader.name, LayoutHeader);
  app.component(LayoutSider.name, LayoutSider);
  app.component(LayoutContent.name, LayoutContent);
  app.component(LayoutFooter.name, LayoutFooter);

  return app;
};

export type { LayoutProps } from "./layout";
export type { LayoutHeaderProps } from "./layout-header";
export type { LayoutSiderProps } from "./layout-sider";
export type { LayoutContentProps } from "./layout-content";
export type { LayoutFooterProps } from "./layout-footer";

export { createProps as createLayoutProps } from "./layout";
export { createProps as createLayoutHeaderProps } from "./layout-header";
export { createProps as createLayoutSiderProps } from "./layout-sider";
export { createProps as createLayoutContentProps } from "./layout-content";
export { createProps as createLayoutFooterProps } from "./layout-footer";

export { LayoutHeader, LayoutSider, LayoutContent, LayoutFooter };
export default Layout as typeof Layout & Plugin & {
  readonly Header: typeof LayoutHeader;
  readonly Sider: typeof LayoutSider;
  readonly Content: typeof LayoutContent;
  readonly Footer: typeof LayoutFooter;
};
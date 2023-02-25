import type { App, Plugin } from "vue";
import Layout from "./layout";
import Header from "./header";
import Sider from "./sider";
import Content from "./content";
import Footer from "./footer";

Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.install = function(app: App) {
  app.component(Layout.name, Layout);
  app.component(Header.name, Header);
  app.component(Sider.name, Sider);
  app.component(Content.name, Content);
  app.component(Footer.name, Footer);

  return app;
};

export type { LayoutProps } from "./layout";
export type { SiderProps } from "./sider";
export type { HeaderProps } from "./header";
export type { ContentProps } from "./content";
export type { FooterProps } from "./footer";

export { createProps as createLayoutProps } from "./layout";
export { createProps as createHeaderProps } from "./header";
export { createProps as createSiderProps } from "./sider";
export { createProps as createContentProps } from "./content";
export { createProps as createFooterProps } from "./content";

export { Header, Sider, Content, Footer };
export default Layout as typeof Layout & Plugin & {
  readonly Header: typeof Header;
  readonly Sider: typeof Sider;
  readonly Content: typeof Content;
  readonly Footer: typeof Footer;
};
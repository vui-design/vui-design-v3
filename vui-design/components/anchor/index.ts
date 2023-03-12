import type { App, Plugin } from "vue";
import Anchor from "./anchor";
import AnchorLink from "./anchor-link";

Anchor.Link = AnchorLink;
Anchor.install = function(app: App) {
  app.component(Anchor.name, Anchor);
  app.component(AnchorLink.name, AnchorLink);

  return app;
};

export type { AnchorProps } from "./anchor";
export type { AnchorLinkProps } from "./anchor-link";

export { createProps as createAnchorProps } from "./anchor";
export { createProps as createAnchorLinkProps } from "./anchor-link";

export { AnchorLink };
export default Anchor as typeof Anchor & Plugin & {
  readonly Link: typeof AnchorLink;
};
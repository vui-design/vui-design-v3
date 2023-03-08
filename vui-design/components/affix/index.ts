import type { App, Plugin } from "vue";
import Affix from "./affix";

Affix.install = function(app: App) {
  app.component(Affix.name, Affix);

  return app;
};

export type { AffixProps } from "./affix";

export { createProps as createAffixProps } from "./affix";

export default Affix as typeof Affix & Plugin;
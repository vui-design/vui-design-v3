import type { App, Plugin } from "vue";
import Authorizer from "./authorizer";

Authorizer.install = function(app: App) {
  app.component(Authorizer.name, Authorizer);

  return app;
};

export type { AuthorizerProps } from "./authorizer";

export { createProps as createAuthorizerProps } from "./authorizer";

export default Authorizer as typeof Authorizer & Plugin;
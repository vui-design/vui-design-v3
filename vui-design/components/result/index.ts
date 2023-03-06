import type { App, Plugin } from "vue";
import Result from "./result";

Result.install = function(app: App) {
  app.component(Result.name, Result);

  return app;
};

export type { ResultProps } from "./result";

export { createProps as createResultProps } from "./result";

export default Result as typeof Result & Plugin;
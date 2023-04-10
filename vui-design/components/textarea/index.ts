import type { App, Plugin } from "vue";
import Textarea from "./textarea";

Textarea.install = function(app: App) {
  app.component(Textarea.name, Textarea);

  return app;
};

export type { TextareaProps } from "./textarea";

export { createProps as createTextareaProps } from "./textarea";

export default Textarea as typeof Textarea & Plugin;
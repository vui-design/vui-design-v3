import type { App, Plugin } from "vue";
import Alert from "./alert";

Alert.install = function(app: App) {
  app.component(Alert.name, Alert);

  return app;
};

export type { AlertProps } from "./alert";

export { createProps as createAlertProps } from "./alert";

export default Alert as typeof Alert & Plugin;
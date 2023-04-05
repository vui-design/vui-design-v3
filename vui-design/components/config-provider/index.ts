import type { App, Plugin } from "vue";
import ConfigProvider from "./config-provider";

ConfigProvider.install = function(app: App) {
  app.component(ConfigProvider.name, ConfigProvider);

  return app;
};

export type { ConfigProviderProps } from "./config-provider";

export { createProps as createConfigProviderProps } from "./config-provider";

export default ConfigProvider as typeof ConfigProvider & Plugin;
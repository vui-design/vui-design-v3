// This file is not used if use https://github.com/ant-design/babel-plugin-import
if (typeof console !== "undefined" && console.warn && typeof window !== "undefined") {
  console.warn("You are using a whole package of Vui Design, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.");
}

import type { App } from "vue";
import pkg from "../package.json";
import locale from "./locale";
import * as components from "./components";

const install = function(app: App) {
  Object.keys(components).forEach(key => {
    const component = components[key];

    if (component.install) {
      app.use(component);
    }
  });

  return app;
};

export * from "./components";

export default {
  version: pkg.version,
  install,
  addI18nMessages: locale.addI18nMessages,
  getLocale: locale.getLocale,
  useLocale: locale.useLocale
};
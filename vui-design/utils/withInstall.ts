import type { App, Plugin } from "vue";

export default function withInstall<T>(component: T) {
  const c: any = component as any;

  c.install = function(app: App) {
    app.component(c.displayName || c.name, component);
  };

  return component as T & Plugin;
};
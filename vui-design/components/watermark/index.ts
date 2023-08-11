import type { App, Plugin } from "vue";
import Watermark from "./watermark";

Watermark.install = function(app: App) {
  app.component(Watermark.name, Watermark);

  return app;
};

export type { WatermarkFontType } from "./watermark";
export type { WatermarkProps } from "./watermark";

export { createProps as createWatermarkProps } from "./watermark";

export default Watermark as typeof Watermark & Plugin;
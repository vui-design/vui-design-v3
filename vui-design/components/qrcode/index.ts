import type { App, Plugin } from "vue";
import Qrcode from "./qrcode";

Qrcode.install = function(app: App) {
  app.component(Qrcode.name, Qrcode);

  return app;
};

export type { QrcodeProps } from "./qrcode";

export { createProps as createQrcodeProps } from "./qrcode";

export default Qrcode as typeof Qrcode & Plugin;
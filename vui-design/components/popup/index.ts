import type { App, Plugin } from "vue";
import Popup from "./popup";

Popup.install = function(app: App) {
  app.component(Popup.name, Popup);

  return app;
};

export type { PopupProps } from "./popup";

export { createProps as createPopupProps } from "./popup";

export default Popup as typeof Popup & Plugin;
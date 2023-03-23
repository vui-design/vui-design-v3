import type { App, Plugin } from "vue";
import Dropdown from "./dropdown";
import DropdownButton from "./dropdown-button";

Dropdown.Button = DropdownButton;
Dropdown.install = function(app: App) {
  app.component(Dropdown.name, Dropdown);
  app.component(DropdownButton.name, DropdownButton);

  return app;
};

export type { DropdownProps } from "./dropdown";
export type { DropdownButtonProps } from "./dropdown-button";

export { createProps as createDropdownProps } from "./dropdown";
export { createProps as createDropdownButtonProps } from "./dropdown-button";

export { DropdownButton };
export default Dropdown as typeof Dropdown & Plugin & {
  readonly Button: typeof DropdownButton;
};
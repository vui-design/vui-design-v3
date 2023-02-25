import type { App, Plugin } from "vue";
import Button from "./button";
import ButtonGroup from "./button-group";

Button.Group = ButtonGroup;
Button.install = function(app: App) {
  app.component(Button.name, Button);
  app.component(ButtonGroup.name, ButtonGroup);

  return app;
};

export type { ButtonProps } from "./button";
export type { ButtonGroupProps } from "./button-group";

export { createProps as createButtonProps } from "./button";
export { createProps as createButtonGroupProps } from "./button-group";

export { ButtonGroup };
export default Button as typeof Button & Plugin & {
  readonly Group: typeof ButtonGroup;
};
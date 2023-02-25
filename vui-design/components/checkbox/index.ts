import type { App, Plugin } from "vue";
import Checkbox from "./checkbox";
import CheckboxGroup from "./checkbox-group";

Checkbox.Group = CheckboxGroup;
Checkbox.install = function(app: App) {
  app.component(Checkbox.name, Checkbox);
  app.component(CheckboxGroup.name, CheckboxGroup);

  return app;
};

export type { CheckboxProps } from "./checkbox";
export type { CheckboxGroupProps } from "./checkbox-group";

export { createProps as createCheckboxProps } from "./checkbox";
export { createProps as createCheckboxGroupProps } from "./checkbox-group";

export { CheckboxGroup };
export default Checkbox as typeof Checkbox & Plugin & {
  readonly Group: typeof CheckboxGroup;
};
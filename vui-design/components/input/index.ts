import type { App, Plugin } from "vue";
import Input from "./input";
import InputGroup from "./input-group";

Input.Group = InputGroup;
Input.install = function(app: App) {
  app.component(Input.name, Input);
  app.component(InputGroup.name, InputGroup);

  return app;
};

export type { InputProps } from "./input";
export type { InputGroupProps } from "./input-group";

export { createProps as createInputProps } from "./input";
export { createProps as createInputGroupProps } from "./input-group";

export { InputGroup };
export default Input as typeof Input & Plugin & {
  readonly Group: typeof InputGroup;
};
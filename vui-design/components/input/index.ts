import type { App, Plugin } from "vue";
import Input from "./input";
import InputNumber from "./input-number";
import InputPassword from "./input-password";
import InputSearch from "./input-search";
import InputGroup from "./input-group";

Input.Number = InputNumber;
Input.Password = InputPassword;
Input.Search = InputSearch;
Input.Group = InputGroup;
Input.install = function(app: App) {
  app.component(Input.name, Input);
  app.component(InputNumber.name, InputNumber);
  app.component(InputPassword.name, InputPassword);
  app.component(InputSearch.name, InputSearch);
  app.component(InputGroup.name, InputGroup);

  return app;
};

export type { InputProps } from "./input";
export type { InputNumberProps } from "./input-number";
export type { InputPasswordProps } from "./input-password";
export type { InputSearchProps } from "./input-search";
export type { InputGroupProps } from "./input-group";

export { createProps as createInputProps } from "./input";
export { createProps as createInputNumberProps } from "./input-number";
export { createProps as createInputPasswordProps } from "./input-password";
export { createProps as createInputSearchProps } from "./input-search";
export { createProps as createInputGroupProps } from "./input-group";

export { InputNumber, InputPassword, InputSearch, InputGroup };
export default Input as typeof Input & Plugin & {
  readonly Number: typeof InputNumber;
  readonly Password: typeof InputPassword;
  readonly Search: typeof InputSearch;
  readonly Group: typeof InputGroup;
};
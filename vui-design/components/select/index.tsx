import type { App, Plugin } from "vue";
import Select from "./select-wrapper";
import Option from "./option";
import OptionGroup from "./option-group";

export type { SelectProps } from "./select";
export type { OptionProps } from "./option";
export type { OptionGroupProps } from "./option-group";

export { createProps as createSelectProps } from "./select";
export { createProps as createOptionProps } from "./option";
export { createProps as createOptionGroupProps } from "./option-group";

Select.Option = Option;
Select.OptionGroup = OptionGroup;
Select.install = function(app: App) {
  app.component(Select.name, Select);
  app.component(Option.name as string, Option);
  app.component(OptionGroup.name as string, OptionGroup);

  return app;
};

export { Option, OptionGroup };
export default Select as typeof Select & Plugin & {
  readonly Option: typeof Option;
  readonly OptionGroup: typeof OptionGroup;
};
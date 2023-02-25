import type { App, Plugin } from "vue";
import Radio from "./radio";
import RadioGroup from "./radio-group";

Radio.Group = RadioGroup;
Radio.install = function(app: App) {
  app.component(Radio.name, Radio);
  app.component(RadioGroup.name, RadioGroup);

  return app;
};

export type { RadioProps } from "./radio";
export type { RadioGroupProps } from "./radio-group";

export { createProps as createRadioProps } from "./radio";
export { createProps as createRadioGroupProps } from "./radio-group";

export { RadioGroup };
export default Radio as typeof Radio & Plugin & {
  readonly Group: typeof RadioGroup;
};
import type { App, Plugin } from "vue";
import Descriptions from "./descriptions";
import Description from "./description";

Descriptions.Description = Description;
Descriptions.install = function(app: App) {
  app.component(Descriptions.name, Descriptions);
  app.component(Description.name, Description);

  return app;
};

export type { DescriptionsProps } from "./descriptions";
export type { DescriptionProps } from "./description";

export { createProps as createDescriptionsProps } from "./descriptions";
export { createProps as createDescriptionProps } from "./description";

export { Description };
export default Descriptions as typeof Descriptions & Plugin & {
  readonly Description: typeof Description;
};
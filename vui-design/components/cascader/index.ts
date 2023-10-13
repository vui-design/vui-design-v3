import type { App, Plugin } from "vue";
import Cascader from "./cascader";

Cascader.install = function(app: App) {
  app.component(Cascader.name, Cascader);

  return app;
};

export type { CascaderProps } from "./cascader";
export type { Option as CascaderOption, OptionKeys as CascaderOptionKeys, Trigger as CascaderTrigger, Formatter as CascaderFormatter, Filter as CascaderFilter, FilterOptionProp as CascaderFilterOptionProp, Placement as CascaderPlacement } from "./types";

export { createProps as createCascaderProps } from "./cascader";
 
export default Cascader as typeof Cascader & Plugin;
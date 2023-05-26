import type { App, Plugin } from "vue";
import Collapse from "./collapse";
import CollapsePanel from "./collapse-panel";

Collapse.Panel = CollapsePanel;
Collapse.install = function(app: App) {
  app.component(Collapse.name, Collapse);
  app.component(CollapsePanel.name, CollapsePanel);

  return app;
};

export type { CollapseProps } from "./collapse";
export type { CollapsePanelProps } from "./collapse-panel";

export { createProps as createCollapseProps } from "./collapse";
export { createProps as createCollapsePanelProps } from "./collapse-panel";

export { CollapsePanel };
export default Collapse as typeof Collapse & Plugin & {
  readonly Panel: typeof CollapsePanel;
};
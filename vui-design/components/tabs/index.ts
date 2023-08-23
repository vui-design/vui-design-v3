import type { App, Plugin } from "vue";
import Tabs from "./tabs";
import TabPanel from "./tab-panel";

Tabs.Panel = TabPanel;
Tabs.install = function(app: App) {
  app.component(Tabs.name, Tabs);
  app.component(TabPanel.name, TabPanel);

  return app;
};

export type { TabsProps } from "./tabs";
export type { TabPanelProps } from "./tab-panel";

export { createProps as createTabsProps } from "./tabs";
export { createProps as createTabPanelProps } from "./tab-panel";

export { TabPanel };
export default Tabs as typeof Tabs & Plugin & {
  readonly Panel: typeof TabPanel;
};
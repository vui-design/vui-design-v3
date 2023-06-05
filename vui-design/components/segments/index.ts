import type { App, Plugin } from "vue";
import Segments from "./segments";
import SegmentsItem from "./segments-item";

Segments.Item = SegmentsItem;
Segments.install = function(app: App) {
  app.component(Segments.name, Segments);
  app.component(SegmentsItem.name, SegmentsItem);

  return app;
};

export type { SegmentsProps } from "./segments";
export type { SegmentsItemProps } from "./segments-item";

export { createProps as createSegmentsProps } from "./segments";
export { createProps as createSegmentsItemProps } from "./segments-item";

export { SegmentsItem };
export default Segments as typeof Segments & Plugin & {
  readonly Item: typeof SegmentsItem;
};
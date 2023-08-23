import type { App, Plugin } from "vue";
import Timeline from "./timeline";
import TimelineItem from "./timeline-item";

Timeline.Item = TimelineItem;
Timeline.install = function(app: App) {
  app.component(Timeline.name, Timeline);
  app.component(TimelineItem.name, TimelineItem);

  return app;
};

export type { TimelineProps } from "./timeline";
export type { TimelineItemProps } from "./timeline-item";

export { createProps as createTimelineProps } from "./timeline";
export { createProps as createTimelineItemProps } from "./timeline-item";

export { TimelineItem };
export default Timeline as typeof Timeline & Plugin & {
  readonly Item: typeof TimelineItem;
};
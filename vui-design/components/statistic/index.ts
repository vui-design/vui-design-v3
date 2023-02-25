import type { App, Plugin } from "vue";
import Statistic from "./statistic";
import Countdown from "./countdown";

Statistic.Countdown = Countdown;
Statistic.install = function(app: App) {
  app.component(Statistic.name, Statistic);
  app.component(Countdown.name, Countdown);

  return app;
};

export type { StatisticProps } from "./statistic";
export type { CountdownProps } from "./countdown";

export { createProps as createStatisticProps } from "./statistic";
export { createProps as createCountdownProps } from "./countdown";

export { Countdown };
export default Statistic as typeof Statistic & Plugin & {
  readonly Countdown: typeof Countdown;
};
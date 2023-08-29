import type { App, Plugin } from "vue";
import Steps from "./steps";
import Step from "./step";

Steps.Step = Step;
Steps.install = function(app: App) {
  app.component(Steps.name, Steps);
  app.component(Step.name, Step);

  return app;
};

export type { StepsProps } from "./steps";
export type { StepProps } from "./step";

export { createProps as createStepsProps } from "./steps";
export { createProps as createStepProps } from "./step";

export { Step };
export default Steps as typeof Steps & Plugin & {
  readonly Step: typeof Step;
};
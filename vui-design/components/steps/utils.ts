import type { VNode, Component } from "vue";
import type { Steps } from "./types";
import is from "../../utils/is";
import { flatten } from "../../utils/vue";

export const getChildren = (
  children: VNode[] | undefined
) => {
  if (!children) {
    return [];
  }

  return flatten(children).filter(target => {
    return is.object(target.type) && (target.type as Component).name === "vui-step";
  });
};

export const getStepStatus = (
  vuiSteps: Steps | undefined,
  index: number,
  status: string | undefined
): string | undefined => {
  if (status) {
    return status;
  }
  else if (vuiSteps) {
    return index < vuiSteps.step ? "finish" : (index > vuiSteps.step ? "wait" : vuiSteps?.status);
  }
};

export const getNextStepStatus = (
  vuiSteps: Steps | undefined,
  index: number
): string | undefined => {
  const nextStep = vuiSteps?.steps[index + 1];

  if (nextStep) {
    return nextStep.status;
  }
};

export default {
  getChildren,
  getStepStatus,
  getNextStepStatus
};
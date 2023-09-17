import type { Steps } from "./types";

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
  getStepStatus,
  getNextStepStatus
};
import type { InjectionKey } from "vue";
import type { Steps } from "./types";

export const StepsInjectionKey: InjectionKey<Steps> = Symbol("VuiSteps");
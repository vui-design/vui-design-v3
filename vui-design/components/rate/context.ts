import type { InjectionKey } from "vue";
import type { Rate } from "./types";

export const RateInjectionKey: InjectionKey<Rate> = Symbol("VuiRate");
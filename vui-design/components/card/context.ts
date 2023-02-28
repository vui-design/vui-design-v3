import type { InjectionKey } from "vue";
import type { Card } from "./types";

export const CardInjectionKey: InjectionKey<Card> = Symbol("VuiCard");
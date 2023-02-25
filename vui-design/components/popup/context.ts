import type { InjectionKey } from "vue";
import type { Popup } from "./types";

export const PopupInjectionKey: InjectionKey<Popup> = Symbol("VuiPopup");
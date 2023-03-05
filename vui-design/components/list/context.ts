import type { InjectionKey } from "vue";
import type { List } from "./types";

export const ListInjectionKey: InjectionKey<List> = Symbol("VuiList");
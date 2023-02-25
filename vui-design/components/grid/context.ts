import type { InjectionKey } from "vue";
import type { Row } from "./types";

export const RowInjectionKey: InjectionKey<Row> = Symbol("VuiRow");
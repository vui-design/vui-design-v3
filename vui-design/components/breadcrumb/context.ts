import type { InjectionKey } from "vue";
import type { Breadcrumb } from "./types";

export const BreadcrumbInjectionKey: InjectionKey<Breadcrumb> = Symbol("VuiBreadcrumb");
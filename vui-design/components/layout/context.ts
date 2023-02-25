import type { InjectionKey } from "vue";
import type { Layout, LayoutSider } from "./types";

export const LayoutInjectionKey: InjectionKey<Layout> = Symbol("VuiLayout");
export const LayoutSiderInjectionKey: InjectionKey<LayoutSider> = Symbol("VuiLayoutSider");
import type { InjectionKey } from "vue";
import type { ConfigProvider } from "./types";

export const ConfigProviderInjectionKey: InjectionKey<ConfigProvider> = Symbol("VuiConfigProvider");
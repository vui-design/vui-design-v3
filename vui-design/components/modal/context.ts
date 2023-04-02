import type { InjectionKey } from "vue";
import type { ButtonGroup, InputGroup } from "./types";

export const ButtonGroupInjectionKey: InjectionKey<ButtonGroup> = Symbol("VuiButtonGroup");
export const InputGroupInjectionKey: InjectionKey<InputGroup> = Symbol("VuiInputGroup");
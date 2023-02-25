import type { InjectionKey } from "vue";
import type { Form, FormItem } from "./types";

export const FormInjectionKey: InjectionKey<Form> = Symbol("VuiForm");
export const FormItemInjectionKey: InjectionKey<FormItem> = Symbol("VuiFormItem");
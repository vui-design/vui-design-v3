import type { FormItem } from "../components/form/types";
import { inject, toRef } from "vue";
import { FormItemInjectionKey } from "../components/form/context";

export default function useFormItem(uninject?: boolean) {
  const vuiFormItem = !uninject ? inject(FormItemInjectionKey, {} as FormItem) : ({} as FormItem);
  const onChange = toRef(vuiFormItem, "onChange");
  const onBlur = toRef(vuiFormItem, "onBlur");

  return {
    onChange,
    onBlur
  };
};
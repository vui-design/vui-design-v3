import type { sizes } from "./constants";

export type Size = typeof sizes[number];

export interface Form {
  size: Size | undefined;
  disabled: boolean;
};

export interface FormItem {
  onChange: (value: any) => void;
};
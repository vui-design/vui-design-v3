import type { RenderFunction } from "vue";
import type { layouts, types, sizes } from "./constants";

export type Layout = typeof layouts[number];
export type Type = typeof types[number];
export type Size = typeof sizes[number];

export interface CheckboxGroup {
  name: string;
  type: Type;
  size: Size;
  minWidth: string | number;
  value: Array<string | number>;
  disabled: boolean;
  onChange: (checked: boolean, value: string | number) => void;
};

export interface Checkbox {
  label?: string | number | RenderFunction;
  value: string | number;
  disabled?: boolean;
}
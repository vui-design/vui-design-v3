import type { RenderFunction } from "vue";
import type { Size } from "../../types";
import type { layouts, types } from "./constants";

export type Layout = typeof layouts[number];
export type Type = typeof types[number];

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
};
import type { RenderFunction } from "vue";
import type { Size } from "../../types";
import type { layouts, types } from "./constants";

export type Layout = typeof layouts[number];
export type Type = typeof types[number];

export interface RadioGroup {
  name: string;
  type: Type;
  size: Size;
  minWidth: string | number;
  value: boolean | string | number;
  disabled: boolean;
  onChange: (checked: boolean, value: boolean | string | number) => void;
};

export interface Radio {
  label?: string | number | RenderFunction;
  value: boolean | string | number;
  disabled?: boolean;
}
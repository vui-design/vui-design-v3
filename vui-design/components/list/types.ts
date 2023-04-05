import type { Gutter } from "../grid/types";
import type { layouts } from "./constants";

export type Layout = typeof layouts[number];

export interface Grid {
  gutter?: number | Gutter | [number | Gutter, number | Gutter];
  span?: string | number;
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  xxl?: string | number;
  xxxl?: string | number;
};

export interface List {
  layout: Layout | undefined;
};
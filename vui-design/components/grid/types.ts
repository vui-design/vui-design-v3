import type { Breakpoint } from "../../utils/responsive-observer";
import type { justifys, aligns } from "./constants";

export type Justify = typeof justifys[number];
export type Align = typeof aligns[number];
export type Gutter = Partial<Record<Breakpoint, number>>;
export type Flex = string | number | "none" | "auto";

export interface Row {
  justify?: Justify;
  align?: Align;
  gutter: number | Gutter | [number | Gutter, number | Gutter];
  wrap?: boolean;
  isSupportRowGap?: boolean
};

export interface ColResponsive {
  span?: string | number;
  offset?: string | number;
  push?: string | number;
  pull?: string | number;
  order?: string | number;
};
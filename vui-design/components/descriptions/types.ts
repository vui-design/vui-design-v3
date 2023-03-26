import type { layouts, sizes, labelAligns } from "./constants";

export type Layout = typeof layouts[number];
export type Size = typeof sizes[number];
export type LabelAlign = typeof labelAligns[number];
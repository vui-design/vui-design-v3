import type { types, sizes, statuses, strokeLinecaps } from "./constants";

export type Type = typeof types[number];
export type Size = typeof sizes[number];
export type Success = {
  percentage: number;
  strokeColor?: string;
};
export type Status = typeof statuses[number];
export type StrokeLinecap = typeof strokeLinecaps[number];
export type Formatter = (percentage: number) => any;
import type { directions, justifys, aligns } from "./constants";

export type Direction = typeof directions[number];
export type Justify = typeof justifys[number];
export type Align = typeof aligns[number];
export type Gutter = string | number;
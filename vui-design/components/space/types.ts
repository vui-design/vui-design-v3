import type { directions, justifys, aligns, gutters } from "./constants";

export type Direction = typeof directions[number];
export type Justify = typeof justifys[number];
export type Align = typeof aligns[number];
export type Gutter = typeof gutters[number];
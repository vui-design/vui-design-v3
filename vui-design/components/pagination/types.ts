import type { aligns } from "./constants";

export type Align = typeof aligns[number];
export type showTotal = boolean | ((total: number, range: [number, number]) => string);
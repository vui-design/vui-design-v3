import type { shadows } from "./constants";

export type Shadow = typeof shadows[number];

export interface Card {
  addGridRef?: (id: string) => void;
  removeGridRef?: (id: string) => void;
};
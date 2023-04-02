import type { autofocusButtons, placements } from "./constants";

export type AutofocusButton = typeof autofocusButtons[number];
export type Placement = typeof placements[number];

export interface Drawer {
  addDrawerRef: (id: string) => void;
  removeDrawerRef: (id: string) => void;
};
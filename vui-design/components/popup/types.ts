import type { triggers, placements } from "./constants";

export type BasePlacement = "top" | "left" | "bottom" | "right";
export type Trigger = typeof triggers[number];
export type Placement = typeof placements[number];

export interface Position {
  top: number;
  left: number;
};

export interface ScrollRect {
  width: number;
  height: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  scrollTop: number;
  scrollBottom: number;
  scrollLeft: number;
  scrollRight: number;
};

export interface Popup {
  onMouseenter: (event: MouseEvent) => void;
  onMouseleave: (event: MouseEvent) => void;
  addChildRef: (ref: any) => void;
  removeChildRef: (ref: any) => void;
};
import type { Size } from "../../types";
import type { types, shapes } from "./constants";

export type HTMLType = "submit" | "button" | "reset";
export type Type = typeof types[number];
export type Shape = typeof shapes[number];

export interface ButtonGroup {
  type?: Type;
  ghost?: boolean;
  shape?: Shape;
  size?: Size;
  disabled?: boolean;
};
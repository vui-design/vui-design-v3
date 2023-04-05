import type { ScreenSizes } from "../../utils/responsive-observer";
import type { Size } from "../../types";
import type { shapes } from "./constants";

export type Shape = typeof shapes[number];
export type CrossOrigin = "" | "anonymous" | "use-credentials";

export interface AvatarGroup {
  shape: Shape | undefined;
  size: Size | number | ScreenSizes | undefined;
};
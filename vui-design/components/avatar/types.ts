import type { ScreenSizes } from "../../utils/responsive-observer";
import type { shapes, sizes } from "./constants";

export type Shape = typeof shapes[number];
export type Size = typeof sizes[number];
export type CrossOrigin = "" | "anonymous" | "use-credentials";

export interface AvatarGroup {
  shape: Shape | undefined;
  size: Size | number | ScreenSizes | undefined;
};
import type { VNodeAtom } from "../../types";
import type { sizes } from "./constants";

export type Size = typeof sizes[number];
export type Indicator = () => VNodeAtom;

export interface SpinWrapperProps {
  fullscreen?: boolean;
  visible?: boolean;
  spinning?: boolean;
  size?: Size;
  background?: string,
  delay?: number;
  indicator?: Indicator,
  message?: string;
  animation?: string;
  getPopupContainer?: () => HTMLElement
};
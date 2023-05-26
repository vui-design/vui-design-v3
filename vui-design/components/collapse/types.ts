import type { Key } from "../../types";
import type { arrowAligns } from "./constants";

export type ArrowAlign = typeof arrowAligns[number];

export interface Collapse {
  activeKeys?: Key | Key[];
  showArrow?: boolean;
  arrowAlign?: ArrowAlign;
  accordion?: boolean;
  clickHeaderToCollapse?: boolean;
  destroyInactivePanel?: boolean;
  disabled?: boolean;
  onChange?: (key: Key) => void;
};
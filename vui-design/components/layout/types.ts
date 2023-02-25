import type { colors } from "./constants";

export type Color = typeof colors[number];

export interface Layout {
  addSiderRef?: (id: string) => void;
  removeSiderRef?: (id: string) => void;
};

export interface LayoutSider {
  color?: string;
  collapsed?: boolean;
  collapsedWidth?: string | number;
};
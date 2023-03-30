import type { RenderFunction } from "vue";
import type { types, placements } from "./constants";

export type Type = typeof types[number];
export type Placement = typeof placements[number];

export interface NotificationConfig {
  id?: string | number;
  type?: string;
  icon?: string;
  title: string | number | RenderFunction;
  description?: string | number | RenderFunction;
  closable?: boolean;
  closeText?: string;
  duration?: number;
  getPopupContainer?: string | HTMLElement;
  placement?: string;
  onBeforeClose?: () => void;
  onClose?: () => void;
  onAfterClose?: () => void;
};
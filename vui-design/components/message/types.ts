import type { RenderFunction } from "vue";
import type { types } from "./constants";

export type Type = typeof types[number];

export interface MessageConfig {
  id?: string | number;
  type?: string;
  icon?: string;
  content: string | number | RenderFunction;
  closable?: boolean;
  closeText?: string;
  duration?: number;
  background?: boolean,
  getPopupContainer?: string | HTMLElement;
  onBeforeClose?: () => void;
  onClose?: () => void;
  onAfterClose?: () => void;
};
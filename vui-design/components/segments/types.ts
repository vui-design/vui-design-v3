import type { RenderFunction } from "vue";
import type { Key } from "../../types";

export interface Segments {
  activeKey?: Key;
  disabled?: boolean;
  addKey?: (key: Key) => void;
  removeKey?: (key: Key) => void;
  onChange?: (key: Key) => void;
};

export interface SegmentsItem {
  key: Key;
  icon?: string | RenderFunction;
  label?: string | number | RenderFunction;
  disabled?: boolean;
};
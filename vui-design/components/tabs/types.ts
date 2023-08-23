import type { RenderFunction } from "vue";
import type { Key } from "../../types";
import type { types } from "./constants";

export type Type = typeof types[number];

export interface Tab {
  key: Key;
  index: number;
  icon?: string | RenderFunction;
  title: string | number | RenderFunction;
  closable?: boolean;
  disabled?: boolean;
};

export interface Tabs {
  activeKey?: Key;
  closable?: boolean,
  destroyOnHide?: boolean,
  addTab: (tab: Tab) => void;
  removeTab: (key: Key) => void;
};
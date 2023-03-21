import type { Key } from "../../types";
import type { modes, colors } from "./constants";

export type Mode = typeof modes[number];
export type Color = typeof colors[number];

export interface Menu {
  mode?: string;
  color?: string;
  indent?: number;
  collapsed?: boolean;
  openKeys?: Key[];
  selectedKey?: Key | undefined;
  addSubmenu?: (key: Key, level: number) => void;
  removeSubmenu?: (key: Key) => void;
  addMenuItem?: (key: Key, level: number) => void;
  removeMenuItem?: (key: Key) => void;
  onToggle?: (key: Key, level: number, open: boolean) => void;
  onSelect?: (key: Key, level: number) => void;
};

export interface Submenu {
  key?: Key;
  level?: number;
  disabled?: boolean;
  addSubmenu?: (key: Key, level: number) => void;
  removeSubmenu?: (key: Key) => void;
  addMenuItem?: (key: Key, level: number) => void;
  removeMenuItem?: (key: Key) => void;
};

export interface MenuItem {
  key?: Key;
  level?: number;
};

export interface MenuItemGroup {
  disabled?: boolean;
};
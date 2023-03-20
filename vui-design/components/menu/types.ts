import type { Key } from "../../types";
import type { modes, colors } from "./constants";

export type Mode = typeof modes[number];
export type Color = typeof colors[number];

export interface Menu {
  mode: string;
  color: string;
  indent: number;
  collapsed: boolean;
  openKeys: Key[];
  selectedKey: Key | undefined;
  addSubmenu: (key: Key) => void;
  removeSubmenu: (key: Key) => void;
  addMenuItem: (key: Key) => void;
  removeMenuItem: (key: Key) => void;
  onToggle: (key: Key, open: boolean) => void;
  onSelect: (key: Key) => void;
};

export interface Submenu {
  level: number;
  disabled: boolean;
  addSubmenu: (key: Key) => void;
  removeSubmenu: (key: Key) => void;
  addMenuItem: (key: Key) => void;
  removeMenuItem: (key: Key) => void;
};

export interface MenuItemGroup {
  disabled: boolean;
};
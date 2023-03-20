import type { InjectionKey } from "vue";
import type { Menu, Submenu, MenuItemGroup } from "./types";

export const MenuInjectionKey: InjectionKey<Menu> = Symbol("VuiMenu");
export const SubmenuInjectionKey: InjectionKey<Submenu> = Symbol("VuiSubmenu");
export const MenuItemGroupInjectionKey: InjectionKey<MenuItemGroup> = Symbol("VuiMenuItemGroup");
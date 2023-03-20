import type { App, Plugin } from "vue";
import Menu from "./menu";
import Submenu from "./submenu";
import MenuItem from "./menu-item";
import MenuItemGroup from "./menu-item-group";
import MenuItemDivider from "./menu-item-divider";

Menu.Submenu = Submenu;
Menu.Item = MenuItem;
Menu.ItemGroup = MenuItemGroup;
Menu.ItemDivider = MenuItemDivider;
Menu.install = function(app: App) {
  app.component(Menu.name, Menu);
  app.component(Submenu.name, Submenu);
  app.component(MenuItem.name, MenuItem);
  app.component(MenuItemGroup.name, MenuItemGroup);
  app.component(MenuItemDivider.name, MenuItemDivider);

  return app;
};

export type { MenuProps } from "./menu";
export type { SubmenuProps } from "./submenu";
export type { MenuItemProps } from "./menu-item";
export type { MenuItemGroupProps } from "./menu-item-group";
export type { MenuItemDividerProps } from "./menu-item-divider";

export { createProps as createMenuProps } from "./menu";
export { createProps as createSubmenuProps } from "./submenu";
export { createProps as createMenuItemProps } from "./menu-item";
export { createProps as createMenuItemGroupProps } from "./menu-item-group";
export { createProps as createMenuItemDividerProps } from "./menu-item-divider";

export { Submenu, MenuItem, MenuItemGroup, MenuItemDivider };
export default Menu as typeof Menu & Plugin & {
  readonly Submenu: typeof Submenu;
  readonly Item: typeof MenuItem;
  readonly ItemGroup: typeof MenuItemGroup;
  readonly ItemDivider: typeof MenuItemDivider;
};
import type { Ref } from "vue";
import type { Key } from "../../../types";
import type { Submenu, MenuItem } from "../types";
import { inject, ref } from "vue";
import { SubmenuInjectionKey } from "../context";

export default function useRefs(): {
  submenus: Ref<Submenu[]>;
  menuItems: Ref<MenuItem[]>;
  addSubmenu: (key: Key, level: number) => void;
  removeSubmenu: (key: Key) => void;
  addMenuItem: (key: Key, level: number) => void;
  removeMenuItem: (key: Key) => void;
} {
  // 注入祖先组件
  const vuiSubmenu = inject(SubmenuInjectionKey, undefined);

  // 内部状态
  const submenus = ref<Submenu[]>([]);
  const menuItems = ref<MenuItem[]>([]);

  // 用于更新自身及父级 Submenu 的下属 Submenu 集合
  const addSubmenu = (key: Key, level: number) => {
    submenus.value.push({ key, level });
    vuiSubmenu?.addSubmenu?.(key, level);
  };
  const removeSubmenu = (key: Key) => {
    submenus.value.splice(submenus.value.findIndex(submenu => submenu.key === key), 1);
    vuiSubmenu?.removeSubmenu?.(key);
  };

  // 用于更新自身及父级 Submenu 的下属 MenuItem 集合
  const addMenuItem = (key: Key, level: number) => {
    menuItems.value.push({ key, level });
    vuiSubmenu?.addMenuItem?.(key, level);
  };
  const removeMenuItem = (key: Key) => {
    menuItems.value.splice(menuItems.value.findIndex(menuItem => menuItem.key === key), 1);
    vuiSubmenu?.removeSubmenu?.(key);
  };

  // 
  return {
    submenus,
    menuItems,
    addSubmenu,
    removeSubmenu,
    addMenuItem,
    removeMenuItem
  };
};
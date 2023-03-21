import type { Ref } from "vue";
import type { Key } from "../../../types";
import { inject, ref } from "vue";
import { SubmenuInjectionKey } from "../context";

export default function useLevel(): {
  submenus: Ref<Key[]>;
  menuItems: Ref<Key[]>;
  addSubmenu: (key: Key) => void;
  removeSubmenu: (key: Key) => void;
  addMenuItem: (key: Key) => void;
  removeMenuItem: (key: Key) => void;
} {
  // 注入祖先组件
  const vuiSubmenu = inject(SubmenuInjectionKey, undefined);

  // 内部状态
  const submenus = ref<Key[]>([]);
  const menuItems = ref<Key[]>([]);

  // 用于更新自身及父级 Submenu 的下属 Submenu 集合
  const addSubmenu = (key: Key) => {
    submenus.value.push(key);
    vuiSubmenu?.addSubmenu?.(key);
  };
  const removeSubmenu = (key: Key) => {
    submenus.value.splice(submenus.value.indexOf(key), 1);
    vuiSubmenu?.removeSubmenu?.(key);
  };

  // 用于更新自身及父级 Submenu 的下属 MenuItem 集合
  const addMenuItem = (key: Key) => {
    menuItems.value.push(key);
    vuiSubmenu?.addMenuItem?.(key);
  };
  const removeMenuItem = (key: Key) => {
    menuItems.value.splice(menuItems.value.indexOf(key), 1);
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
import type { App, Plugin } from "vue";
import List from "./list";
import ListItem from "./list-item";
import ListItemMeta from "./list-item-meta";

List.Item = ListItem;
List.ItemMeta = ListItemMeta;
List.install = function(app: App) {
  app.component(List.name, List);
  app.component(ListItem.name, ListItem);
  app.component(ListItemMeta.name, ListItemMeta);

  return app;
};

export type { ListProps } from "./list";
export type { ListItemProps } from "./list-item";
export type { ListItemMetaProps } from "./list-item-meta";

export { createProps as createListProps } from "./list";
export { createProps as createListItemProps } from "./list-item";
export { createProps as createListItemMetaProps } from "./list-item-meta";

export { ListItem, ListItemMeta };
export default List as typeof List & Plugin & {
  readonly Item: typeof ListItem;
  readonly ItemMeta: typeof ListItemMeta;
};
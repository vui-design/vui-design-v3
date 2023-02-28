import type { App, Plugin } from "vue";
import Card from "./card";
import CardMeta from "./card-meta";
import CardGrid from "./card-grid";

Card.Meta = CardMeta;
Card.Grid = CardGrid;
Card.install = function(app: App) {
  app.component(Card.name, Card);
  app.component(CardMeta.name, CardMeta);
  app.component(CardGrid.name, CardGrid);

  return app;
};

export type { CardProps } from "./card";
export type { CardMetaProps } from "./card-meta";
export type { CardGridProps } from "./card-grid";

export { createProps as createCardProps } from "./card";
export { createProps as createCardMetaProps } from "./card-meta";
export { createProps as createCardGridProps } from "./card-grid";

export { CardMeta, CardGrid };
export default Card as typeof Card & Plugin & {
  readonly Meta: typeof CardMeta;
  readonly Grid: typeof CardGrid;
};
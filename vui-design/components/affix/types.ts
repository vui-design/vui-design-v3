import type { CSSProperties } from "vue";

export type Element = Window | HTMLElement;
export type GetScrollContainer = () => Element;

export interface AffixState {
  affixed: boolean;
  containerStyle?: CSSProperties;
  affixStyle?: CSSProperties;
};
import type { CSSProperties } from "vue";

export type Element = Window | HTMLElement;

export interface AffixState {
  affixed: boolean;
  containerStyle?: CSSProperties;
  affixStyle?: CSSProperties;
};
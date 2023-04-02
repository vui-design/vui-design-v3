import type { CSSProperties } from "vue";

export type GetScrollContainer = () => Window | HTMLElement;

export interface AffixState {
  affixed: boolean;
  containerStyle?: CSSProperties;
  affixStyle?: CSSProperties;
};
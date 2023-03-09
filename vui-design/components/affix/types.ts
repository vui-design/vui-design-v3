import type { CSSProperties } from "vue";

export type GetScrollContainer = () => any;
export type Element = HTMLElement | Window;

export interface AffixState {
  affixed: boolean;
  containerStyle?: CSSProperties;
  affixStyle?: CSSProperties;
};
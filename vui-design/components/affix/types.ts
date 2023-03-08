import type { ComponentPublicInstance, CSSProperties } from "vue";

export type GetScrollContainer = () => any;
export type Element = HTMLElement | Window | null | undefined;

export interface AffixState {
  affixed: boolean;
  status: "none" | "prepare";
  containerStyle?: CSSProperties;
  affixStyle?: CSSProperties;
};

export interface ObserverEntity {
  target: HTMLElement | Window;
  affixList: ComponentPublicInstance<any>[];
  eventHandlers: { [eventName: string]: any };
};
import type { Ref, VNode } from "vue";
import type { sizes } from "../constants";

export type VueNode = VNode | string | number | boolean | null | undefined | void;

export type VueNodeAtom = VueNode | VueNode[] | JSX.Element;

export type Key = string | number | symbol;

export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;

export type LiteralUnion<T extends U, U> = T | (U & {});

export type Data = Record<string, unknown>;

export type DefaultFactory<T> = (props: Data) => T | null | undefined;

export type MaybeRef<T> = T | Ref<T>;

export interface Slots {
  value?: VNode[];
};

export type Size = typeof sizes[number];

export type GetPopupContainer = string | HTMLElement;

export type GetScrollContainer = () => Window | HTMLElement;
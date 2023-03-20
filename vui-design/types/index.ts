import type { PropType, Ref, VNode } from "vue";

declare type VueNodeAtom = VNode | string | number | boolean | null | undefined | void;

export type Key = string | number | symbol;

export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;

export type LiteralUnion<T extends U, U> = T | (U & {});

export type Data = Record<string, unknown>;

export type DefaultFactory<T> = (props: Data) => T | null | undefined;

export type MaybeRef<T> = T | Ref<T>;

export type VNodeAtom = VueNodeAtom | VueNodeAtom[] | JSX.Element;

export interface Slots {
  value?: VNode[];
};

export interface PropOptions<T = any, D = T> {
  type?: PropType<T> | true | null;
  required?: boolean;
  default?: D | DefaultFactory<D> | null | undefined | object;
  validator?(value: unknown): boolean;
};
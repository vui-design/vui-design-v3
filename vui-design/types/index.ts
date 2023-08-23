import type { PropType, Ref, VNode } from "vue";
import type { sizes } from "../constants";

export type Key = string | number | symbol;

export type VueNode = VNode | string | number | boolean | null | undefined | void;

export type VueNodeAtom = VueNode | VueNode[] | JSX.Element;

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

export function createStringType<T extends string = string>(defaultValue?: T) {
  return {
    type: String as unknown as PropType<T>,
    default: defaultValue as T
  };
};

export function createBooleanType<T extends boolean>(defaultValue?: T) {
  return {
    type: Boolean as unknown as PropType<T>,
    default: defaultValue as T
  };
};

export function createArrayType<T extends any[]>(defaultValue?: T) {
  return {
    type: Array as unknown as PropType<T>,
    default: defaultValue as T
  };
};

export function createFunctionType<T = () => {}>(defaultValue?: T) {
  return {
    type: Function as PropType<T>,
    default: defaultValue as T
  };
};

export function createAnyType<T = any>(defaultValue?: T, required?: boolean) {
  const type = {
    validator: () => true,
    default: defaultValue as T
  } as unknown;

  return required ? (type as {
    type: PropType<T>;
    default: T;
    required: true;
  }) : (type as {
    type: PropType<T>;
    default: T;
  });
};

export function createSomeType<T>(types?: any[], defaultValue?: T) {
  return types ? {
    type: types as PropType<T>,
    default: defaultValue as T
  } : createAnyType<T>(defaultValue);
};
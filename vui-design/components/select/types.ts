import type { VNode } from "vue";
import type { Key } from "../../types";
import type { backfillOptionProps, filterOptionProps, placements } from "./constants";

export type Value = string | number | boolean;
export type Label = string | number | boolean | VNode[];
export type Children = string | number | boolean | VNode[];
export type BackfillOptionProp = typeof backfillOptionProps[number];
export type MaxTagPlaceholder = (count: number) => string;
export type Filter = (keyword: string, option: any, property: string) => boolean;
export type FilterOptionProp = typeof filterOptionProps[number];
export type Placement = typeof placements[number];

export interface Scroll {
  pageSize?: number,
  averageHeight?: number,
  threshold?: number
};

export interface Option {
  key?: Key;
  type?: string;
  level?: number;
  value?: Value;
  label?: Label;
  children?: Value | VNode[] | Option[];
  disabled?: boolean;
};
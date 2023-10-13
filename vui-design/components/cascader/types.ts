import type { triggers, filterOptionProps, placements } from "./constants";

export type Trigger = typeof triggers[number];
export type Formatter = (labels: Array<string | number>, options: Option[]) => string;
export type Filter = (keyword: string, option: Option, property: string) => boolean;
export type FilterOptionProp = typeof filterOptionProps[number];
export type Placement = typeof placements[number];

export interface Option {
  path?: Option[];
  value?: string | number;
  label?: string | number;
  children?: Option[];
  leaf?: boolean;
  disabled?: boolean;
};

export interface OptionKeys {
  value?: string;
  label?: string;
  children?: string;
  leaf?: string;
  disabled?: string;
};
import type { VNodeTypes, Slot, CSSProperties } from "vue";

export type Value = string | number | undefined;
export type Formatter = (value: Value, now?: number) => VNodeTypes;
export type Prefix = string | Slot;
export type Suffix = string | Slot;

export interface NumberProps {
  classNamePrefix?: string;
  value: Value;
  precision?: number;
  placeholder?: string;
  decimalSeparator?: string;
  groupSeparator?: string;
  formatter?: Formatter;
  prefix?: Prefix;
  suffix?: Suffix;
  style?: string | CSSProperties
};
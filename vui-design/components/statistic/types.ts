import type { Slot, CSSProperties } from "vue";
import type { VNodeAtom } from "../../types";

export type Value = string | number | undefined;
export type Formatter = (value: Value, now?: number) => VNodeAtom;
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
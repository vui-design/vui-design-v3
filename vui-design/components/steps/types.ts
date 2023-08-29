import type { Slot, RenderFunction } from "vue";
import type { Key } from "../../types";
import type { types, directions, statuses } from "./constants";

export type Type = typeof types[number];
export type Direction = typeof directions[number];
export type Status = typeof statuses[number];

export interface Step {
  key: Key;
  index: number;
  status: Status;
};

export interface Steps {
  type: Type;
  steps: Step[];
  step: number;
  status: Status;
  clickable: boolean;
  changeOnTitle: boolean;
  dot?: Slot | RenderFunction;
  addStep: (step: Step) => void;
  removeStep: (key: Key) => void;
  onChange: (index: number) => void;
};
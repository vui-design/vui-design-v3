import type { PropType, CSSProperties } from "vue";
import type { VueTypeValidableDef, VueTypesInterface } from "vue-types";
import type { VNodeAtom } from "../types";
import { createTypes } from "vue-types";

const PropTypes = createTypes({
  bool: undefined,
  string: undefined,
  number: undefined,
  integer: undefined,
  func: undefined,
  array: undefined,
  object: undefined
});

PropTypes.extend([
  {
    name: "loosebool",
    getter: true,
    type: Boolean,
    default: undefined
  },
  {
    name: "style",
    getter: true,
    type: [String, Object],
    default: undefined
  },
  {
    name: "vnode",
    getter: true,
    type: Object as PropType<VNodeAtom>,
    default: undefined
  },
  {
    name: "element",
    getter: true,
    type: Object as PropType<HTMLElement>,
    default: undefined
  }
]);

export function withUndefined<T extends { default?: any }>(type: T): T {
  type.default = undefined;

  return type;
};

export default PropTypes as VueTypesInterface & {
  readonly loosebool: VueTypeValidableDef<boolean>;
  readonly style: VueTypeValidableDef<CSSProperties>;
  readonly vnode: VueTypeValidableDef<VNodeAtom>;
  readonly element: VueTypeValidableDef<HTMLElement>;
};
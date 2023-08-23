import type { VNode, Component } from "vue";
import is from "../../utils/is";
import { flatten } from "../../utils/vue";

export const getChildren = (
  children: VNode[] | undefined
) => {
  if (!children) {
    return [];
  }

  return flatten(children).filter(target => {
    return is.object(target.type) && (target.type as Component).name === "vui-tab-panel";
  });
};

export default {
  getChildren
};
import type { VNode, VNodeTypes, Component } from "vue";
import type { Slots, Data } from "../types";
import { Fragment, Comment, Text, isVNode, cloneVNode } from "vue";
import { isFunction, isArray, isEffective } from "./is";

export enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9
};

export const isText = (vnode: VNode, children: VNode["children"]): children is string => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.TEXT_CHILDREN);
};

export const isElement = (vnode: VNode) => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.ELEMENT);
};

export const isEmptyElement = (element: any): boolean => {
  return (element && ((element.type === Fragment && element.children.length === 0) || element.type === Comment || (element.type === Text && element.children.trim() === "")));
};

export const isComponent = (vnode: VNode, type?: VNodeTypes): type is Component => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.COMPONENT);
};

export const isArrayChildren = (vnode: VNode, children: VNode["children"]): children is VNode[] => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.ARRAY_CHILDREN);
};

export const getSlot = (slots: Slots, prop: string = "default") => {
  return slots[prop]?.();
};

export const getSlotProp = (slots: Slots, props: Data, prop: string = "default") => {
  return slots[prop]?.() ?? props[prop];
};

export const flatten = (children: VNode | VNode[] = [], ignoreEmptyElement = true) => {
  const kids = isArray(children) ? children : [children];
  const result: VNode[] = [];

  kids.forEach((kid: VNode | VNode[]) => {
    if (isArray(kid)) {
      result.push(...flatten(kid, ignoreEmptyElement));
    }
    else if (kid?.type === Fragment) {
      result.push(...flatten(kid.children as VNode[], ignoreEmptyElement));
    }
    else if (isVNode(kid)) {
      if (ignoreEmptyElement && !isEmptyElement(kid)) {
        result.push(kid);
      }
      else if (!ignoreEmptyElement) {
        result.push(kid);
      }
    }
    else if (isEffective(kid)) {
      result.push(kid);
    }
  });

  return result;
};

export const getValidElements = (children: any[] = []) => {
  const elements: any = [];

  children.forEach(child => {
    if (isArray(child)) {
      elements.push(...child);
    }
    else if (child?.type === Fragment) {
      elements.push(...getValidElements(child.children));
    }
    else {
      elements.push(child);
    }
  });

  return elements.filter((element: any) => !isEmptyElement(element));
};

export const getChildrenArray = (vnode: VNode): VNode[] | undefined => {
  if (isArrayChildren(vnode, vnode.children)) {
    return vnode.children;
  }

  if (isArray(vnode)) {
    return vnode;
  }

  return undefined;
};

export const getFirstElementFromVNode = (vnode: VNode): HTMLElement | undefined => {
  if (isElement(vnode)) {
    return vnode.el as HTMLElement;
  }

  if (isComponent(vnode)) {
    if ((vnode.el as Node)?.nodeType === 1) {
      return vnode.el as HTMLElement;
    }

    if (vnode.component?.subTree) {
      const element = getFirstElementFromVNode(vnode.component.subTree);

      if (element) {
        return element;
      }
    }
  }
  else {
    const children = getChildrenArray(vnode);

    return getFirstElementFromChildren(children);
  }

  return undefined;
};

export const getFirstElementFromChildren = (children: VNode[] | undefined): HTMLElement | undefined => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);

      if (element) {
        return element;
      }
    }
  }

  return undefined;
};

export const mergeFirstChild = (children: VNode[] | undefined, props: Data | ((vnode: VNode) => Data)): boolean => {
  if (children && children.length > 0) {
    const length = children.length;

    for (let i = 0; i < length; i++) {
      const child = children[i];

      if (isElement(child) || isComponent(child)) {
        children[i] = cloneVNode(child, isFunction(props) ? props(child) : props, true);

        return true;
      }

      const subChildren = getChildrenArray(child);

      if (subChildren && subChildren.length > 0) {
        const result = mergeFirstChild(subChildren, props);

        if (result) {
          return true;
        }
      }
    }
  }

  return false;
};
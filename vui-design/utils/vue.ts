import type { Component, FunctionalComponent, Slots, VNode, VNodeTypes } from "vue";
import type { Data } from "../types";
import { Fragment, Comment, Text, isVNode, cloneVNode } from "vue";
import is from "./is";

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

export const isElement = (vnode: VNode) => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.ELEMENT);
};

export const isEmptyElement = (element: any): boolean => {
  return (element && ((element.type === Fragment && element.children.length === 0) || element.type === Comment || (element.type === Text && element.children.trim() === "")));
};

export const isComponent = (vnode: VNode, type?: VNodeTypes): type is Component => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.COMPONENT);
};

export const isTextChildren = (vnode: VNode, children: VNode["children"]): children is string => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.TEXT_CHILDREN);
};

export const isArrayChildren = (vnode: VNode, children: VNode["children"]): children is VNode[] => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.ARRAY_CHILDREN);
};

export const isSlotsChildren = (vnode: VNode, children: VNode["children"]): children is Slots => {
  return Boolean(vnode && vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN);
};

export const getSlot = (slots: Slots, prop: string = "default") => {
  return slots[prop]?.();
};

export const getSlotProp = (slots: Slots, props: Data, prop: string = "default") => {
  if (prop in slots) {
    return slots[prop]?.();
  }
  else {
    const target = props[prop];

    return is.function(target) ? target() : target;
  }
};

export const flatten = (vnodes: VNode | VNode[] = [], ignoreEmptyElement = true) => {
  const children: VNode[] = [];

  if (!is.array(vnodes)) {
    vnodes = [vnodes];
  }

  vnodes.forEach((vnode: VNode | VNode[]) => {
    if (is.array(vnode)) {
      children.push(...flatten(vnode, ignoreEmptyElement));
    }
    else if (vnode?.type === Fragment) {
      children.push(...flatten(vnode.children as VNode[], ignoreEmptyElement));
    }
    else if (isVNode(vnode)) {
      if (ignoreEmptyElement && !isEmptyElement(vnode)) {
        children.push(vnode);
      }
      else if (!ignoreEmptyElement) {
        children.push(vnode);
      }
    }
    else if (is.effective(vnode)) {
      children.push(vnode);
    }
  });

  return children;
};

export const getChildren = (vnodes: any[] = []) => {
  const children: any = [];

  vnodes.forEach(vnode => {
    if (is.array(vnode)) {
      children.push(...vnode);
    }
    else if (vnode?.type === Fragment) {
      children.push(...getChildren(vnode.children));
    }
    else {
      children.push(vnode);
    }
  });

  return children.filter((child: any) => !isEmptyElement(child));
};

export const getChildrenByNames = (vnodes: VNode[] | undefined, names: string | string[]) => {
  if (!vnodes) {
    return [];
  }

  if (is.string(names)) {
    names = [names];
  }

  return flatten(vnodes).filter(vnode => {
    let name;

    if (is.object(vnode.type)) {
      name = (vnode.type as Component).name;
    }
    else if (is.function(vnode.type)) {
      name = (vnode.type as FunctionalComponent).displayName;
    }

    return names.includes(name as string);
  });
};

export const getChildrenText = (
  children: string | number | boolean | VNode | VNode[]
) => {
  let text = "";

  if (children === undefined) {
    return text;
  }

  if (is.string(children) || is.number(children) || is.boolean(children)) {
    text += String(children);
  }
  else if (isVNode(children)) {
    if (isTextChildren(children, children.children)) {
      text += children.children;
    }
    else if (isArrayChildren(children, children.children)) {
      text += getChildrenText(children.children);
    }
    else if (isSlotsChildren(children, children.children)) {
      const content = children.children.default?.();

      if (content) {
        text += getChildrenText(content);
      }
    }
  }
  else if (is.array(children)) {
    children.forEach(child => {
      text += getChildrenText(child);
    });
  }

  return text;
};

export const getChildrenArray = (vnode: VNode): VNode[] | undefined => {
  if (isArrayChildren(vnode, vnode.children)) {
    return vnode.children;
  }

  if (is.array(vnode)) {
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
        children[i] = cloneVNode(child, is.function(props) ? props(child) : props, true);

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
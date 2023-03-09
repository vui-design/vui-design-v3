import type { Element } from "./types";

export const getElementRect = (element: Element): DOMRect => {
  if (element === window) {
    return {
      top: 0,
      bottom: window.innerHeight
    } as DOMRect;
  }
  else {
    return (element as HTMLElement).getBoundingClientRect();
  }
};

export const getFixedTop = (scrollContainerRect: DOMRect, containerRect: DOMRect, offsetTop: number | undefined) => {
  if (offsetTop !== undefined && scrollContainerRect.top > containerRect.top - offsetTop) {
    return `${offsetTop + scrollContainerRect.top}px`;
  }

  return undefined;
};

export const getFixedBottom = (scrollContainerRect: DOMRect, containerRect: DOMRect, offsetBottom: number | undefined) => {
  if (offsetBottom !== undefined && scrollContainerRect.bottom < containerRect.bottom + offsetBottom) {
    const targetBottomOffset = window.innerHeight - scrollContainerRect.bottom;

    return `${offsetBottom + targetBottomOffset}px`;
  }

  return undefined;
};

export default {
  getElementRect,
  getFixedTop,
  getFixedBottom
};
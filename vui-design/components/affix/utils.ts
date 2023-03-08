import type { ComponentPublicInstance } from "vue";
import type { Element, ObserverEntity } from "./types";
import addEventListener from "../../utils/addEventListener";

const eventTypes = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"];
let observerEntities: ObserverEntity[] = [];

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

export const getFixedTop = (placeholderRect: DOMRect, targetRect: DOMRect, offsetTop: number | undefined) => {
  if (offsetTop !== undefined && targetRect.top > placeholderRect.top - offsetTop) {
    return `${offsetTop + targetRect.top}px`;
  }

  return undefined;
};

export const getFixedBottom = (placeholderRect: DOMRect, targetRect: DOMRect, offsetBottom: number | undefined) => {
  if (offsetBottom !== undefined && targetRect.bottom < placeholderRect.bottom + offsetBottom) {
    const targetBottomOffset = window.innerHeight - targetRect.bottom;

    return `${offsetBottom + targetBottomOffset}px`;
  }

  return undefined;
};

export const addObserver = (
  target: HTMLElement | Window | null,
  affix: ComponentPublicInstance<any>
) => {
  if (!target) {
    return;
  }

  let entity = observerEntities.find(oriObserverEntity => oriObserverEntity.target === target);

  if (entity) {
    entity.affixList.push(affix);
  }
  else {
    entity = {
      target,
      affixList: [affix],
      eventHandlers: {}
    };

    observerEntities.push(entity);

    eventTypes.forEach(eventType => {
      entity!.eventHandlers[eventType] = addEventListener(target, eventType, () => {
        entity!.affixList.forEach(target => {
          const { doLazyUpdatePosition } = (target as any).exposed;

          doLazyUpdatePosition();
        });
      });
    });
  }
};

export const removeObserver = (
  affix: ComponentPublicInstance<any>
): void => {
  const observerEntity = observerEntities.find(oriObserverEntity => {
    const hasAffix = oriObserverEntity.affixList.some(target => target === affix);

    if (hasAffix) {
      oriObserverEntity.affixList = oriObserverEntity.affixList.filter(target => target !== affix);
    }

    return hasAffix;
  });

  if (observerEntity && observerEntity.affixList.length === 0) {
    observerEntities = observerEntities.filter(oriObserverEntity => oriObserverEntity !== observerEntity);

    eventTypes.forEach(eventType => {
      const handler = observerEntity.eventHandlers[eventType];

      if (handler && handler.remove) {
        handler.remove();
      }
    });
  }
};

export default {
  getElementRect,
  getFixedTop,
  getFixedBottom,
  addObserver,
  removeObserver
};
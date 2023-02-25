import type { CSSProperties } from "vue";
import type { BasePlacement, Placement, Position, ScrollRect } from "./types";

export const isScrollElement = (element: HTMLElement) => {
  return (element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth);
};

export const getMouseScrollRect = ({
  top,
  left
}: Position): ScrollRect => {
  return {
    width: 0,
    height: 0,
    top: top,
    bottom: top,
    left: left,
    right: left,
    scrollTop: top,
    scrollBottom: top,
    scrollLeft: left,
    scrollRight: left
  };
};

export const getElementScrollRect = (element: HTMLElement, containerRect: DOMRect): ScrollRect => {
  const rect = element.getBoundingClientRect();

  return {
    width: element.offsetWidth ?? element.clientWidth,
    height: element.offsetHeight ?? element.clientHeight,
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    scrollTop: rect.top - containerRect.top,
    scrollBottom: rect.bottom - containerRect.top,
    scrollLeft: rect.left - containerRect.left,
    scrollRight: rect.right - containerRect.left
  };
};

export const getPopupPosition = (placement: Placement, triggerRect: ScrollRect, popupRect: ScrollRect, offset: number = 0): Position => {
  switch(placement) {
    case "top":
      return {
        top: triggerRect.scrollTop - popupRect.height - offset,
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2)
      };
    case "top-left":
      return {
        top: triggerRect.scrollTop - popupRect.height - offset,
        left: triggerRect.scrollLeft
      };
    case "top-right":
      return {
        top: triggerRect.scrollTop - popupRect.height - offset,
        left: triggerRect.scrollRight - popupRect.width
      };
    case "bottom":
      return {
        top: triggerRect.scrollBottom + offset,
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2)
      };
    case "bottom-left":
      return {
        top: triggerRect.scrollBottom + offset,
        left: triggerRect.scrollLeft
      };
    case "bottom-right":
      return {
        top: triggerRect.scrollBottom + offset,
        left: triggerRect.scrollRight - popupRect.width
      };
    case "left":
      return {
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2),
        left: triggerRect.scrollLeft - popupRect.width - offset
      };
    case "left-top":
      return {
        top: triggerRect.scrollTop,
        left: triggerRect.scrollLeft - popupRect.width - offset
      };
    case "left-bottom":
      return {
        top: triggerRect.scrollBottom - popupRect.height,
        left: triggerRect.scrollLeft - popupRect.width - offset
      };
    case "right":
      return {
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2),
        left: triggerRect.scrollRight + offset
      };
    case "right-top":
      return {
        top: triggerRect.scrollTop,
        left: triggerRect.scrollRight + offset
      };
    case "right-bottom":
      return {
        top: triggerRect.scrollBottom - popupRect.height,
        left: triggerRect.scrollRight + offset
      };
    default:
      return {
        top: 0,
        left: 0
      };
  }
};

export const getBoundaryPlacement = (placement: Placement): BasePlacement => {
  switch(placement) {
    case "top":
    case "top-left":
    case "top-right":
      return "top";
    case "bottom":
    case "bottom-left":
    case "bottom-right":
      return "bottom";
    case "left":
    case "left-top":
    case "left-bottom":
      return "left";
    case "right":
    case "right-top":
    case "right-bottom":
      return "right";
    default:
      return "top";
  }
};

export const getViewport = () => {
  return {
    width: document.documentElement.clientWidth || window.innerWidth,
    height: document.documentElement.clientHeight || window.innerHeight
  };
};

export const changePopupPlacement = (placement: Placement, direction: BasePlacement): Placement => {
  switch(direction) {
    case "top":
      switch(placement) {
        case "bottom":
          return "top";
        case "bottom-left":
          return "top-left";
        case "bottom-right":
          return "top-right";
        default:
          return placement;
      }
    case "bottom":
      switch(placement) {
        case "top":
          return "bottom";
        case "top-left":
          return "bottom-left";
        case "top-right":
          return "bottom-right";
        default:
          return placement;
      }
    case "left":
      switch(placement) {
        case "right":
          return "left";
        case "right-top":
          return "left-top";
        case "right-bottom":
          return "left-bottom";
        default:
          return placement;
      }
    case "right":
      switch(placement) {
        case "left":
          return "right";
        case "left-top":
          return "right-top";
        case "left-bottom":
          return "right-bottom";
        default:
          return placement;
      }
    default:
      return placement;
  }
};

export const getFitPosition = (
  placement: Placement,
  position: Position,
  {
    containerRect,
    triggerRect,
    popupRect,
    offset
  }: {
    containerRect: DOMRect;
    triggerRect: ScrollRect;
    popupRect: ScrollRect;
    offset: number;
  }
) => {
  const direction = getBoundaryPlacement(placement);
  const viewport = getViewport();
  // Boundary value of pop-up box and window
  const viewportBoundary = {
    top: containerRect.top + position.top,
    bottom: viewport.height - (containerRect.top + position.top + popupRect.height),
    left: containerRect.left + position.left,
    right: viewport.width - (containerRect.left + position.left + popupRect.width),
  };

  let _palcement = placement;

  if (direction === "top" && viewportBoundary.top < 0) {
    if (triggerRect.top > popupRect.height) {
      position.top = -containerRect.top;
    }
    else {
      const fitPosition = getPopupPosition("bottom", triggerRect, popupRect, offset);

      if (viewport.height - (containerRect.top + fitPosition.top + popupRect.height) > 0) {
        _palcement = changePopupPlacement(placement, "bottom");
        position.top = fitPosition.top;
      }
    }
  }

  if (direction === "bottom" && viewportBoundary.bottom < 0) {
    if (viewport.height - triggerRect.bottom > popupRect.height) {
      position.top = -containerRect.top + (viewport.height - popupRect.height);
    }
    else {
      const fitPosition = getPopupPosition("top", triggerRect, popupRect, offset);

      if (containerRect.top + fitPosition.top > 0) {
        _palcement = changePopupPlacement(placement, "top");
        position.top = fitPosition.top;
      }
    }
  }

  if (direction === "left" && viewportBoundary.left < 0) {
    if (triggerRect.left > popupRect.width) {
      position.left = -containerRect.left;
    }
    else {
      const fitPosition = getPopupPosition("right", triggerRect, popupRect, offset);

      if (viewport.width - (containerRect.left + fitPosition.left + popupRect.width) > 0) {
        _palcement = changePopupPlacement(placement, "right");
        position.left = fitPosition.left;
      }
    }
  }

  if (direction === "right" && viewportBoundary.right < 0) {
    if (viewport.width - triggerRect.right > popupRect.width) {
      position.left = -containerRect.left + (viewport.width - popupRect.width);
    }
    else {
      const fitPosition = getPopupPosition("left", triggerRect, popupRect, offset);
      if (containerRect.left + fitPosition.left > 0) {
        _palcement = changePopupPlacement(placement, "left");
        position.left = fitPosition.left;
      }
    }
  }

  if (direction === "top" || direction === "bottom") {
    if (viewportBoundary.left < 0) {
      position.left = -containerRect.left;
    }
    else if (viewportBoundary.right < 0) {
      position.left = -containerRect.left + (viewport.width - popupRect.width);
    }
  }

  if (direction === "left" || direction === "right") {
    if (viewportBoundary.top < 0) {
      position.top = -containerRect.top;
    } else if (viewportBoundary.bottom < 0) {
      // prettier-ignore
      position.top = -containerRect.top + (viewport.height - popupRect.height);
    }
  }

  return {
    palcement: _palcement,
    position
  };
};

export const getPopupStyle = (placement: Placement, containerRect: DOMRect, triggerRect: ScrollRect, popupRect: ScrollRect, offset: number = 0): {
  style: CSSProperties;
  position: string;
} => {
  let position = getPopupPosition(placement, triggerRect, popupRect, offset);
  let _palcement = placement;

  const result = getFitPosition(placement, position, {
    containerRect,
    triggerRect,
    popupRect,
    offset
  });

  position = result.position;
  _palcement = result.palcement;

  return {
    style: {
      top: `${position.top}px`,
      left: `${position.left}px`
    },
    position: _palcement
  };
};

export const getArrowStyle = (placement: Placement, triggerRect: ScrollRect, popupRect: ScrollRect): CSSProperties => {
  if (["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].includes(placement)) {
    let offsetLeft = Math.abs(triggerRect.scrollLeft + triggerRect.width / 2 - popupRect.scrollLeft);

    if (offsetLeft > popupRect.width - 8) {
      if (triggerRect.width > popupRect.width) {
        offsetLeft = popupRect.width / 2;
      }
      else {
        offsetLeft = popupRect.width - 8;
      }
    }

    if (["top", "top-left", "top-right"].includes(placement)) {
      return {
        left: `${offsetLeft}px`,
        bottom: "0px",
        transform: "translate(-50%, 50%) rotate(45deg)"
      };
    }
    else {
      return {
        left: `${offsetLeft}px`,
        top: "0px",
        transform: "translate(-50%, -50%) rotate(45deg)"
      };
    }
  }
  else {
    let offsetTop = Math.abs(triggerRect.scrollTop + triggerRect.height / 2 - popupRect.scrollTop);

    if (offsetTop > popupRect.height - 8) {
      if (triggerRect.height > popupRect.height) {
        offsetTop = popupRect.height / 2;
      }
      else {
        offsetTop = popupRect.height - 8;
      }
    }

    if (["left", "left-top", "left-right"].includes(placement)) {
      return {
        top: `${offsetTop}px`,
        right: "0px",
        transform: "translate(50%, -50%) rotate(45deg)"
      };
    }
    else {
      return {
        top: `${offsetTop}px`,
        left: "0px",
        transform: "translate(-50%, -50%) rotate(45deg)"
      };
    }
  }
};

export const getScrollElements = (container: HTMLElement | undefined) => {
  const scrollElements: HTMLElement[] = [];
  let element: HTMLElement | undefined = container;

  while (element && element !== document.documentElement) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }

    element = element.parentElement ?? undefined;
  }

  return scrollElements;
};
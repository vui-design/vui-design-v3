import { isServer, isString, isElement } from "./is";

const querySelector = (
  selector: string,
  container?: Document | HTMLElement
) => {
  if (isServer) {
    return null;
  }

  return (container ?? document).querySelector<HTMLElement>(selector);
};

export default function getElement(
  selector: string | HTMLElement | null | undefined,
  container?: Document | HTMLElement
): HTMLElement | null | undefined {
  if (isString(selector)) {
    return querySelector(selector, container);
  }
  else if (isElement(selector)) {
    return selector;
  }
  else {
    return selector;
  }
};
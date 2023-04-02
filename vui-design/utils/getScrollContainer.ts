export default function getScrollContainer(element: HTMLElement, includeHidden?: boolean) {
  let style = getComputedStyle(element);
  let excludeStaticParent = style.position === "absolute";
  let overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;

  if (style.position === "fixed") {
    return document.body;
  }

  for (let parent = element; (parent = parent.parentElement as HTMLElement);) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === "static") {
        continue;
    }

    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return document.body;
};
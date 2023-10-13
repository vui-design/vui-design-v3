import is from "./is";

/**
* @param {HTMLElement} view
* @param {HTMLElement} target
*/
export default function scrollIntoView(view: HTMLElement, target: HTMLElement) {
  if (is.server) {
    return;
  }

  if (!target) {
    return view.scrollTop = 0;
  }

  let offsetParents: HTMLElement[] = [];
  let offsetParent: HTMLElement = target.offsetParent as HTMLElement;

  while (offsetParent && view !== offsetParent && view.contains(offsetParent)) {
    offsetParents.push(offsetParent);
    offsetParent = offsetParent.offsetParent as HTMLElement;
  }

  const top = target.offsetTop + offsetParents.reduce((prev, curr) => (prev + curr.offsetTop), 0);
  const bottom = top + target.offsetHeight;
  const viewRectTop = view.scrollTop;
  const viewRectBottom = viewRectTop + view.clientHeight;

  if (top < viewRectTop) {
    view.scrollTop = top;
  }
  else if (bottom > viewRectBottom) {
    view.scrollTop = bottom - view.clientHeight;
  }
};
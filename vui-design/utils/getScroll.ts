import is from "./is";

/**
* 获取容器水平方向或垂直方向的滚动距离
* @param {Window | Document | HTMLElement} scrollContainer 滚动容器
* @param {Boolean} vertical 是否获取垂直方向的滚动距离，默认为 true
*/
export default function getScroll(
  scrollContainer: Window | Document | HTMLElement, 
  vertical: boolean = true
): number {
  if (typeof window === "undefined") {
    return 0;
  }

  const isWindow = is.window(scrollContainer);
  const isDocument = is.document(scrollContainer);
  const property = vertical ? (isWindow ? "pageYOffset" : "scrollTop") : (isWindow ? "pageXOffset" : "scrollLeft");
  let value = 0;

  if (isWindow) {
    value = (scrollContainer as Window)[property];
  }
  else if (isDocument) {
    value = (scrollContainer as Document).documentElement[property];
  }
  else if (scrollContainer) {
    value = (scrollContainer as HTMLElement)[property];
  }

  if (scrollContainer && !isWindow && !is.number(value)) {
    value = ((scrollContainer as HTMLElement).ownerDocument || (scrollContainer as Document)).documentElement?.[property];
  }

  return value;
};
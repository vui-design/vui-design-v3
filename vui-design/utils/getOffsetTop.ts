/**
* 获取目标元素距离容器顶部的距离
* @param {HTMLElement} element 目标元素
* @param {Window|HTMLElement} container 容器
*/
export default function getOffsetTop(
  element: HTMLElement, 
  container: Window | HTMLElement
): number {
  if (!element) {
    return 0;
  }

  if (!element.getClientRects().length) {
    return 0;
  }

  const rect = (element as HTMLElement).getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;

      return rect.top - container.clientTop;
    }
    else {
      return rect.top - (container as HTMLElement).getBoundingClientRect().top;
    }
  }

  return rect.top;
};
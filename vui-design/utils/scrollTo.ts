import is from "./is";
import getScroll from "./getScroll";

/**
* 从一个位置平滑滚动到另一个位置
* @param {Window | Document | HTMLElement} scrollContainer
* @param {Number} to
* @param {Number} duration
* @param {Function} complete
*/
export default function scrollTo(
  scrollContainer: Window | Document | HTMLElement,
  to: number,
  duration: number = 450,
  complete?: () => void
) {
  let raf = window.requestAnimationFrame;

  if (!raf) {
    raf = callback => window.setTimeout(callback, 1000 / 60);
  }

  const from = getScroll(scrollContainer);
  const distance = Math.abs(from - to);
  const step = Math.ceil(distance / duration * 50);
  const scroll = (start: number, end: number, step: number) => {
    if (start !== end) {
      let nextScrollTop = (start + step > end) ? end : start + step;

      if (start > end) {
        nextScrollTop = (start - step < end) ? end : start - step;
      }

      if (is.window(scrollContainer)) {
        (scrollContainer as Window).scrollTo(nextScrollTop, nextScrollTop);
      }
      else if (is.document(scrollContainer)) {
        (scrollContainer as Document).documentElement.scrollTop = nextScrollTop;
      }
      else {
        (scrollContainer as HTMLElement).scrollTop = nextScrollTop;
      }

      raf(() => scroll(nextScrollTop, end, step));
    }
    else if (is.function(complete)) {
      complete();
    }
  };

  scroll(from, to, step);
};
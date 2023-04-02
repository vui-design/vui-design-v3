import getScrollbarSize from "./getScrollbarSize";

export default function addScrollbarEffect(container?: HTMLElement) {
  let scrollContainer: HTMLElement;
  let clientWidth = 0;
  let offsetWidth = 0;

  if (container === undefined || container === document.body) {
    scrollContainer = document.body;
    clientWidth = document.body.clientWidth;
    offsetWidth = window.innerWidth;

    // workaround for missing window.innerWidth in IE8
    if (!offsetWidth) {
      const documentElementRect = document.documentElement.getBoundingClientRect();

      offsetWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
  }
  else {
    scrollContainer = container;
    clientWidth = container.clientWidth;
    offsetWidth = container.offsetWidth;
  }

  const isOverflowed = clientWidth < offsetWidth;
  const methods = {
    remove() {
      scrollContainer.classList.remove("vui-scrollbar-effect");
      scrollContainer.style.paddingRight = "";
      scrollContainer.style.overflow = "";
    }
  };

  if (scrollContainer.classList.contains("vui-scrollbar-effect")) {
    return methods;
  }

  if (!isOverflowed) {
    return;
  }

  const size = getScrollbarSize();

  if (!size) {
    return;
  }

  scrollContainer.classList.add("vui-scrollbar-effect");
  scrollContainer.style.paddingRight = size + "px";
  scrollContainer.style.overflow = "hidden";

  return methods;
};
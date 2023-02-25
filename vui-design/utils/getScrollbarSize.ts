import canUseDom from "./canUseDom";

let cached: number;

export default function getScrollbarSize(useCache?: boolean) {
  if (!canUseDom()) {
    return 0;
  }

  if (!useCache || cached === undefined) {
    const inner = document.createElement("div");
    let innerStyle = inner.style;

    innerStyle.width = "100%";
    innerStyle.height = "200px";

    const outer = document.createElement("div");
    let outerStyle = outer.style;

    outerStyle.position = "absolute";
    outerStyle.top = "0px";
    outerStyle.left = "0px";
    outerStyle.pointerEvents = "none";
    outerStyle.width = "100px";
    outerStyle.height = "100px";
    outerStyle.visibility = "hidden";

    outer.appendChild(inner);
    document.body.appendChild(outer);

    // 设置子元素超出部分隐藏
    outerStyle.overflow = "hidden";

    let width1 = inner.offsetWidth;

    // 设置子元素超出部分滚动
    outer.style.overflow = "scroll";

    let width2 = inner.offsetWidth;

    if (width1 === width2) {
      width2 = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = width1 - width2;
  }

  return cached;
};

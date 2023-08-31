// 
interface FullscreenHTMLElement extends HTMLElement {
  webkitRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
};

// 
interface FullscreenDocument extends Document {
  documentElement: FullscreenHTMLElement;
  webkitFullscreenElement?: Element;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  msExitFullscreen?: () => void;
};

// 获取全屏元素
export const getElement = (): Element | undefined => {
  return (document as FullscreenDocument).fullscreenElement || (document as FullscreenDocument).webkitFullscreenElement || (document as FullscreenDocument).mozFullScreenElement || (document as FullscreenDocument).msFullscreenElement;
};

// 进入全屏模式
export const enter = (target: FullscreenHTMLElement) => {
  if (target.requestFullscreen) {
    target.requestFullscreen();
  }
  else if (target.webkitRequestFullscreen) {
    target.webkitRequestFullscreen()
  }
  else if (target.mozRequestFullScreen) {
    target.mozRequestFullScreen()
  }
  else if (target.msRequestFullscreen) {
    target.msRequestFullscreen()
  }
  else {
    console.warn("[Vui Design][Fullscreen]: The Fullscreen API is not supported.");
  }
};

// 退出全屏模式
export const leave = () => {
  const target: FullscreenDocument = document;

  if (target.exitFullscreen) {
    target.exitFullscreen();
  }
  else if (target.webkitExitFullscreen) {
    target.webkitExitFullscreen();
  }
  else if (target.mozCancelFullScreen) {
    target.mozCancelFullScreen();
  }
  else if (target.msExitFullscreen) {
    target.msExitFullscreen();
  }
  else {
    console.warn("[Vui Design][Fullscreen]: The Fullscreen API is not supported.");
  }
};

// 注册全屏事件
export const addEventListener = (callback: () => void) => {
  document.addEventListener("fullscreenchange", callback);
  document.addEventListener("webkitfullscreenchange", callback);
  document.addEventListener("mozfullscreenchange", callback);
  document.addEventListener("MSFullscreenChange", callback);
};

// 注销全屏事件
export const removeEventListener = (callback: () => void) => {
  document.removeEventListener("fullscreenchange", callback);
  document.removeEventListener("webkitfullscreenchange", callback);
  document.removeEventListener("mozfullscreenchange", callback);
  document.removeEventListener("MSFullscreenChange", callback);
};

// 
export default {
  getElement,
  enter,
  leave,
  addEventListener,
  removeEventListener
};
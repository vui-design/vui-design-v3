/**
* 用于向指定元素添加事件句柄
* @param {Window|HTMLElement} target 需要添加事件的目标元素
* @param {String} type 事件类型
* @param {Function} listener 事件回调函数
* @param {Boolean|Object} option 选项
*/

export interface EventListener {
  remove: () => void;
};

export default function addEventListener(
  target: Window | HTMLElement,
  type: string,
  listener: EventListenerOrEventListenerObject,
  option?: boolean | AddEventListenerOptions | undefined
): EventListener {
  let useCapture = false;

  if (typeof option === "boolean") {
    useCapture = option;
  }
  else if (typeof option === "object") {
    useCapture = option.capture || false;
  }

  if (target && target.addEventListener) {
    target.addEventListener(type, listener, option || false);
  }

  return {
    remove() {
      if (target && target.removeEventListener) {
        target.removeEventListener(type, listener, useCapture);
      }
    }
  };
};
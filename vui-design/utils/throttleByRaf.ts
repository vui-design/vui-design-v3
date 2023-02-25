import { raf, caf } from "./raf";

export default function throttleByRaf(callback: (...args: any[]) => void) {
  let timer = 0;

  const throttle = (...args: any[]): void => {
    if (timer) {
      caf(timer);
    }

    timer = raf(() => {
      timer = 0;
      callback(...args);
    });
  };

  throttle.cancel = () => {
    caf(timer);
    timer = 0;
  };

  return throttle;
};
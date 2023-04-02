export default function createChainedFunction(...callbacks: any) {
  if (callbacks.length === 1) {
    return callbacks[0];
  }

  return function chainedFunction(this: any) {
    for (let i = 0; i < callbacks.length; i++) {
      const callback: any = callbacks[i];

      if (callback && callback.apply) {
        callback.apply(this, arguments);
      }
    }
  };
};
const target = typeof window === "undefined" ? global : window;

export const raf = target.requestAnimationFrame;
export const caf = target.cancelAnimationFrame;
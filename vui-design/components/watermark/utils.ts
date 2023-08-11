export const getDevicePixelRatio = () => {
  return window.devicePixelRatio ?? 1;
};

export const maybeRefresh = (mutation: MutationRecord, watermarkRef: HTMLDivElement) => {
  let flag = false;

  if (mutation.removedNodes.length) {
    flag = Array.from(mutation.removedNodes).some(node => node === watermarkRef);
  }

  if (mutation.type === "attributes" && mutation.target === watermarkRef) {
    flag = true;
  }

  return flag;
};

export default {
  getDevicePixelRatio,
  maybeRefresh
};
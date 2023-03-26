import type { Data } from "../types";

export default function omit<T extends Data, K extends keyof any>(
  object: T,
  keys: Array<K>
): Omit<T, K> {
  const result = {
    ...object
  };

  for (const key of keys) {
    // @ts-ignore
    if (key in result) {
      // @ts-ignore
      delete result[key];
    }
  }

  return result;
};
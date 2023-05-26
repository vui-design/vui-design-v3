import type { Key } from "../../types";
import is from "../../utils/is";

export const getActiveKeys = (
  keys: Key | undefined | Key[],
  accordion: boolean
): Key | undefined | Key[] => {
  if (accordion) {
    return is.array(keys) ? keys[0] : keys;
  }
  else {
    return is.array(keys) ? [...keys] : (keys ? [keys] : []);
  }
};

export default {
  getActiveKeys
};
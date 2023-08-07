import type { Gutter } from "./types";
import { sizes } from "../../constants";
import { gutters, withDividerGutters } from "./constants";
import is from "../../utils/is";

const getGutter = (
  type: "column" | "row",
  gutter: Gutter,
  withDivider: boolean
): string => {
  let gap: string;

  if (is.string(gutter)) {
    if (sizes.includes(gutter)) {
      gap = `${type === "column" && withDivider ? withDividerGutters[gutter] : gutters[gutter]}px`;
    }
    else {
      gap = gutter;
    }
  }
  else {
    gap = `${gutter}px`;
  }

  return gap;
};

export const getGutters = (
  gutter: Gutter | [Gutter, Gutter],
  withDivider: boolean
): [string, string] => {
  if (is.string(gutter) || is.number(gutter)) {
    return [
      getGutter("column", gutter, withDivider),
      getGutter("row", gutter, withDivider)
    ];
  }
  else {
    return gutter.map((gap, gapIndex) => getGutter(gapIndex === 0 ? "column" : "row", gap, withDivider)) as [string, string];
  }
};

export default {
  getGutters
};
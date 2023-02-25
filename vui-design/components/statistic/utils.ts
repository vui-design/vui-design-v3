import is from "../../utils/is";
import padStart from "../../utils/padStart";

const units = [
  ["Y", 1000 * 60 * 60 * 24 * 365],
  ["M", 1000 * 60 * 60 * 24 * 30],
  ["D", 1000 * 60 * 60 * 24],
  ["H", 1000 * 60 * 60],
  ["m", 1000 * 60],
  ["s", 1000],
  ["S", 1]
];

export const now = (): number => new Date().getTime();

export const parser = (value: string | number | Date | undefined): number => {
  if (is.undefined(value)) {
    return 0;
  }

  if (is.string(value)) {
    value = value.replace(/-/g,  "/");
  }

  const date = new Date(value);
  const timestamp = date.getTime();

  if (is.nan(timestamp)) {
    return 0;
  }

  return timestamp;
};

export const formatter = (value: number, now: number, format = "HH:mm:ss"): string => {
  return formatTimestamp(Math.max(value - now, 0), format);
};

export const formatTimestamp = (duration: number, format: string): string => {
  let left = duration;
  let index = 0;

  const regex = /\[[^\]]*\]/g;
  const keepList = (format.match(regex) || []).map(string => string.slice(1, -1));
  const template = format.replace(regex, "[]");
  const replaced = units.reduce((current, [name, unit]) => {
    if (current.indexOf(name as string) !== -1) {
      const value = Math.floor(left / (unit as number));

      left -= value * (unit as number);

      return current.replace(new RegExp(name + "+", "g"), match => {
        const length = match.length;

        return padStart(value.toString(), length, "0");
      });
    }

    return current;
  }, template);

  return replaced.replace(regex, () => {
    const match = keepList[index];

    index += 1;

    return match;
  });
};

export default {
  now,
  parser,
  formatter
};
import is from "../../utils/is";
import getNumberPrecision from "../../utils/getNumberPrecision";

// 
const numeric = /^[\+\-]?\d*?\.?\d*?$/;

// 判断用户输入是否为空或匹配数值格式（为空时表示清空输入）
export const isCompleteNumber = (
  text: string
): boolean => {
  const string = text.trim();
  let bool = false;

  if (string.length === 0 || (string.length > 0 && numeric.test(string))) {
    bool = true;
  }

  return bool;
};

// 判断用户输入是否可转换为有效数值
export const isValidNumber = (
  value: string | number | undefined
): boolean => {
  let bool = false;

  if (is.string(value)) {
    const string = value.trim();

    bool = string.length > 0 && numeric.test(string);
  }
  else if (is.number(value)) {
    bool = true;
  }
  else if (value === undefined) {
    bool = false;
  }

  return bool;
};

// 获取数值精度
export const getPrecision = (
  value: number,
  step: number | undefined = 1,
  precision: number | undefined
): number => {
  const a = getNumberPrecision(value);
  const b = getNumberPrecision(step);

  if (!is.number(precision)) {
    return Math.max(a, b);
  }

  if (b > precision) {
    console.warn("[Vui Design][InputNumber]: The \"precision\" should not be less than the decimal places of \"step\"!");
  }

  return precision;
};

// 设置数值精度
export const setPrecision = (
  value: number,
  precision: number
): number => {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
};

// 累加
export const increase = (
  value: number | undefined,
  step: number = 1,
  precision: number | undefined
): number => {
  if (!is.number(value)) {
    return 0;
  }

  precision = getPrecision(value, step, precision);

  const times = Math.pow(10, precision);

  return setPrecision((value * times + step * times) / times, precision);
};

// 累减
export const decrease = (
  value: number | undefined,
  step: number = 1,
  precision: number | undefined
): number => {
  if (!is.number(value)) {
    return 0;
  }

  precision = getPrecision(value, step, precision);

  const times = Math.pow(10, precision);

  return setPrecision((value * times - step * times) / times, precision);
};

// 约束自定义属性
export const restrict = (
  value: string | number | undefined,
  defaultValue?: number
): number | undefined => {
  return isValidNumber(value) ? Number(value) : defaultValue;
};

// 约束输入值
export const restore = (
  value: string | number | undefined,
  min: number | undefined,
  max: number | undefined,
  step: number | undefined,
  precision: number | undefined
): number | undefined => {
  let result;

  if (is.string(value)) {
    result = value.trim();
    result = result.length > 0 ? Number(result) : undefined;
  }
  else if (is.number(value)) {
    result = value;
  }

  if (!is.number(result)) {
    return;
  }

  precision = getPrecision(result, step, precision);

  if (is.number(precision)) {
    result = setPrecision(result, precision);
  }

  if (is.number(min) && result < min) {
    result = min;
  }

  if (is.number(max) && result > max) {
    result = max;
  }

  return result;
};

// 
export const convertToString = (
  value: number | undefined,
  step: number | undefined,
  precision: number | undefined
): string => {
  let string = "";

  if (!is.number(value)) {
    return string;
  }

  precision = getPrecision(value, step, precision);

  if (is.number(precision)) {
    string = value.toFixed(precision);
  }
  else {
    string = value.toString();
  }

  return string;
};

export default {
  isCompleteNumber,
  isValidNumber,
  getPrecision,
  setPrecision,
  increase,
  decrease,
  restrict,
  restore,
  convertToString
};
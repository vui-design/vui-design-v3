export default function getNumberPrecision(value: number): number {
  if (value == undefined) {
    return 0;
  }

  let precision;

  try {
    precision = value.toString().split(".")[1].length;
  }
  catch(e) {
    precision = 0;
  }

  return precision;
};
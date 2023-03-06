export default function clamp(
  number: number,
  lower: number,
  upper: number
): number {
  return Math.min.call(null, Math.max.call(null, number, lower), upper);
};
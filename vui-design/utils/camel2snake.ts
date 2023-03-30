export default function camel2snake(
  value: string
): string {
  return value.replace(/([A-Z])/g, (match, p1, offset, string) => `-${p1.toLowerCase()}`);
};
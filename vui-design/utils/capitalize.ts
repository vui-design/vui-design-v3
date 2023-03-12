export default function capitalize(
  value: string
): string {
  const string = String(value);
  const initial = string[0];
  const rest = string.slice(1)

  return initial.toUpperCase() + rest.slice(1);
};
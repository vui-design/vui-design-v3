export default function getEventTarget(event: Event): EventTarget | null {
  return (event || window.event).target;
};
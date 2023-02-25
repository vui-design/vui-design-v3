/**
* 获取触发事件的元素对象
* @returns {Event} event 对象
*/
export default function getElementByEvent(event: Event): EventTarget | null {
  return (event || window.event).target;
};
/**
* 获取组件 class 样式类名
* @param {String} classNamePrefix 自定义样式类名的前缀
* @param {String} name 组件名称
*/
export default function getClassName(classNamePrefix: string = "vui", name: string): string {
  return classNamePrefix + "-" + name;
};
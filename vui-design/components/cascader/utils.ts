import type { Option, OptionKeys, Formatter, Filter } from "./types";
import is from "../../utils/is";
import clone from "../../utils/clone";

/**
* 默认的选项键值属性
*/
const optionKeys: OptionKeys = {
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled"
};

/**
* 默认的筛选函数
* @param {String} keyword 查询关键词
* @param {Object} option 选项
* @param {property} property 选项属性
*/
const picker = (
  keyword: string,
  option: Option,
  property: string
) => {
  if (!keyword) {
    return true;
  }

  const regexper = new RegExp(String(keyword).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "i");

  return regexper.test(option[property]);
};

/**
* 扁平化处理选项列表
* @param {Array} options 选项列表
* @param {Object} optionKeys 选项键值属性
* @param {Object} parent 父级选项
*/
const flatten = (
  options: Option[],
  optionKeys: OptionKeys,
  parent?: Option
): Option[] => {
  const { value: valueKey, label: labelKey, children: childrenKey, disabled: disabledKey } = optionKeys;
  let list: Option[] = [];

  options.forEach(option => {
    const value = option[valueKey as string];
    const label = option[labelKey as string];
    const children = option[childrenKey as string];
    const disabled = option[disabledKey as string];

    let item: Option = {
      path: parent ? parent.path?.concat(option) : [option],
      leaf: children ? false : true
    };

    item[valueKey as string] = value;
    item[labelKey as string] = parent ? (parent[labelKey as string] + " / " + label) : label;
    item[disabledKey as string] = (parent && parent[disabledKey as string]) || disabled;

    list.push(item);

    if (children) {
      list.push.apply(list, flatten(children, optionKeys, item));
    }
  });

  return list;
};

/**
* 获取选项键值属性
* @param {Object} customizedOptionKeys 用户自定义的选项键值属性
*/
export const getOptionKeys = (customizedOptionKeys: OptionKeys) => {
  return {
    ...optionKeys,
    ...customizedOptionKeys
  } as OptionKeys;
};

/**
* 根据搜索关键字 keyword 筛选 options 选项列表
* @param {Array} options 选项列表
* @param {Function} filter 筛选函数
* @param {String} property 筛选属性
* @param {String} keyword 搜索关键字
*/
export const getFilteredOptions = (
  options: Option[],
  optionKeys: OptionKeys,
  changeOnSelect: boolean,
  filter: boolean | Filter,
  property: string = "children",
  keyword: string
): Option[] => {
  const list = flatten(options, optionKeys);
  const predicate = is.function(filter) ? filter : picker;
  let array: Option[] = [];

  list.forEach(item => {
    if (!changeOnSelect && !item.leaf) {
      return;
    }

    if (!predicate(keyword, item, optionKeys[property])) {
      return;
    }

    let target: Option = {
      ...item
    };

    target[optionKeys.label as string] = target[optionKeys.label as string].replace(new RegExp(keyword, "g"), "<b>" + keyword + "</b>");

    array.push(target);
  });

  return array;
};

/**
* 根据选中值及选项列表获取选中的选项集合
* @param {Array} value 选中值
* @param {Array} options 选项列表
* @param {Object} optionKeys 选项键名
*/
export const getSelection = (
  value: Array<string | number>,
  options: Option[],
  optionKeys: OptionKeys
) => {
  let defaultValue = clone(value);
  let result: Option[] = [];

  if (!defaultValue.length) {
    return result;
  }

  const { value: valueKey, children: childrenKey } = optionKeys;
  const target = defaultValue.shift();
  const option = options.find(option => option[valueKey as string] === target);

  if (option) {
    result = result.concat(clone(option));

    if (option[childrenKey as string]) {
      result = result.concat(getSelection(defaultValue, option[childrenKey as string], optionKeys));
    }
  }

  return result;
};

/**
* 根据选中的选项集合获取显示文本
* @param {Array} options 选中的选项集合
* @param {Object} optionKeys 选项键名
* @param {Function} formatter 选择后展示的渲染函数，用于自定义显示格式
*/
export const getSelectionText = (
  options: Option[],
  optionKeys: OptionKeys,
  formatter: Formatter
) => {
  if (options.length === 0) {
    return "";
  }

  return formatter(options.map(option => option[optionKeys.label as string]), clone(options));
};

/**
* 以默认导出的方式导出所有接口或数据
*/
export default {
  optionKeys,
  getOptionKeys,
  getFilteredOptions,
  getSelection,
  getSelectionText
};
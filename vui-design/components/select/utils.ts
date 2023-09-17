import type { Component, Slots, VNode } from "vue";
import type { Value, Filter, Option } from "./types";
import is from "../../utils/is";
import { getChildrenByNames, getChildrenText, getChildren } from "../../utils/vue";

/**
* 默认筛选函数
* @param {String} keyword 关键词
* @param {Object} option 选项
* @param {String} property 筛选时按选项的指定属性进行过滤，如设置为 children 表示对内嵌内容进行搜索
*/
const defaultFilter = (
  keyword: string,
  option: Option,
  property: string
) => {
  if (!keyword) {
    return true;
  }

  const regexper = new RegExp(String(keyword).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "i");

  if (property === "value" || property === "label") {
    const value = option[property];

    if (is.string(value) || is.number(value) || is.boolean(value)) {
      return regexper.test(String(value));
    }
    else {
      return true;
    }
  }
  else if (property === "children") {
    return regexper.test(getChildrenText(option.children as (Value | VNode[])));
  }
  else {
    return true;
  }
};

/**
* 根据选中值及选项列表获取选中的选项列表（多选）
* @param {Array} value 选中值
* @param {Array} options 选项列表
* @param {Boolean} multiple 是否支持多选
* @param {Array} selection 历史选中的选项列表
*/
const getSelectionOptions = (
  value: Value[] | undefined,
  options: Option[],
  selection: Option[] | undefined
): Option[] => {
  let array: Option[] = [];

  if (is.array(value)) {
    value.forEach(v => {
      let target: Option | undefined;

      if (selection && selection.length > 0) {
        target = selection.find(target => target.value === v);
      }

      const option = getSelectionOption(v, options, target);

      if (!option) {
        return;
      }

      array.push(option);
    });
  }

  return array;
};

/**
* 根据选中值及选项列表获取选中的选项（单选）
* @param {String | Number | Boolean} value 选中值
* @param {Array} options 选项列表
* @param {Object} selection 历史选中的选项
*/
const getSelectionOption = (
  value: Value | undefined,
  options: Option[],
  selection: Option | undefined
): Option | undefined => {
  if (is.undefined(value)) {
    return;
  }

  const option = options.find(option => (option.type === "option" || option.type === "keyword") && option.value === value);

  if (option) {
    return option;
  }

  if (selection && selection.value === value) {
    return selection;
  }

  return {
    key: value,
    type: "option",
    level: 1,
    value: value,
    label: value,
    children: value,
    disabled: false
  } as Option;
};

/**
* 从 VNodes 中解析获取 options 选项列表
* @param {Array} vnodes 插槽内容
* @param {Number} level 层级
* @param {Boolean} parent 父级组件
*/
export const getOptions = (
  vnodes: VNode[] | undefined,
  level: number = 1,
  parent?: any
) => {
  let options: Option[] = [];

  getChildrenByNames(vnodes, ["vui-option-group", "vui-option"]).forEach((vnode: VNode, index: number) => {
    const { type, props, children } = vnode;
    let option: Option = {
      key: parent ? `${parent.key}-${index}` : `${index}`,
      type: "",
      level: level,
      value: props?.value,
      label: props?.label,
      children: undefined,
      disabled: props?.disabled === undefined || props?.disabled === null || props?.disabled === false ? false : true
    };

    if ((children as Slots)?.label) {
      option.label = getChildren((children as Slots)?.label?.());
    }

    if (parent && parent.disabled && !option.disabled) {
      option.disabled = parent.disabled;
    }

    const name = (type as Component).name;

    if (name === "vui-option-group") {
      option.type = "option-group";
      option.children = getOptions((children as Slots)?.default?.(), level + 1, option);

      options.push(option);
      options.push.apply(options, option.children);
    }
    else if (name === "vui-option") {
      option.type = "option";
      option.children = getChildren((children as Slots)?.default?.());

      options.push(option);
    }
  });

  return options;
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
  filter: boolean | Filter,
  property: string = "children",
  keyword: string
): Option[] => {
  const predicate = is.function(filter) ? filter : defaultFilter;
  let array: Option[] = [];

  options.forEach(target => {
    if (target.type === "option-group") {
      const optgroup = {
        ...target,
        children: getFilteredOptions(target.children as Option[], filter, property, keyword)
      };

      if (optgroup.children.length) {
        array.push(optgroup);
      }
    }
    else if (target.type === "option") {
      if (!predicate(keyword, target, property)) {
        return;
      }

      array.push(target);
    }
  });

  return array;
};

/**
* 根据搜索关键字 keyword 查找 option 选项
* @param {Array} options 选项列表
* @param {String} property 筛选属性
* @param {String} keyword 搜索关键字
*/
export const getFilteredOption = (
  options: Option[],
  property: string = "children",
  keyword: string
) => {
  return options.find(option => {
    if (option.type !== "option" && option.type !== "keyword") {
      return false;
    }

    if (property === "value") {
      return option.value === keyword;
    }
    else if (property === "label") {
      return option.label === keyword
    }
    else if (property === "children") {
      return getChildrenText(option.children as (Value | VNode[])) === keyword;
    }
    else {
      return false;
    }
  });
};

/**
* 获取自动创建的选项
* @param {String} keyword 搜索关键字
*/
export const getCreatedOption = (
  keyword: string
): Option => {
  return {
    key: "keyword",
    type: "keyword",
    level: 1,
    value: keyword,
    label: keyword,
    children: keyword,
    disabled: false
  } as Option
};

/**
* 修补选中值
* @param {Array} value 选中值
* @param {Boolean} multiple 是否支持多选
*/
export const getValue = (
  value: Value[] | Value | undefined,
  multiple: boolean
) => {
  if (multiple) {
    return is.array(value) ? value : (is.string(value) || is.number(value) || is.boolean(value) ? [value] : []);
  }
  else {
    return is.array(value) ? (is.string(value[0]) || is.number(value[0]) || is.boolean(value[0]) ? value[0] : undefined) : value;
  }
};

/**
* 根据选中值及选项列表获取选中的选项或选项列表
* @param {Array} value 选中值
* @param {Array} options 选项列表
* @param {Boolean} multiple 是否支持多选
* @param {Array} selection 历史选中的选项或选项列表
*/
export const getSelection = (
  value: Value[] | Value | undefined,
  options: Option[],
  multiple: boolean,
  selection: Option[] | Option | undefined
) => {
  if (multiple) {
    return getSelectionOptions(value as (Value[] | undefined), options, selection as (Option[] | undefined));
  }
  else {
    return getSelectionOption(value as (Value | undefined), options, selection as (Option | undefined));
  }
};

/**
* 默认导出指定接口
*/
export default {
  getOptions,
  getFilteredOptions,
  getFilteredOption,
  getCreatedOption,
  getValue,
  getSelection
};
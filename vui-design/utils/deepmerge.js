import { isFunction, isArray, isMergeableObject } from "./is";

function createEmptyTarget(value) {
	return isArray(value) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value)) ? deepmerge(createEmptyTarget(value), value, options) : value;
}

function arrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options);
	});
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge;
  }

  const customMerge = options.customMerge(key);

	return isFunction(customMerge) ? customMerge : deepmerge;
}

function mergeObject(target, source, options) {
  let destination = {};

	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
  }

	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
    else {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		}
  });

	return destination;
}

function deepmerge(target, source, options = {}) {
  options.arrayMerge = options.arrayMerge || arrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;

  const targetIsArray = isArray(target);
  const sourceIsArray = isArray(source);
  const targetAndSourceTypeMatched = targetIsArray === sourceIsArray;

  if (!targetAndSourceTypeMatched) {
    return cloneUnlessOtherwiseSpecified(source, options);
  }
  else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  }
  else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!isArray(array)) {
		throw new Error("[deepmerge.all] The first argument should be an array!");
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options);
	}, {});
};

export default deepmerge;
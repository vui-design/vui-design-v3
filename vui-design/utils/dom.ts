import { isServer } from "./is";

const trim = (string: string) => (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
const camelcase = (name: string) => name.replace(/([\:\-\_]+(.))/g, (match, separator, letter, offset) => offset ? letter.toUpperCase() : letter).replace(/^moz([A-Z])/, "Moz$1");

// 绑定事件
export const on = (() => {
	if (isServer) {
		return () => {};
	}

	return function<K extends keyof HTMLElementEventMap>(
		element: HTMLElement | Window,
		event: K,
		handler: (ev: HTMLElementEventMap[K]) => void
	) {
		if (element && event && handler) {
			element.addEventListener(event, handler as EventListenerOrEventListenerObject, false);
		}
	};
})();

// 注销事件
export const off = (() => {
	if (isServer) {
		return () => {};
	}

	return function<K extends keyof HTMLElementEventMap>(
		element: HTMLElement | Window,
		event: K,
		handler: (ev: HTMLElementEventMap[K]) => void
	) {
		if (element && event) {
			element.removeEventListener(event, handler as EventListenerOrEventListenerObject, false);
		}
	};
})();

// 绑定一次性事件
export const once = function<K extends keyof HTMLElementEventMap>(
	element: HTMLElement | Window,
	event: K,
	handler: (ev: HTMLElementEventMap[K]) => void
) {
	const callback = function() {
		if (handler) {
			handler.apply(this, arguments);
		}

		off(element, event, callback);
	};

	on(element, event, callback);
};

// 判断给定元素是否含有特定的 class 样式类名
export function hasClass(element: HTMLElement, className: string) {
	if (!element || !className) {
		return false;
	}

	if (className.indexOf(" ") !== -1) {
		throw new Error("className should not contain space.");
	}

	if (element.classList) {
		return element.classList.contains(className);
	}
	else {
		return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
	}
};

// 为给定的元素添加特定的 class 样式类名
export function addClass(element: HTMLElement, className: string) {
	if (!element) {
		return;
	}

	let currentClassNames = trim(element.className).split(" ");
	let classNames: string[] = [];

	if (className) {
		classNames = className.split(" ");
	}

	for (let i = 0, length = classNames.length; i < length; i++) {
		const value = classNames[i];

		if (!value) {
			continue;
		}

		if (element.classList) {
			element.classList.add(value);
		}
		else if (!hasClass(element, value)) {
			currentClassNames.push(value);
		}
	}

	if (!element.classList) {
		element.className = currentClassNames.join(" ");
	}
};

// 为给定的元素去除特定的 class 样式类名
export function removeClass(element: HTMLElement, className: string) {
	if (!element || !className) {
		return;
	}

	let currentClassNames = " " + element.className + " ";
	let classNames = className.split(" ");

	for (let i = 0, length = classNames.length; i < length; i++) {
		const value = classNames[i];

		if (!value) {
			continue;
		}

		if (element.classList) {
			element.classList.remove(value);
		}
		else if (hasClass(element, value)) {
			currentClassNames = currentClassNames.replace(" " + value + " ", " ");
		}
	}

	if (!element.classList) {
		element.className = trim(currentClassNames);
	}
};

// 获取给定的元素的特定 style 样式
export const getStyle = function(element: HTMLElement, styleName: string) {
	if (isServer) {
		return;
	}

	if (!element || !styleName) {
		return null;
	}

	styleName = camelcase(styleName);

	if (styleName === "float") {
		styleName = "cssFloat";
	}

	try {
		var computed = document?.defaultView?.getComputedStyle(element, "");

		return element.style[styleName] || (computed ? computed[styleName] : null);
	}
	catch(e) {
		return element.style[styleName];
	}
};

// 设置给定的元素的特定 style 样式
export function setStyle(element: HTMLElement, styleName: any, value: string) {
	if (!element || !styleName) {
		return;
	}

	if (typeof styleName === "object") {
		for (let prop in styleName) {
			if (styleName.hasOwnProperty(prop)) {
				setStyle(element, prop, styleName[prop]);
			}
		}
	}
	else {
		styleName = camelcase(styleName);

		element.style[styleName] = value;
	}
};

// 判断给定的元素内容是否可滚动
export function isScrollable(element: HTMLElement, vertical: string) {
	if (isServer) {
		return;
	}

	const determinedDirection = vertical !== null || vertical !== undefined;
	const overflow = determinedDirection ? vertical ? getStyle(element, "overflow-y") : getStyle(element, "overflow-x") : getStyle(element, "overflow");

	return overflow.match(/(scroll|auto)/);
};

// 判断给定的元素是否在特定容器的可见范围内
export function isInContainer(element: HTMLElement, container: HTMLElement): boolean {
	if (isServer || !element || !container) {
		return false;
	}

	const rect = element.getBoundingClientRect();
	let boundary;

	if ([window, document, document.documentElement, null, undefined].includes(container)) {
		boundary = {
			top: 0,
			left: 0,
			right: window.innerWidth,
			bottom: window.innerHeight
		};
	}
	else {
		boundary = container.getBoundingClientRect();
	}

	return rect.top < boundary.bottom && rect.bottom > boundary.top && rect.right > boundary.left && rect.left < boundary.right;
};

// 获取给定的元素的滚动父容器
export function getScrollContainer(element: any, vertical: string) {
	if (isServer) {
		return;
	}

	let parent = element;

	while(parent) {
		if ([window, document, document.documentElement].includes(parent)) {
			return window;
		}

		if (isScrollable(parent, vertical)) {
			return parent;
		}

		parent = parent.parentNode;
	}

	return parent;
};
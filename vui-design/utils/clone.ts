import is from "./is";

const Map = window.Map ?? function() {};
const Set = window.Set ?? function() {};
const Promise = window.Promise ?? function() {};

const isInstanceOf = (value: any, type: any) => {
  return type !== null && value instanceof type;
};

const getRegExpFlags = (value: RegExp) => {
  var flags = "";

  if (value.global) {
    flags += "g";
  }

  if (value.ignoreCase) {
    flags += "i";
  }

  if (value.multiline) {
    flags += "m";
  }

  return flags;
};

interface Circular {
  circular?: boolean;
  depth?: number;
  prototype?: Record<string, any>;
  includeNonEnumerable?: boolean;
};

export default (parent: any, circular?: boolean | Circular, depth?: number, prototype?: Record<string, any>, includeNonEnumerable?: boolean) => {
  if (typeof circular === "object") {
    includeNonEnumerable = circular.includeNonEnumerable;
    prototype = circular.prototype;
    depth = circular.depth;
    circular = circular.circular;
  }

  let parents: any[] = [];
  let children: any[] = [];
  let useBuffer = typeof Buffer !== "undefined";

  if (typeof circular === "undefined") {
    circular = true;
  }

  if (typeof depth === "undefined") {
    depth = Infinity;
  }

  const copy = (parent: any, depth: number) => {
    if (parent == null) {
      return null;
    }

    if (depth === 0) {
      return parent;
    }

    let proto;
    let child: any;

    if (typeof parent !== "object") {
      return parent;
    }

    if (isInstanceOf(parent, Map)) {
      child = new Map();
    }
    else if (isInstanceOf(parent, Set)) {
      child = new Set();
    }
    else if (isInstanceOf(parent, Promise)) {
      child = new Promise((resolve, reject) => {
        parent.then((value: any) => {
          resolve(copy(value, depth - 1));
        }, (error: any) => {
          reject(copy(error, depth - 1));
        });
      });
    }
    else if (is.array(parent)) {
      child = [];
    }
    else if (is.regexp(parent)) {
      child = new RegExp(parent.source, getRegExpFlags(parent));

      if (parent.lastIndex) {
        child.lastIndex = parent.lastIndex;
      }
    }
    else if (is.date(parent)) {
      child = new Date(parent.getTime());
    }
    else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.from) {
        child = Buffer.from(parent);
      }
      else {
        child = new Buffer(parent.length);
        parent.copy(child);
      }

      return child;
    }
    else if (isInstanceOf(parent, Error)) {
      child = Object.create(parent);
    }
    else {
      if (typeof prototype === "undefined") {
        proto = Object.getPrototypeOf(parent);
      }
      else {
        proto = prototype;
      }

      child = Object.create(proto);
    }

    if (circular) {
      let index = parents.indexOf(parent);

      if (index !== -1) {
        return children[index];
      }

      parents.push(parent);
      children.push(child);
    }

    if (isInstanceOf(parent, Map)) {
      parent.forEach((value: any, key: any) => {
        const newKey = copy(key, depth - 1);
        const newValue = copy(value, depth - 1);

        child.set(newKey, newValue);
      });
    }

    if (isInstanceOf(parent, Set)) {
      parent.forEach((value: any) => {
        child.add(copy(value, depth - 1));
      });
    }

    for (let i in parent) {
      let attrs = Object.getOwnPropertyDescriptor(parent, i);

      if (attrs) {
        child[i] = copy(parent[i], depth - 1);
      }

      try {
        const objProperty = Object.getOwnPropertyDescriptor(parent, i);

        if (typeof objProperty?.set === "undefined") {
          continue;
        }

        child[i] = copy(parent[i], depth - 1);
      }
      catch(e) {
        if (e instanceof TypeError) {
          continue;
        }
        else if (e instanceof ReferenceError) {
          continue;
        }
      }
    }

    if (Object.getOwnPropertySymbols) {
      const symbols = Object.getOwnPropertySymbols(parent);

      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        const descriptor = Object.getOwnPropertyDescriptor(parent, symbol);

        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }

        child[symbol] = copy(parent[symbol], depth - 1);

        Object.defineProperty(child, symbol, descriptor!);
      }
    }

    if (includeNonEnumerable) {
      const ownPropertyNames = Object.getOwnPropertyNames(parent);

      for (let i = 0; i < ownPropertyNames.length; i++) {
        const ownPropertyName = ownPropertyNames[i];
        const descriptor = Object.getOwnPropertyDescriptor(parent, ownPropertyName);

        if (descriptor && descriptor.enumerable) {
          continue;
        }

        child[ownPropertyName] = copy(parent[ownPropertyName], depth - 1);

        Object.defineProperty(child, ownPropertyName, descriptor!);
      }
    }

    return child;
  };

  return copy(parent, depth);
};
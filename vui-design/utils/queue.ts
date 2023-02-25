const pending: Function[] = [];
const next = function() {
  const fn = pending.shift();

  if (fn) {
    fn(next);
  }
};

export default function queue(fn: Function) {
  pending.push(fn);

  if (pending.length == 1) {
    next();
  }
};
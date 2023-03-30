export default function createChainedFunction() {
  const args = [].slice.call(arguments, 0);

  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (let i = 0; i < args.length; i++) {
      const arg: any = args[i];

      if (arg && arg.apply) {
        arg.apply(this, arguments);
      }
    }
  };
};
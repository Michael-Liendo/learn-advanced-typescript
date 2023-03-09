// en TS
function sum(...args: number[]) {
  const addition = args.reduce((num, arg) => num + arg, 0);
  return addition;
}

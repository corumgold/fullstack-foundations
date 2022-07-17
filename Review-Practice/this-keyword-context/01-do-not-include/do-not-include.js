/* eslint-disable no-unused-vars, no-extend-native */

//solveCount = 2;

Array.prototype.doNotInclude = function (args) {
  if (!Array.isArray(args)) args = [args];
  return this.filter((element) => !args.includes(this.indexOf(element)));
};

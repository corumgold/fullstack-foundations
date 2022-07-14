/* eslint-disable no-unused-vars */

//solveCount = 2;

function concatString() {
  let args = Array.from(arguments);
  return args.join('');
}

function yourFunctionRunner() {
  let funcs = [...arguments];
  return funcs.map((func) => func()).join('');
}

function makeAdder(num) {
  return function (num2) {
    return num + num2;
  };
}

function once(func) {
  let ran = false;
  return function () {
    if (!ran) {
      ran = true;
      return func();
    } else return 'the function has already been called...';
  };
}

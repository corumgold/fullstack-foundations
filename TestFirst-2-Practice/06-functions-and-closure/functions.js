/* eslint-disable no-unused-vars */

//solveCount = 3;

function concatString() {
  return Array.from(arguments).join('');
}

function yourFunctionRunner() {
  return [...arguments].map((func) => func()).join('');
}

function makeAdder(num) {
  return function (numAdded) {
    return num + numAdded;
  };
}

function once(func) {
  let ran = false;
  return () => {
    if (!ran) {
      ran = true;
      return func();
    } else return 'The function has already been called...';
  };
}

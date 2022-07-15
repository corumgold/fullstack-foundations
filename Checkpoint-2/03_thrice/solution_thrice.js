/* eslint-disable no-unused-vars */
//solveCount = 2;

function thrice(func) {
  let callCount = 0;
  return function () {
    if (callCount < 3) {
      callCount++;
      return func();
    }
  };
}

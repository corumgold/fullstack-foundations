/* eslint-disable no-unused-vars */

//solveCount = 2;

function sometimes(func) {
  let runCt = 0;
  return function (...arg) {
    runCt++;
    if (runCt < 4 || runCt % 2 === 1) {
      return func(...arg);
    } else return 'I do not know!';
  };
}

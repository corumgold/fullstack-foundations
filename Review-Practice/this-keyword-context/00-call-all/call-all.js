/* eslint-disable no-unused-vars */

//solveCount = 2;

function callAll(obj, funcArr) {
  return funcArr.reduce((acc, curr) => {
    acc.push(curr.call(obj));
    return acc;
  }, []);
}

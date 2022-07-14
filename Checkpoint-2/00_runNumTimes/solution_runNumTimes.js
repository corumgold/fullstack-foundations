/* eslint-disable no-unused-vars */
//solveCount = 2;

function runNumTimes(func, times) {
  let funced = [];
  for (let i = 0; i < times; i++) {
    funced.push(func());
  }
  return funced;
}

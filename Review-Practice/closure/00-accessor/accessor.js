/* eslint-disable no-unused-vars */

//solveCount = 2;

function accessor(obj) {
  return function (key, val) {
    if (val) obj[key] = val;
    return obj[key];
  };
}

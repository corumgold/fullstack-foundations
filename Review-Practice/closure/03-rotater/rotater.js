/* eslint-disable no-unused-vars */

// let solveCount = 2;

function rotater(str) {
  let direction = 'left';
  return function (num) {
    if (num === str.length) {
      if (direction === 'left') direction = 'right';
      else direction = 'left';
      return str;
    }
    if (direction === 'left') {
      return str.slice(num) + str.slice(0, num);
    } else {
      return str.slice(str.length - num) + str.substring(0, str.length - num);
    }
  };
}

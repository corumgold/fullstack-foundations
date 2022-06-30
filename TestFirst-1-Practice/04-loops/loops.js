/* eslint-disable no-unused-vars */
//solveCount = 1;

function repeat(str, amt) {
  let string = '';
  for (let i = 0; i < amt; i++) {
    string += str;
  }
  return string;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function join(arr, delimiter) {
  let joined = '';
  for (let i = 0; i < arr.length; i++) {
    let joint = arr[i];
    if (delimiter) {
      joint += delimiter;
    }
    joined += joint;
  }
  if (joined[joined.length - 1] === delimiter) {
    return joined.slice(0, joined.length - 1);
  } else return joined;
}

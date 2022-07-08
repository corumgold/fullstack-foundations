/* eslint-disable no-unused-vars */
//solveCount = 3;

function repeat(str, repeats) {
  let repeated = '';
  for (let i = 0; i < repeats; i++) {
    repeated += str;
  }
  return repeated;
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function join(arr, delimiter) {
  let string = arr.reduce((acc, curr) => {
    if (delimiter) return (acc += curr += delimiter);
    else return (acc += curr);
  }, '');
  if (string[string.length - 1] === delimiter) {
    return string.slice(0, string.length - 1);
  } else return string;
}

function gridGenerator(size) {
  function rowGenerator(evenSym, oddSym) {
    let row = '';
    for (let i = 0; i < size; i++) {
      if (i % 2 === 0) row += evenSym;
      else row += oddSym;
    }
    return `${row}\n`;
  }

  let grid = '';
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) grid += rowGenerator('#', ' ');
    else grid += rowGenerator(' ', '#');
  }
  return grid;
}

function paramify(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${obj[key]}`);
    }
  }
  return arr.sort().join('&');
}

function paramifyObjectKeys(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((acc, curr) => {
      return `${acc}&${curr}=${obj[curr]}`;
    }, '')
    .slice(1);
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

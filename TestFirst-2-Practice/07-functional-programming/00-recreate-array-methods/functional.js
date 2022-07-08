/* eslint-disable no-unused-vars */
//solveCount = 2;

function forEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const doubler = (num) => num * 2;

const map = function (arr, func) {
  let funcedArr = [];
  for (let i = 0; i < arr.length; i++) {
    funcedArr.push(func(arr[i]));
  }
  return funcedArr;
};

const filter = function (arr, func) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) filtered.push(arr[i]);
  }
  return filtered;
};

function includes(obj, element) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (obj[i] === element) return true;
    }
  } else {
    for (let key in obj) {
      if (key === element || obj[key] === element) return true;
    }
  }
  return false;
}

function countWords(num, string) {
  let wordCount = num;
  for (let i = 0; i < string.split(' ').length; i++) {
    wordCount++;
  }
  return wordCount;
}

function reduce(arr, start, func) {
  let accumulator = start;
  for (let i = 0; i < arr.length; i++) {
    accumulator = func(accumulator, arr[i]);
  }
  return accumulator;
}

function sum(arr) {
  return reduce(arr, 0, (acc, curr) => acc + curr);
}

function every(arr, func) {
  return (
    reduce(arr, 0, (acc, curr) => {
      return acc + func(curr);
    }) === arr.length
  );
}

function some(arr, func) {
  return (
    reduce(arr, 0, (acc, curr) => {
      return (acc += func(curr));
    }) > 0
  );
}


/* eslint-disable no-unused-vars */
//solveCount = 2;

function useMapToUpperCase(str) {
  return str.split(' ').map((word) => word.toUpperCase());
}

function useFilter(arr) {
  return arr.filter((element) => element.includes('@'));
}

function sumWithReduce(arr, start) {
  if (!start) start = 0;
  return arr.reduce((acc, curr) => acc + curr, start);
}

function filterEvensDoubleAndSum(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((acc, curr) => acc + curr, 0);
}

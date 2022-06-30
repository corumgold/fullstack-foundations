/* eslint-disable no-unused-vars */
// solveCount = 2;

function setPropsOnObj(obj) {
  obj.x = 7;
  obj.y = 8;
  obj.onePlus = (arg) => {
    return arg + 1;
  };
}

function setPropsOnArr(arr) {
  arr.hello = () => {
    return 'Hello!';
  };
  arr.full = 'stack';
  arr[0] = 5;
  arr.twoTimes = (num) => {
    return num * 2;
  };
}

const setPropsOnFunc = (func) => {
  func.year = '20??';
  func.divideByTwo = (num) => {
    return num / 2;
  };
};

const shallowCopy = function (arg1, arg2) {
  if (Array.isArray(arg1)) {
    return arg1.concat(arg2);
  } else {
    return { ...arg1, ...arg2 };
  }
};

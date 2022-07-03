/* eslint-disable no-unused-vars */
//solveCount = 3;

function createCalculator() {
  let calculator = {
    total: 0,
    value() {
      return this.total;
    },
    add(num) {
      return (this.total += num);
    },
    subtract(num) {
      return (this.total -= num);
    },
    clear() {
      this.total = 0;
    },
  };
  return calculator;
}

function addSquareMethod(arr) {
  for (let i = 0; i < arr.length; i++) {
    let calc = arr[i];
    calc.square = function () {
      return this.total ** 2;
    };
  }
  return arr;
}

let calcProto = {
  value() {
    return this.total;
  },
  add(num) {
    return (this.total += num);
  },
  subtract(num) {
    return (this.total -= num);
  },
  clear() {
    this.total = -10;
  },
};

function createHumanCalculator() {
  let calculator = Object.create(calcProto);
  calculator.total = -10;
  return calculator;
}

/* eslint-disable no-unused-vars */
//solveCount = 4;

function createCalculator() {
  return {
    total: 0,
    value() {
      return this.total;
    },
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    clear() {
      this.total = 0;
    },
  };
}

function addSquareMethod(arr) {
  return arr.map((calc) => {
    calc.square = function () {
      return this.total ** 2;
    };
    return calc;
  });
}

const calcProto = {
  value() {
    return this.total;
  },
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  clear() {
    this.total = -10;
  },
};

function createHumanCalculator() {
  const calc = Object.create(calcProto);
  calc.total = -10;
  return calc;
}

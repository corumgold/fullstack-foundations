/* eslint-disable no-unused-vars */
//solveCount = 1;

const createCalculator = () => {
  const calc = {
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
  return calc;
};

function addSquareMethod(arr) {
  for (let i = 0; i < arr.length; i++) {
    let calculator = arr[i];
    calculator.square = function () {
      return this.total * this.total;
    };
  }
  return arr;
}

const calculator = {
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
    const calc = Object.create(calculator);
    calc.total = -10;
    return calc;
}


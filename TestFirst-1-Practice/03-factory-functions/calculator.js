/* eslint-disable no-unused-vars */
//solveCount = 2;

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

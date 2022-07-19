/* eslint-disable no-unused-vars, no-throw-literal*/
//solveCount = 3;

class RPNCalculator {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  value() {
    return this.stack[0];
  }

  plus() {
    if (this.stack.length > 1) {
      this.stack.push(this.stack.shift() + this.stack.shift());
    } else throw 'rpnCalculatorInstance is empty';
  }

  minus() {
    if (this.stack.length > 1) {
      this.stack.push(this.stack.shift() - this.stack.shift());
    } else throw 'rpnCalculatorInstance is empty';
  }

  times() {
    if (this.stack.length > 1) {
      this.stack.push(this.stack.shift() * this.stack.shift());
    } else throw 'rpnCalculatorInstance is empty';
  }

  divide() {
    if (this.stack.length > 1) {
      this.stack.push(this.stack.shift() / this.stack.shift());
    } else throw 'rpnCalculatorInstance is empty';
  }
}

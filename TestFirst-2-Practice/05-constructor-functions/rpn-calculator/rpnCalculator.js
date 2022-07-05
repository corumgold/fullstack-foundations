/* eslint-disable no-unused-vars, no-throw-literal*/
//solveCount = 2;

function RPNCalculator() {
  this.stack = [];
  this.push = function (num) {
    this.stack.push(num);
  };
}

RPNCalculator.prototype.value = function () {
  return this.stack[0];
};

RPNCalculator.prototype.plus = function () {
  let sum = 0;
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    for (let i = 0; i < this.stack.length; i++) {
      sum += this.stack[i];
      this.stack.shift();
      i--;
    }
    this.stack.push(sum);
  }
};

RPNCalculator.prototype.minus = function () {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    let initial = this.stack.shift();
    for (let i = 0; i < this.stack.length; i++) {
      initial -= this.stack[i];
      this.stack.shift();
      i--;
    }
    this.stack.push(initial);
  }
};

RPNCalculator.prototype.times = function () {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    let product = 1;
    for (let i = 0; i < this.stack.length; i++) {
      product *= this.stack[i];
      this.stack.shift();
      i--;
    }
    this.stack.push(product);
  }
};

RPNCalculator.prototype.divide = function () {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    let divisor = this.stack.shift();
    for (let i = 0; i < this.stack.length; i++) {
      divisor /= this.stack[i];
      this.stack.shift();
      i--;
    }
    this.stack.push(divisor);
  }
};

/* eslint-disable no-unused-vars */
// solveCount = 2;

let loud = 'loud';
let name = 'Cody';
let dog = {
  name,
  bark() {
    return 'ruff ruff!';
  },
  [`${loud}Bark`]: function () {
    return this.bark().toUpperCase();
  },
};

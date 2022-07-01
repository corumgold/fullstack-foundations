/* eslint-disable no-unused-vars */
// solveCount = 3;

const name = 'Cody';
const loud = 'loud';

const dog = {
  name,
  bark() {
    return 'ruff ruff!';
  },
  [`${loud}Bark`]() {
    return this.bark().toUpperCase();
  },
};

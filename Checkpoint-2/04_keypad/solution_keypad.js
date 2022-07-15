/* eslint-disable no-unused-vars */

function presses(str) {
  const PRESSES = {
    1: '1adgjmptw ',
    2: 'behknqux',
    3: 'cfilorvy',
    4: '23456s8z',
    5: '79',
  };

  return str
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      for (let number in PRESSES) {
        if (PRESSES[number].includes(curr)) {
          return acc + parseInt(number);
        }
      }
    }, 0);
}

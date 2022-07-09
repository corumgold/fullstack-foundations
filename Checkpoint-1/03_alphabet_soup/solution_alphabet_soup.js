/* eslint-disable no-unused-vars, no-prototype-builtins */
//solveCount = 2;

function soup(phrase, bank) {
  const letters = bank.split('');
  for (let i = 0; i < phrase.length; i++) {
    if (letters.includes(phrase[i])) {
      letters.splice(letters.indexOf(phrase[i]), 1);
    } else return false;
  }
  return true;
}


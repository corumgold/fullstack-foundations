/* eslint-disable no-unused-vars, no-prototype-builtins */
//Good Job!!!
function soup(phrase, bank) {
  let bankArr = bank.split('');
  for (let i = 0; i < phrase.length; i++) {
    let letter = phrase[i];
    if (bankArr.indexOf(letter) !== -1) {
      bankArr.splice(bankArr.indexOf(letter), 1);
    } else return false;
  }
  return true;
}

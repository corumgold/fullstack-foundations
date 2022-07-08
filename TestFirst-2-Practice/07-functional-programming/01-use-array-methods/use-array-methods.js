/* eslint-disable no-unused-vars */
//solveCount = 1;

//USING MAP

function indexAndValue(arr) {
  return arr.map((num) => {
    return {
      index: arr.indexOf(num),
      value: num,
    };
  });
}

const capitalize = (str) => str.toUpperCase();

function swapCase(str) {
  return str
    .split(' ')
    .map((word, index) => {
      if (index % 2 === 0) return capitalize(word);
      else return word;
    })
    .join(' ');
}

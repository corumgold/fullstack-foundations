/* eslint-disable no-unused-vars */

//solveCount = 2;

function mapQuest(arr) {
  const PAIRS = { N: 'S', S: 'N', E: 'W', W: 'E' };
  return arr.reduce((acc, curr) => {
    if (acc[acc.length - 1] === PAIRS[curr]) {
      acc.pop();
      return acc;
    } else {
      acc.push(curr);
      return acc;
    }
  }, []);
}

/* eslint-disable no-unused-vars */

//solveCount = 2;

function makeIterator(arr) {
  let currIdx = 0;
  return {
    getIndex() {
      return currIdx;
    },
    getNext() {
      currIdx++;
      let next = {
        value: arr[currIdx - 1],
      };
      currIdx > arr.length ? (next.done = true) : (next.done = false);
      return next;
    },
  };
}

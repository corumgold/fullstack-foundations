//solveCount = 2;

function interleave() {
  let chars = [...arguments].map((str) => str.split(''));
  let interleaved = '';
  while (chars[0]) {
    interleaved += chars.reduce((acc, curr, idx) => {
      if (curr.length === 0) chars.splice(idx, 1);
      else acc += curr.splice(0, 1);
      return acc;
    }, '');
  }
  return interleaved;
}
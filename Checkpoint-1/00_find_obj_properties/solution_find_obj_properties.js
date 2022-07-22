/* eslint-disable no-unused-vars, no-prototype-builtins */
//solveCount = 3;

function findObjPropsHasOwn(obj) {
  return Object.keys(obj)
    .reduce((acc, curr) => {
      if (obj.hasOwnProperty(curr)) acc.push(curr);
      return acc;
    }, [])
    .join(', ');
}

function findObjKeys(obj) {
  return Object.keys(obj)
    .reduce((acc, curr) => {
      acc.push(curr);
      return acc;
    }, [])
    .join(', ');
}

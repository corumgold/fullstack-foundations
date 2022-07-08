/* eslint-disable no-unused-vars, no-prototype-builtins */
//MM: Good Job!!!
function findObjPropsHasOwn(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}`); //<--it is not necessary to use the '${}'
    }
  }
  return arr.join(', ');
}

function findObjKeys(obj) {
  let arr = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    arr.push(`${keys[i]}`); //<--it is not necessary to use the '${}'
  }
  return arr.join(', ');
}

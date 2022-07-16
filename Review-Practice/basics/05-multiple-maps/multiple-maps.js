/* eslint-disable no-unused-vars */

// solveCount = 2;

function multipleMaps(arr, arrObj) {
  return arr.map((index) => {
    let returnVal;
    arrObj.forEach((obj) => {
      if (Object.keys(obj).includes(`${index}`)) returnVal = obj[index];
    });
    return returnVal;
  });
}

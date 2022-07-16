/* eslint-disable no-unused-vars */
//solveCount = 2;
Array.prototype.maap = function (func) {
  let maapped = [];
  this.forEach((element) => maapped.push(func(element)));
  return maapped;
};

Array.prototype.fiilter = function (func) {
  let fiiltered = [];
  this.forEach((element) => {
    if (func(element)) fiiltered.push(element);
  });
  return fiiltered;
};

Array.prototype.reeduce = function (func, start) {
  if (!start) start = 0;
  let reeduced = start;
  this.forEach((element) => {
    reeduced += element;
  });
  return reeduced;
};

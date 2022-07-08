/* eslint-disable no-unused-vars */
//solveCount = 2;

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

//USING FILTER

function extensionSearch(ext, arr) {
  return arr.filter((word) => word.includes(ext));
}

//USING REDUCE

function getPopulation(list, arr) {
  return list
    .filter((countryObj) => {
      if (arr.length > 0) return arr.includes(countryObj.name);
      else return countryObj;
    })
    .reduce((acc, curr) => {
      return (acc += curr.population);
    }, 0);
}

function keyifyArrayOfObjects(key, arr) {
  return arr.reduce((acc, curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});
}

function powerLevelAverage(arr) {
  return Math.floor(
    arr.reduce((acc, curr) => {
      return acc + curr.powerLevel;
    }, 0) / arr.length
  );
}

function mapReduce(arr, func) {
  return arr.reduce((acc, curr) => {
    acc.push(func(curr));
    return acc;
  }, []);
}

function filterReduce(arr, func) {
  return arr.reduce((acc, curr) => {
    if (func(curr)) acc.push(curr);
    return acc;
  }, []);
}

//METHOD CHAINING

function inYourBudget(budget, items) {
  return items.filter((item) => item.price <= budget).map((item) => item.item);
}

function separateAndReturnNames(list, firstOrLast, maxLength) {
  return list
    .map((nameObj) => {
      nameObj.firstName = nameObj.name.split(' ')[0];
      nameObj.lastName = nameObj.name.split(' ')[1];
      return nameObj;
    })
    .filter((nameObj) => nameObj[firstOrLast].length <= maxLength)
    .map((nameObj) => nameObj[firstOrLast]);
}

function priorityTodoDuration(list) {
  return list
    .filter((taskObj) => {
      return taskObj.priority === 'high';
    })
    .reduce((acc, curr) => {
      return acc + curr.duration;
    }, 0);
}

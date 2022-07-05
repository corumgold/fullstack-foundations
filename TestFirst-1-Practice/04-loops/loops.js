/* eslint-disable no-unused-vars */
//solveCount = 2;

function repeat(str, amt) {
  let string = '';
  for (let i = 0; i < amt; i++) {
    string += str;
  }
  return string;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function join(arr, delimiter) {
  let joined = '';
  for (let i = 0; i < arr.length; i++) {
    let joint = arr[i];
    if (delimiter) {
      joint += delimiter;
    }
    joined += joint;
  }
  if (joined[joined.length - 1] === delimiter) {
    return joined.slice(0, joined.length - 1);
  } else return joined;
}

function gridGenerator(num) {
  debugger;
  let grid = '';
  for (let i = 0; i < num; i++) {
    let row = '';
    let rowNumber = i;
    for (let j = 0; j < num; j++) {
      //if it's an even row...
      if (rowNumber % 2 === 0) {
        //start the line with a hash
        if (j % 2 === 0) {
          row += '#';
        } else row += ' ';
        //if it's an odd row...
      } else {
        //start the line with a space
        if (j % 2 === 0) {
          row += ' ';
        } else row += '#';
      }
    }
    //at the end of the row, add a new line..
    row += '\n';
    //...and push it to the grid
    grid += row;
  }
  return grid;
}
gridGenerator(3);

// function paramify(obj) {
//   let arr = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       arr.push(`${key}=${obj[key]}`);
//     }
//   }
//   return arr.sort().join('&');
// }

// function paramifyObjectKeys(obj) {
//   let arrayedObj = [];
//   let keys = Object.keys(obj);
//   let values = Object.values(obj);
//   for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     let value = values[i];
//     arrayedObj.push(`${key}=${value}`);
//   }
//   return arrayedObj.sort().join('&');
// }

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       //if the current arr[j] is smaller than the next...
//       if (arr[j] < arr[j + 1]) {
//         //move on
//         continue;
//         //otherwise switch the current arr[j] with arr[j+1]
//         //(if the next element isn't undefined)
//       } else if (arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

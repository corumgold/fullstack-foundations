/* eslint-disable no-unused-vars */
//solveCount = 2;

function multiplicationTable(rows, columns) {
  let table = [];
  for (let i = 1; i < rows + 1; i++) {
    let row = [];
    for (let j = 1; j < columns + 1; j++) {
      row.push(j * i);
    }
    table.push(row);
  }
  return table;
}

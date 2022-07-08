/* eslint-disable no-unused-vars */
//Good Job!!!
function multiplicationTable(rows, columns) {
  let table = [];
  for (let i = 0; i < rows; i++) {
    let column = [];
    for (let j = 0; j < columns; j++) {
      column.push((i + 1) * (j + 1));
    }
    table.push(column);
  }
  return table;
}

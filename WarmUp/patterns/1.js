/*
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */

function pattern(rows=5, columns=5) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < columns; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

pattern(5, 5);
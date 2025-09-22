/*
1 1 1 1 1
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5
*/

function pattern(rows = 5, columns = 5) {
  for (let i = 0; i < rows; i++) {
    let row = "";

    for (let j = 0; j < columns; j++) {
      row = row + (i + 1) + " ";
    }
    
    console.log(row);
  }
}

pattern();
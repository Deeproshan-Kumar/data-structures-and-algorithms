/*
- - - - 1
- - - 2 2
- - 3 3 3
- 4 4 4 4
5 5 5 5 5
*/

function pattern(rows = 5) {
  for (let i = 0; i <= rows; i++) {
    let row = "";

    for (let j = 0; j <= rows - (i + 1); j++) {
      row = row + " ";
    }

    for (let k = 1; k <= i; k++) {
      row = row + i;
    }
    
    console.log(row);
  }
}

pattern();
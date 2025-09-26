/*
- - - - 5
- - - 4 5
- - 3 4 5
- 2 3 4 5
1 2 3 4 5
*/

function pattern(rows = 5) {
  for (let i = rows; i >= 1; i--) {
    let row = "";

    for (let j = 1; j < i; j++) {
      row = row + " ";
    }

    for (let k = i; k <= rows; k++) {
      row = row + k + " ";
    }
    
    console.log(row);
  }
}

pattern();
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

function pattern(rows = 5) {
  for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + j + " ";
    }

    console.log(row);
  }
}

pattern();
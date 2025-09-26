/*
- - - - 1
- - - 2 3
- - 4 5 6
- 7 8 9 10
11 12 13 14 15
*/

function pattern(rows = 5) {
  let num = 1;
  
  for (let i = 0; i <= rows; i++) {
    let row = "";

    for (let j = 0; j <= rows - (i + 1); j++) {
      row = row + " ";
    }

    for (let k = 1; k <= i; k++) {
      row = row + num;
      num++;
    }

    console.log(row);
  }
}

pattern();
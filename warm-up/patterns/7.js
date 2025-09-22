/*
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
*/

function pattern(rows = 5, columns = 5) {
  let num = 1;

  for (let i = 0; i < rows; i++) {
    let row = "";

    for (let j = 0; j < columns; j++) {
      row += num + " ";
      num++;
    }
    
    console.log(row);
  }
}

pattern();
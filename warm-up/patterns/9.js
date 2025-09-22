/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

function pattern(rows = 5) {
  for (let i = 1; i <= rows; i++) {
    let cols = "";

    for (let j = 1; j <= i; j++) {
      cols = cols + i + " ";
    }
    
    console.log(cols);
  }
}

pattern();
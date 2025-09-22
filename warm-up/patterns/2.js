/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

function pattern(rows = 5) {
  for (let i = 0; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + "* ";
    }
    
    console.log(row);
  }
}

pattern(5);
/*
 - - - - * - - - -
 - - - * * * - - -
 - - * * * * * - -
 - * * * * * * * -
 * * * * * * * * *
 */

function pattern(rows = 5) {
  for (let i = 0; i < rows; i++) {
    let row = "";

    for (let j = 0; j < rows - (i + 1); j++) {
      row = row + " ";
    }

    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }

    for (let l = 1; l < i + 1; l++) {
      row = row + "*";
    }
    
    console.log(row);
  }
}

pattern(5);
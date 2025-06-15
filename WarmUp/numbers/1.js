// Write a function to count digits of a given number.

function countDigits(num) {
  let count = 0;

  num = Math.abs(num);
  
  if(num === 0) return 1;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log(countDigits(1432));
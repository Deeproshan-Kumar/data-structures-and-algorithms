// Write a function to reverse a number.

function reverseNum(num) {
  if (num < 0) return false;

  let rem,
    rev = 0;

  while (num > 0) {
    rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  return rev;
}

console.log(reverseNum(1432));
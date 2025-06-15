// Write a function to check whether a number is palindrome or not.

function isPalindrome(num) {
  if (num < 0) return false;

  let rem,
    rev = 0,
    temp = num;

  while (num > 0) {
    rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  return rev === temp;
}

console.log(isPalindrome(1432));
console.log(isPalindrome(121));
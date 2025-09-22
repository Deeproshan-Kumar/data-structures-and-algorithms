// Write a function to find all negative numbers in a given array.

const arr = [10, 20, 30, -40, 40, -50, 60, 70, -80, 80, 90, 100];

function findAllNegNums(arr) {
  if (!Array.isArray(arr)) return;

  if (arr.length === 0) return;

  let negNums = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negNums.push(arr[i]);
    }
  }

  return negNums;
}

console.log(findAllNegNums(arr));
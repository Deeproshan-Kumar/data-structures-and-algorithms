// Write a function to find the largetst element in a givent array.

const arr = [10, 20, 30, -40, 40, -50, 60, 70, -80, 80, 90, 100];

function findLargestElem(arr) {
  if (!Array.isArray(arr)) return;

  if (arr.length === 0) return;

  let largest = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargestElem(arr));
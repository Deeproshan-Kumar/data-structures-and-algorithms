// Write a function to find the second largest element in a given array.

function findSecondLargestElem(arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length < 2) return;

  let largest = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const arr = [10, 20, 30, -40, 40, -50, 60, 70, -80, 80, 90, 100];
console.log(findSecondLargestElem(arr));
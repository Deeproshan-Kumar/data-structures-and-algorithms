// Write a function to find an element in a given array and if the element is not present then return -1.

function isElementExist(element, arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length === 0) return;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return -1;
}
const arr = "[10, 20, 30, 40, 50]";
console.log(isElementExist(11, arr));
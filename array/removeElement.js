// Remove element from an array. 

const nums = [10, 30, 50, 40, 70, 90];

let removeElement = function (arr, elem) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != elem) {
      arr[i] = arr[x];
      x++;
    }
  }

  return arr.slice(0, x);
};

console.log(removeElement(nums, 90));
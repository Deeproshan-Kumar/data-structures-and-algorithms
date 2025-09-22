const nums = [10, 50, 20, 15, 45, 100];

// Method 01
const sortArrayBySortAsc = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

const sortArrayBySortDesc = (arr) => {
  return arr.sort((a, b) => {
    return b - a;
  });
};

console.log("By using sort():");
console.log("Ascending order: ", sortArrayBySortAsc(nums));
console.log("Descending order: ", sortArrayBySortDesc(nums));

// Method 02
const sortArrayInAsc = (arr) => {
  let result = [];

  while (arr.length > 0) {
    let smallNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallNum) {
        smallNum = arr[i];
      }
    }

    result.push(smallNum);
    arr = arr.filter((num) => num !== smallNum);
  }

  return result;
};

const sortArrayInDesc = (arr) => {
  let result = [];

  while (arr.length > 0) {
    let bigNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > bigNum) {
        bigNum = arr[i];
      }
    }

    result.push(bigNum);
    arr = arr.filter((num) => num !== bigNum);
  }
  return result;
};

console.log("By using some logic:");
console.log("Ascending order: ", sortArrayInAsc(nums));
console.log("Descending order: ", sortArrayInDesc(nums));
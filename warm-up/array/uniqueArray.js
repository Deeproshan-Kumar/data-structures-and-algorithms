let nums = [10, 40, 43, 143, 78, 99, 40, 21, 100, 21];

// Method 01
const uniqueArrayBySet = (arr) => {
  return [...new Set(arr)];
};

console.log("Unique array by using set method: ", uniqueArrayBySet(nums));

// Method 02
const uniqueArrayByFilter = nums.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log("Unique array by using filter method: ", uniqueArrayByFilter);

// Method 03
const uniqueArrayByReduce = nums.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }

  return acc;
}, []);

console.log("Unique array by using reduce method: ", uniqueArrayByReduce);

// Method 04
const uniqueArrayByFn = (arr) => {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
};

console.log("Unique array by using user method: ", uniqueArrayByFn(nums));
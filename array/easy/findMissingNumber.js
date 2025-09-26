// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Input: [3, 0, 1]
// Output: 2

// Method 01
const findMissingNumberFromArray = (nums) => {
    const sumToBe = nums.length * (nums.length + 1) / 2;

    const sumIs = nums.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    return sumToBe - sumIs;
}

const input = findMissingNumberFromArray([3, 0, 1]);
console.log(`Method 01: ${input}`);

// Method 02
const findMissingNumberFromArray2 = (nums) => {
    const arr = [...new Set(nums.sort((a, b) => a - b))];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== i) {
            return i;
        } 
    }
}

const input2 = findMissingNumberFromArray2([3, 0, 1]);
console.log(`Method 02: ${input2}`);
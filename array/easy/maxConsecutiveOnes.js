/*
Max Consecutive Ones

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example: Input: nums: [1,1,0,1,1,1]
Output: 3
*/

const maxConsecutiveOnes = function (nums) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
};

console.log(maxConsecutiveOnes([1, 0, 0, 1, 1, 1, 1, 0, 1, 0]));

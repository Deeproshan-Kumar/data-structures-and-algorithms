/* 
Best Time to Buy abd Sell Stock 

You are given an array prices where prices[i] is the price of a given stock in the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. 

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0;

Example:
Input: prices = [7,1,5,3,6,4]
Output: 5
*/

const maxProfit = function (prices) {
  let min = prices[0]; // 7
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) { // 7 - 7 > 0
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) { // 7 < 0
      min = prices[i];
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

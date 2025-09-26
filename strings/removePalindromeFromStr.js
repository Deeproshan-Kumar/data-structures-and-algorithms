// Write a function that removes all palindromic words from a given sentence and returns the updated sentence. A palindrome is a word that reads the same forward and backward.

// Input 1: "madam and racecar are fast"
// Output: "and are fast"

// Input 2: "wow this is level cool"
// Output: "this is cool"

// Input 3: "hello anna civic world"
// Output: "hello world"

const removePalindromFromStr = (str) => {
    const words = str.split(" ");

    const result = words.filter((w, idx) => {
        const reverse = w.split("").reverse().join("");
        return w !== reverse;
    });
    
    return result.join(" ");
}

const input1 = removePalindromFromStr("madam and racecar are fast");
const input2 = removePalindromFromStr("wow this is level cool");
const input3 = removePalindromFromStr("hello anna civic world");

console.log(`Test Case 01 : ${input1}`);
console.log(`Test Case 02 : ${input2}`);
console.log(`Test Case 03 : ${input3}`);
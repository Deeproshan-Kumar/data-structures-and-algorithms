/* Write a function that reverse a string. The input string is given as an array of characters.
You must do this by modifying the input array in-place with 0(1) extra memory.

Example: 
Input: s = ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]
*/

const reverseStr = function(s) {
    for(let i=0; i<=Math.floor(s.length/2); i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
}

console.log(reverseStr(["h", "e", "l", "l", "o"]));
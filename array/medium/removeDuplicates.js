// Remove duplicates from non-decreasing sorted array.

let nums = [10, 10, 20, 20, 20, 30, 40, 40, 50, 50, 60, 70, 80, 90, 100];

let removeDuplicates = function(arr) {
    if (arr.length === 0) return [];

    let x = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[x]) {
            x++;
            arr[x] = arr[i];
        }
    }

    return arr.slice(0, x + 1);
}

console.log(removeDuplicates(nums));
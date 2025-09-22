const mergeStrings = (str1, str2) => {
    let result = "";
    let maxLengthStr = Math.max(str1.length, str2.length);

    for(let i = 0; i < maxLengthStr; i++) {
        if(str1.length > i) result += str1[i];
        if(str2.length > i) result += str2[i];
    }
    
    return result;
}

let output = mergeStrings("Deeproshan", "Pragya");
console.log(output);
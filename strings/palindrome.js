const palindromeStr = (str) => {
    const reversedStr = str.split("").reverse().join("").toLowerCase();

    if(str.toLowerCase() === reversedStr) {
        console.log(str, "is palindrome.");
    } else {
        console.log(str, "is not palindrome.");
    }
}

palindromeStr("str");
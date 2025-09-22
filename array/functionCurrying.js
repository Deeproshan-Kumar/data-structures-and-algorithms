// Example 01
const sum = (a, b, c) => {
  return a + b + c;
};

const sumByFnCurrying = (a) => {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(sum(10, 90, 43));
console.log(sumByFnCurrying(10)(90)(43));

// Example 02
const multiply = (a, b, c) => {
  return a * b * c;
};

const multiplyByFnCurrying = (a) => {
    return function(b) {
        return function(c) {
          return a*b*c;
        };
    };
};

console.log(multiply(10, 20, 30));
console.log(multiplyByFnCurrying(10)(20)(30));
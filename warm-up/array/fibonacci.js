const fibonacci = (num) => {
  let num1 = 0,
    num2 = 1,
    nextNum;
    
  console.log("Fibonacci series is: ");

  for (let i = 1; i <= num; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
};

console.log(fibonacci(6));
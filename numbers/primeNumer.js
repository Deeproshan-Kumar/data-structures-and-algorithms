const primeNumber = (num) => {
  let isPrime = true;

  if (num === 1) {
    return `${num} is neither prime nor composite.`;
  } else if (num > 1) {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return `${num} is a prime number.`;
    } else {
      return `${num} is not a prime number.`;
    }
  } else {
    return `${num} is not a prime number.`;
  }
};

console.log(primeNumber(23));
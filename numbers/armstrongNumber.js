// Input : 153
// Output: 1*1*1 + 5*5*5 + 3*3*3;

const armstrongNumber = (num) => {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let reminder = temp % 10;
    sum += reminder * reminder * reminder;
    temp = Number(temp / 10);
  }

  if (sum === num) {
    console.log(`${num} is an armstrong number.`);
  } else {
    console.log(`${num} is not an armstrong number.`);
  }
};

armstrongNumber(153);
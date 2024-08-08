const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(4));

const loop = (num) => {
  console.log(num);
  if (num < 10) {
    loop(num + 1);
  }
};
let data = 0;
loop(data);

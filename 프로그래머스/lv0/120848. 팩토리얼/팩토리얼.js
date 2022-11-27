let solution = (n) => {
  let i = 0;

  while (factorial(i) <= n) i++;
  return i - 1;
};

let factorial = (num) => {
  let n = BigInt(1);
  for (let i = 2; i <= num; i++) {
    n *= BigInt(i);
  }
  return n;
};
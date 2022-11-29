let solution = (n) => {
  let answer = [];
  for (let element = 2; element <= n; element++) {
    if (n % element === 0) {
      answer.push(element);
    }
  }
  return answer.filter((number) => isPrime(number) === true);
};

let isPrime = (num) => {
  let primeCount = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      primeCount++;
    }
  }
  if (primeCount === 1) {
    return true;
  }
  return false;
};
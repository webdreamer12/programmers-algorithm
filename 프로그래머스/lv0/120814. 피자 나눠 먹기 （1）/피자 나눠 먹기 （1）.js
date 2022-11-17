let solution = (n) => {
  let answer = 1;
  if (n <= 7) {
    answer = 1;
  } else {
    answer = getPizza(n);
  }

  return answer;
};

let getPizza = (n) => {
  let pizza = Math.floor(n / 7);
  if (n % 7 !== 0) {
    pizza += 1;
  }
  return pizza;
};
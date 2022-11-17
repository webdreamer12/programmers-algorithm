let solution = (n) => {
  let amountOfPizza = 1;
  while (true) {
    if ((amountOfPizza * 6) % n === 0) {
      return amountOfPizza;
    } else {
      amountOfPizza += 1;
    }
  }
};
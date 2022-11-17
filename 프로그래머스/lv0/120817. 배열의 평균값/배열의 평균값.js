let solution = (numbers) => {
  let sumOfArray = 0;
  for (let num of numbers) {
    sumOfArray += num;
  }
  return sumOfArray / numbers.length;
};
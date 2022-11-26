let solution = (numbers, direction) => {
  let answer = [];
  switch (direction) {
    case "right":
      answer = numbers.splice(-1, 1).concat(numbers);
      break;
    case "left":
      answer = numbers.slice(1).concat(numbers.splice(0, 1));
      break;
  }
  return answer;
};
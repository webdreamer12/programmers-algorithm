let solution = (my_string) => {
  let answer = my_string
    .split("")
    .filter((char) => isNaN(Number(char)) === false)
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  return answer;
};
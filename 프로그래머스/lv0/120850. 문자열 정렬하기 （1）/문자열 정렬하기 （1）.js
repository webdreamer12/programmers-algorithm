let solution = (my_string) => {
  let answer = my_string
    .split("")
    .filter((char) => isNaN(Number(char)) === false)
    .map(Number)
    .sort();
  return answer;
};
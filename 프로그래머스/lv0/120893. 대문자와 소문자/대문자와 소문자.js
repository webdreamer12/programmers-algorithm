let solution = (my_string) => {
  let answer = "";
  for (let char of my_string) {
    answer += shiftCase(char);
  }
  return answer;
};

let shiftCase = (char) => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  }
  return char.toUpperCase();
};
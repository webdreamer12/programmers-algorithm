let solution = (my_string) => {
  let answer = my_string;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let char of vowel) {
    answer = answer.replaceAll(char, "");
  }
  console.log(answer);
  return answer;
};

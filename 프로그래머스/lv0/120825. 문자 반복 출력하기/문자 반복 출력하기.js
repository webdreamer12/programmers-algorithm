let solution = (my_string, n) => {
  let my_stringArray = my_string.split("");
  let answer = "";
  for (let character of my_stringArray) {
    let repeatedCharacter = character.repeat(n);
    answer = answer.concat(repeatedCharacter);
  }
  return answer;
};
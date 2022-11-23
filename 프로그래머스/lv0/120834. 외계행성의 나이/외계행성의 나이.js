let solution = (age) => {
  const code = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };
  let answer = age.toString().split("");
  for (let element of answer) {
    answer.splice(answer.indexOf(element), 1, code[element]);
  }
  return answer.join("");
};
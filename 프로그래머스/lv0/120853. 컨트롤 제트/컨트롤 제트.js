let solution = (s) => {
  let answer = [];
  let answerValue = 0;
  s = s.split(" ");
  for (let element of s) {
    if (element === "Z") {
      answer.pop();
    } else answer.push(Number(element));
  }
  for (let element of answer) {
    answerValue += element;
  }
  return answerValue;
};
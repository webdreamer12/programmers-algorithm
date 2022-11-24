let solution = (emergency) => {
  let answer = [];
  for (let i = 0; i < emergency.length; i++) {
    let standard = emergency[i];
    let rank = 1;
    for (let j = 0; j < emergency.length; j++) {
      if (standard < emergency[j]) {
        rank++;
      }
    }
    answer.push(rank);
  }
  return answer;
};
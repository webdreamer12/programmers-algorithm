let solution = (n) => {
  let answer = 0;
  for (let num = 2; num <= n; num += 2) {
    answer += num;
  }
  return answer;
};
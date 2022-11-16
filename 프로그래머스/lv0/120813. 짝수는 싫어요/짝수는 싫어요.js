function solution(n) {
  let answer = [];
  let target = n;
  if (n % 2 == 0) {
    target = n - 1;
  }

  for (let i = 1; i <= target; i++) {
    if (i % 2 == 1) {
      answer.push(i);
    }
  }
  return answer;
}
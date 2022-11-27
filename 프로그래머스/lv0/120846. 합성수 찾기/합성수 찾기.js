let solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (countComoposition(i) >= 3) {
      answer++;
    }
  }
  return answer;
};

let countComoposition = (n) => {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      cnt++;
    }
  }
  return cnt;
};
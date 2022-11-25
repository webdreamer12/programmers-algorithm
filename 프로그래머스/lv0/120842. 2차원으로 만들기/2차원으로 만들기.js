let solution = (num_list, n) => {
  let answer = [];

  for (let i = 0; i < Math.floor(num_list.length / n); i++) {
    answer.splice(i, 0, num_list.slice(i * n, n * (i + 1)));
  }

  return answer;
};
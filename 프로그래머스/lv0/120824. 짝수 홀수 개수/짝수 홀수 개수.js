let solution = (num_list) => {
  var answer = [0, 0];
  for (let element of num_list) {
    if (element % 2 === 0) {
      answer[0] += 1;
    } else {
      answer[1] += 1;
    }
  }
  return answer;
};

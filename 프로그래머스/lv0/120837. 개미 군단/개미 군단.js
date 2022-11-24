let solution = (hp) => {
  let answer = 0;
  let antColony = [5, 3, 1];
  let hpLeft = hp;
  for (let ant of antColony) {
    answer += Math.floor(hpLeft / ant);
    hpLeft -= ant * Math.floor(hpLeft / ant);
  }
  return answer;
};
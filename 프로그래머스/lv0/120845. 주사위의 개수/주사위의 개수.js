let solution = (box, n) => {
  let w = Math.floor(box[0] / n);
  let d = Math.floor(box[1] / n);
  let h = Math.floor(box[2] / n);

  let answer = w * d * h;
  return answer;
};
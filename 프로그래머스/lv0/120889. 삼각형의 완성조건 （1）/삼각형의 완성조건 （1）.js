let solution = (sides) => {
  let one = sides.sort((a, b) => b - a)[0];
  let other = sides[1] + sides[2];
  if (one < other) {
    return 1;
  }
  return 2;
};
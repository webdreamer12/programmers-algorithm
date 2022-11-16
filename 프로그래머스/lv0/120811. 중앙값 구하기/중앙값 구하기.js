function solution(array) {
  let numArray = array;
  const medianIndex = Math.floor(numArray.length / 2);
  numArray.sort(compareNumbers);
  const answer = numArray[medianIndex];
  return answer;
}

function compareNumbers(a, b) {
  return a - b;
}
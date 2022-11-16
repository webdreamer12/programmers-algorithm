function solution(array) {
  let modeArray = [];
  const target = findMaxElement(array);

  for (let i = 0; i < target + 1; i++) {
    modeArray.push(0);
  }

  for (let element of array) {
    modeArray[element] += 1;
  }

  let answer = findMode(modeArray);
  return answer;
}

function findMaxElement(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function findMode(array) {
  let mode = findMaxElement(array);
  let modeDuplicated = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === mode) {
      modeDuplicated.push(i);
    }
  }

  if (modeDuplicated.length == 1) {
    return modeDuplicated[0];
  }

  return -1;
}
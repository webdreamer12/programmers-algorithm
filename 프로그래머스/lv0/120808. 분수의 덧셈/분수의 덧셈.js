function solution(denum1, num1, denum2, num2) {
  const sumOfFraction = [denum1 * num2 + denum2 * num1, num1 * num2];
  let gcd = euclidean(sumOfFraction[0], sumOfFraction[1]);
  let answer = [
    Math.floor(sumOfFraction[0] / gcd),
    Math.floor(sumOfFraction[1] / gcd),
  ];
  return answer;
}

function euclidean(num1, num2) {
  r = num1 % num2;
  if (r === 0) {
    return num2;
  }
  return euclidean(num2, r);
}
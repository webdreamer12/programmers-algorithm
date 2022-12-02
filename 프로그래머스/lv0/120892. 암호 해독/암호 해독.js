let solution = (cipher, code) => {
  let answer = "";
  for (let decipher = code - 1; decipher < cipher.length; decipher += code) {
    answer += cipher[decipher];
  }
  return answer;
};
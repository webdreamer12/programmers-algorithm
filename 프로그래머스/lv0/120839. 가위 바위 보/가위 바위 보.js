let solution = (rsp) => {
  let rspArray = rsp.split("");
  let answer = "";
  for (let element of rspArray) {
    switch (element) {
      case "2":
        answer += "0";
        break;
      case "0":
        answer += "5";
        break;
      case "5":
        answer += "2";
        break;
    }
  }
  return answer;
};
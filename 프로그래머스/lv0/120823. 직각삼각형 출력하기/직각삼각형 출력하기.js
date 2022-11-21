const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
  let element = "*";
}).on("close", () => {
  solution(Number(input[0]));
});

let solution = (n) => {
  let element = "*";
  for (let i = 0; i < n; i++) {
    console.log(element);
    element += "*";
  }
};

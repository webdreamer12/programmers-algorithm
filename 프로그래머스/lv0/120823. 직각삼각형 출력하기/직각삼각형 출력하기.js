const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
  let element = "*";
  for (let i = 0; i < Number(input[0]); i++) {
    console.log(element);
    element += "*";
  }
}).on("close", () => {
  process.exit();
});
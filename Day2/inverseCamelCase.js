const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  solution(str);
  rl.close();
});

function solution(s) {
  let output = [];
  let currWord = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      output.push(currWord);
      currWord = s[i];
    } else {
      currWord += s[i];
    }
  }
  output.push(currWord);
  output.shift();
  for (let i = 0; i < output.length; i++) {
    console.log(output[i]);
  }
}

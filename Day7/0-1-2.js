const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  const res = zero_one_two_sorting(arr);
  console.log(res.join(" "));
});

function zero_one_two_sorting(arr) {
  // Write your code here

  const obj = {};

  for (let i of arr) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }

  let newArr = [];
  for (let i = 0; i < obj["0"]; i++) {
    newArr.push(0);
  }
  for (let i = 0; i < obj["1"]; i++) {
    newArr.push(1);
  }
  for (let i = 0; i < obj["2"]; i++) {
    newArr.push(2);
  }
  return newArr;
}

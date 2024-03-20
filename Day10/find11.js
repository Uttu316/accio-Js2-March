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
  console.log(array11(arr, 0));
});

function array11(arr, i, ans = 0) {
  if (i === arr.length) {
    return ans;
  }

  if (arr[i] === 11) {
    ans += 1;
  }

  return array11(arr, i + 1, ans);
}

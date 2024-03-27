const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function count(str, i = 0, ans = "") {
  if (i >= str.length) {
    if (i === str.length) {
      console.log(ans);
    }
    return 1;
  }
  if (str[i] === "0") {
    return 0;
  }

  let first = String.fromCharCode(Number(str[i]) + 96);
  let twoDigit = String.fromCharCode(Number(str[i] + str[i + 1]) + 96);
  let c = 0;

  c += count(str, i + 1, ans + first);

  if (str[i] === "1" || (str[i] === "2" && str[i + 1] <= "6")) {
    c += count(str, i + 2, ans + twoDigit);
  }
  return c;
}

function printEncodings(str) {
  // Write your code here
  count(str);
}

rl.question("", (str) => {
  printEncodings(str);
  rl.close();
});

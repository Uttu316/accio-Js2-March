const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function count(n, ans = 0) {
  if (n === 0) {
    return 0;
  }
  if (n % 10 === 1) {
    return 1 + count(parseInt(n / 10));
  }
  return count(parseInt(n / 10), ans);
}

rl.on("line", (n) => {
  console.log(count(Number(n)));
  rl.close();
});

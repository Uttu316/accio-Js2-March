//question: https://course.acciojob.com/idle?question=c6abdf5c-6981-4f50-8908-0ce691ee6851

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  const n = parseInt(input, 10);
  count(n, "");
  rl.close();
});

function count(n, ans = "") {
  if (n === 0) {
    console.log(ans);
    return;
  }
  if (n < 0) {
    return;
  }

  count(n - 1, ans + "1");
  count(n - 2, ans + "2");
  count(n - 3, ans + "3");
}

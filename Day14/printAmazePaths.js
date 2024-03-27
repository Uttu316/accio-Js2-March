const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function paths(n, m, i, j, ans = "") {
  if (i == n && j == m) {
    console.log(ans);
    return 1;
  }
  if (i > n || j > m) {
    return 0;
  }

  return paths(n, m, i, j + 1, ans + "h") + paths(n, m, i + 1, j, ans + "v");
}
function countAllPath(n, m) {
  paths(n, m, 1, 1);
}

rl.question("", (n) => {
  rl.question("", (m) => {
    // console.log(Number(n),Number(m))
    // const [n, m] = input.split(' ').map(Number);
    countAllPath(Number(n), Number(m));
    rl.close();
  });
  rl.close();
});

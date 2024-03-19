const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solve(n, ans = []) {
  if (n === 0) {
    return;
  }

  solve(n - 1, ans);
  ans.push("* ".repeat(n));
  return ans;
}

readline.question("", (n) => {
  const pattern = solve(parseInt(n));

  for (let i = 0; i < n; i++) {
    console.log(pattern[i]);
  }
  readline.close();
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const set = new Set();

function perm(str, ans = "") {
  if (str === "") {
    if (set.has(ans)) {
      return;
    }
    set.add(ans);
    console.log(ans);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    const rest = str.substr(0, i) + str.substr(i + 1);
    perm(rest, ans + curr);
  }
}

rl.question("", (input) => {
  perm(input, "");

  rl.close();
});

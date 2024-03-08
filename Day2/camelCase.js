const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;

rl.on("line", (line) => {
  if (!t) {
    t = parseInt(line);
    return;
  }
  console.log(camelCase(line));
  t--;
  if (t === 0) {
    rl.close();
  }
});

function camelCase(s) {
  // your code here
  let isUnderScore = false;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "_") {
      isUnderScore = true;
      continue;
    }
    if (isUnderScore) {
      ans += s[i].toUpperCase();
      isUnderScore = false;
    } else {
      ans += s[i];
    }
  }
  return ans;
}

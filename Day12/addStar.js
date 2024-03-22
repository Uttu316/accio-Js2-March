//https://course.acciojob.com/idle?question=308cc4cd-d7e7-4df0-a378-6fcbf1cbca5f

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  console.log(addStar(input));
  rl.close();
});
function addStar(str, i = 0, ans = "") {
  if (i === str.length) {
    return ans;
  }

  const curr = str[i];

  if (curr === str[i + 1]) {
    ans += curr + "*";
  } else {
    ans += curr;
  }
  return addStar(str, i + 1, ans);
}

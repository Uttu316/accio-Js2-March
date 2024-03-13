const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ptice(n, answer) {
  // Write your code here and print output in this function
  //task-1
  let arr = [0, 0, 0];
  let Adrian = "ABC";
  let Bruno = "BABC";
  let Goran = "CCAABB";
  for (let i = 0; i < answer.length; i++) {
    if (Adrian[i % 3] == answer[i]) arr[0]++;
    if (Bruno[i % 4] == answer[i]) arr[1]++;
    if (Goran[i % 6] == answer[i]) arr[2]++;
  }
  //task-2[ 1,3,2]  Math.max(1,3,2);
  let ma = Math.max(...arr);
  console.log(ma);
  if (arr[0] == ma) console.log("Adrian");
  if (arr[1] == ma) console.log("Bruno");
  if (arr[2] == ma) console.log("Goran");
}

readline.question("", (n) => {
  readline.question("", (key) => {
    ptice(parseInt(n), key);
    readline.close();
  });
});

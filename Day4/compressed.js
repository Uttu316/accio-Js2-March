var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs = [];
let q;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    q = parseInt(line);
  }

  if (lineNumber > 0) {
    strs.push(line);
    q--;
  }

  if (q == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  for (let i = 0; i < strs.length; i++) {
    console.log(compressString(strs[i]));
  }
}

function compressString(s) {
  let last = s[0]; //a
  let count = 1;
  let res = "";

  for (let i = 1; i <= s.length; i++) {
    if (last === s[i]) {
      count++;
      continue;
    }

    res += last;

    if (count === 1) {
      last = s[i];
      continue;
    }

    res += count;
    last = s[i];
    count = 1;
  }
  return res;
}

// your code here
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const str = inputArr[0];
  console.log(isPangram(str));
}

function isPangram(s) {
  const buckets = new Array(26).fill(true);
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      const bucketPosition = charCode - 97;
      buckets[bucketPosition] = false;
    }
  }

  // console.log(buckets)
  let isCharAlive = false;
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i]) {
      isCharAlive = true;
    }
  }

  return isCharAlive ? "not pangram" : "pangram";
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const inputs = [];
rl.on("line", (line) => {
  inputs.push(parseInt(line));
  if (inputs.length === 2) {
    rl.close();
    const x = printXY(inputs[0], inputs[1]);
    console.log(x.trim());
  }
});

function printXY(x, y, s = "") {
  if (x > y) {
    return s;
  }
  //  console.log(x,s)
  return printXY(x + 1, y, s + x + " ");
}

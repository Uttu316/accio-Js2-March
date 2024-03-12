const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function SubString(str) {
  //Write code here
  let n = str.length;
  for (var i = 0; i < n; i++) {
    let subs = "";
    for (var j = i; j < n; j++) {
      var curr = str[j];
      subs += curr;
      console.log(subs);
    }
  }
}

rl.on("line", (str) => {
  SubString(str);
  rl.close();
});

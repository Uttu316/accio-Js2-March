const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  console.log(isPalindrome(str));
  rl.close();
});

function isPalindrome(s) {
  s = s.toLowerCase();
  s = removeCharacters(s);
  let i = 0;

  let j = s.length - 1;

  while (i < j && j >= 0 && i <= s.length) {
    if (s[i] === s[j]) {
      i++;
      j--;
      continue;
    }
    return 0;
  }
  return 1;
}

function removeCharacters(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const currCharacter = s[i];

    if ("a" <= currCharacter && currCharacter <= "z") {
      res += currCharacter;
    }
  }
  return res;
}

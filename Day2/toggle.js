let result = "";
for (let i = 0; i < s.length; i++) {
  if (s[i].toLowerCase() === s[i]) {
    //convert lowercase to upper case
    result += s[i].toUpperCase();
  } else {
    //convert upper to lowercase
    result += s[i].toLowerCase();
  }
}

console.log(result);

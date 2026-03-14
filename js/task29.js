for (let i = 1; i <= 500; i++) {
  let s = i.toString();
  let flag = true;
  for (let j = 0; j < s.length; j++) {
    if (j + 1 < s.length) {
      if (s[j] <= s[j + 1]) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) document.write(`${i} <br>`);
}

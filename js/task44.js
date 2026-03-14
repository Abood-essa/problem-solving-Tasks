for (let i = 1; i <= 1000; i++) {
  let s = i.toString();
  let revs = "";
  for (let j = s.length - 1; j >= 0; j--) {
    revs += s[j];
  }
  if ((Number(s) - Number(revs)) % 9 == 0) document.write(`${i} <br>`);
}

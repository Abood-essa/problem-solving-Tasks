for (let i = 1; i <= 500; i++) {
  let s = i.toString();
  let revs = "";
  for (let j = s.length - 1; j >= 0; j--) {
    revs += s[j];
  }
  if (revs % 2 == 0) document.write(`${i} <br>`);
}

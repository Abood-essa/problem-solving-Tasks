for (let i = 1; i <= 200; i++) {
  let s = i.toString();
  let revs = "";
  for (let j = s.length - 1; j >= 0; j--) {
    revs += s[j];
  }
  if (Number(revs) > Number(s)) document.write(`${i} <br>`);
}

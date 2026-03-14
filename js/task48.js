for (let i = 1; i <= 1000; i++) {
  let count = 0;
  let s = i.toString();
  let revs = "";
  for (let j = s.length - 1; j >= 0; j--) {
    revs += s[j];
  }

  for (let j = 1; j <= Number(revs); j++) {
    if (Number(revs) % j == 0) count++;
  }
  if (count == 2) document.write(`${i} <br>`);
}

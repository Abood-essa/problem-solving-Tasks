for (let i = 1; i <= 1000; i++) {
  let s = i.toString();
  let revs = "";
  let sum = 0;
  for (let j = s.length - 1; j >= 0; j--) {
    sum += Number(s[j]);
    revs += s[j];
  }
  if (sum == Number(revs)) document.write(`${i} <br>`);
}

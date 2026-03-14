for (let i = 1; i <= 200; i++) {
  let sum = 0;
  let s = i.toString();
  for (let j = 0; j <= s.length - 1; j++) {
    sum += Number(s[j]);
  }
  if (sum > 10) document.write(`${i} <br>`);
}

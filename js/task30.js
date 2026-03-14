for (let i = 1; i <= 300; i++) {
  let sum = 0;
  let s = i.toString();
  for (let j = 0; j < s.length - 1; j++) {
    sum += Number(s[j]);
  }
  if (sum == Number(s[s.length - 1])) document.write(`${i} <br>`);
}

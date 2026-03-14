for (let i = 1; i <= 300; i++) {
  let sum = 0;
  let s = i.toString();
  for (let j = 0; j < s.length; j++) {
    sum += Number(s[j]);
  }
  if (sum % s.length == 0) document.write(`${i} <br>`);
}

for (let i = 1; i <= 200; i++) {
  let sum = 0;
  let count = 0;
  let s = i.toString();
  for (let j = 0; j <= s.length - 1; j++) {
    sum += Number(s[j]);
  }
  for (let j = 1; j <= sum; j++) {
    if (sum % j == 0) count++;
  }
  if (count == 2) document.write(`${i} <br>`);
}

for (let i = 1; i <= 1000; i++) {
  let sum = 0;
  let s = i.toString();
  for (let j = 0; j < s.length; j++) {
    sum += Number(s[j]) ** 3;
  }
  if (sum == i) document.write(`${i} <br>`);
}

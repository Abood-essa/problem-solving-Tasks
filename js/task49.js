for (let i = 1; i <= 1000; i++) {
  let s = i.toString();
  let multi = 1;
  let sum = 0;
  for (let j = 0; j < s.length; j++) {
    multi *= Number(s[j]);
    sum += Number(s[j]);
  }
  if (multi == sum ** 2) document.write(`${i} <br>`);
}

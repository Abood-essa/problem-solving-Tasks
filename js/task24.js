for (let i = 1; i <= 300; i++) {
  let s = i.toString();
  let multi = 1;
  for (let j = 0; j < s.length; j++) {
    multi *= Number(s[j]);
  }
  if (i % multi == 0) document.write(`${i} <br>`);
}

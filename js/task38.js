for (let i = 1; i <= 300; i++) {
  let s = i.toString();
  let firstdigit = Number(s[0]);
  let lastdigit = Number(s[s.length - 1]);
  if (firstdigit == lastdigit ** 2) document.write(`${i} <br>`);
}

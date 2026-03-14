for (let i = 1; i <= 100; i++) {
  let s = i.toString();
  let firstdigit = s[0];
  let lastdigit = s[s.length - 1];
  if (firstdigit > lastdigit) document.write(`${i} <br>`);
}

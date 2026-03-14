for (let i = 1; i <= 200; i++) {
  let s = [i.toString()].sort().join("");
  let def = s[s.length - 1] - s[0];
  if (def == 2) document.write(`${i} <br>`);
}

for (let i = 1; i <= 300; i++) {
  let s = i.toString();
  let uniqes = new Set(s);
  if (s.length !== uniqes.size) document.write(`${i} <br>`);
}

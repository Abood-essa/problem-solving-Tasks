for (let i = 1; i <= 1000; i++) {
  let s = i.toString();
  let square = i ** 2;
  let squareS = square.toString();
  let lastdigits = Number(squareS.slice(-s.length));
  if (i == lastdigits) document.write(`${i} <br>`);
}

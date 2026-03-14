for (let i = 1; i <= 200; i++) {
  let sum = 0;
  for (let j = i; j > 0; j = Math.floor(j / 10)) {
    let digit = j % 10;
    sum += digit;
  }
  if (sum == 5) document.write(`${i} <br>`);
}

// for (let i = 1; i <= 200; i++) {
//   let s = i.toString();
//   let sum = 0;
//   for (let j = 0; j < s.length; j++) {
//     sum += Number(s[j]);
//   }
//   if (sum == 5) document.write(`${i} <br>`);
// }

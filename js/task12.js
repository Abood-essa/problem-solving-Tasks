let count = 1;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${count} `);
    count += 1;
  }
  document.write(`<br>`);
}

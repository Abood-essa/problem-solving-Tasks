for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    if (i == j) row += `${i} `;
    else row += `0 `;
  }
  document.write(row + `<br>`);
}

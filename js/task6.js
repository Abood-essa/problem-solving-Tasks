for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 5; j++) {
    if (i === 1) {
      row += "1 ";
    } else if (i === 2) {
      if (j <= 3) row += "1 ";
      else row += "2 ";
    } else if (i === 3) {
      if (j <= 2) row += "1 ";
      else row += "3 ";
    } else if (i === 4) {
      if (j <= 1) row += "1 ";
      else row += "4 ";
    } else {
      row += "5 ";
    }
  }

  document.write(row + `<br>`);
}

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 5; j++) {
    if (i === 1) {
      row += "A ";
    } else if (i === 2) {
      if (j <= 3) row += "A ";
      else row += "B ";
    } else if (i === 3) {
      if (j <= 2) row += "A ";
      else row += "C ";
    } else if (i === 4) {
      if (j <= 1) row += "A ";
      else row += "D ";
    } else {
      row += "E ";
    }
  }

  document.write(row + `<br>`);
}

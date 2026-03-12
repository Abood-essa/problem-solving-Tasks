let sum = 0;
let count = 0;
let num1 = 0;
let num2 = 1;
while (count < 10) {
  if (sum == 0) {
    document.write(num1 + " ");
    document.write(num2 + " ");
  }
  sum = num1 + num2;
  num1 = num2;
  num2 = sum;
  document.write(sum + " ");
  count += 1;
}

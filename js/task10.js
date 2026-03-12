let str = "Orange Coding School";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] == "c" || str[i] == "C") count += 1;
}
document.write(count);

function positiveOrNegative(num1, num2, num3) {
  let minusCounter = 0;
  let result = "";
  if (num1 < 0) {
    minusCounter++;
  }
  if (num2 < 0) {
    minusCounter++;
  }
  if (num3 < 0) {
    minusCounter++;
  }
  if (minusCounter === 1 || minusCounter === 3) {
    result = "Negative";
  } else {
    result = "Positive";
  }
  console.log(result);
}
positiveOrNegative(5, 12, -15);
positiveOrNegative(-6, -12, 14);
positiveOrNegative(-1, -2, -3);
positiveOrNegative(-5, 1, 1);

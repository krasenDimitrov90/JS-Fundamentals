function sumOfMatrixNumbers(arr) {
  let arrayOfNumbers = arr;
  let isSumEqual = true;
  let index1 = 0;
  let index2 = 1;
  let index3 = 2;
  let storedValue = 0;
  for (let i = 0; i < 3; i++) {
    let sumOfRowNumbers = arrayOfNumbers[i].reduce((sum, a) => (sum += a));
    let columnNumber1 = arrayOfNumbers[index1][i];
    let columnNumber2 = arrayOfNumbers[index2][i];
    let columnNumber3 = arrayOfNumbers[index3][i];
    if (i === 0) {
      storedValue = sumOfRowNumbers;
    }

    let sumOfColumnNums = columnNumber1 + columnNumber2 + columnNumber3;
    if (storedValue !== sumOfRowNumbers || storedValue !== sumOfColumnNums) {
      isSumEqual = false;
      console.log(isSumEqual);
      return;
    }
  }
  console.log(isSumEqual);
}
sumOfMatrixNumbers([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
sumOfMatrixNumbers([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
sumOfMatrixNumbers([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);

function sumOfMatrixNumbers(arr) {
  let sum = arr[0].reduce((a, b) => {
    return a + b;
  }, 0);

  let isAllSumsEqual = true;
  let arrRowL = arr.length;
  for (let i = 0; i < arrRowL; i++) {
    let rowSum = arr[i].reduce((a, b) => {
      return a + b;
    }, 0);
    if (rowSum !== sum) {
      isAllSumsEqual = false;
      return console.log(isAllSumsEqual);
    }
  }

  let arrColumnL = arr[0].length;
  for (let i = 0; i < arrColumnL; i++) {
    let columnSum = 0;
    for (let j = 0; j < arrRowL; j++) {
      let currentNum = arr[j][i];
      columnSum += currentNum;
    }
    if (columnSum !== sum) {
      isAllSumsEqual = false;
      return console.log(isAllSumsEqual);
    }
  }
  console.log(isAllSumsEqual);
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

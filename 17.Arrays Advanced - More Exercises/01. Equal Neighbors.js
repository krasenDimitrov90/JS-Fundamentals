function equalPairs(input) {
  let arr = input;
  let counter = 0;
  let rowArrL = arr.length;
  let columnArrL = arr[0].length;

  for (let i = 0; i < rowArrL; i++) {
    for (let j = 0; j < columnArrL - 1; j++) {
      let firstEl = arr[i][j];
      let secondEl = arr[i][j + 1];

      if (firstEl === secondEl) {
        counter++;
      }
    }
  }

  for (let i = 0; i < columnArrL; i++) {
    for (let j = 0; j < rowArrL - 1; j++) {
      let firstEl = arr[j][i];
      let secondEl = arr[j + 1][i];
      if (firstEl === secondEl) {
        counter++;
      }
    }
  }
  console.log(counter);
}
equalPairs([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);
equalPairs([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

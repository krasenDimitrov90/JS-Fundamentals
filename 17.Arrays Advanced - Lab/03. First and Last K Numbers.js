function solve(arr) {
  let firstNum = arr[0];
  let lastNumPosition = arr.length - 1;
  console.log(arr.slice(1, firstNum + 1).join(" "));
  console.log(arr.slice(2, firstNum + 2).join(" "));
}
// solve([2, 7, 8, 9])
// solve([3, 6, 7, 8, 9])
solve([2, 0, 0, 0, 0, 0]);

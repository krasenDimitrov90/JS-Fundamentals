function sumOfFirstAndLast(arr) {
  let arrayOfNumbers = arr;
  let firstNum = Number(arrayOfNumbers[0]);
  let secondNum = Number(arrayOfNumbers[arr.length - 1]);
  let sum = firstNum + secondNum;
  console.log(sum);
}
sumOfFirstAndLast(["20", "30", "40"]);
sumOfFirstAndLast(["5", "10"]);

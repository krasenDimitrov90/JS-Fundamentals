function smallesrTwoNumbers(arr) {
  let array = arr;
  let newArr = arr.sort((a, b) => a - b);
  let twoNumsArr = newArr.slice(0, 2);
  console.log(twoNumsArr.join(" "));
}
smallesrTwoNumbers([30, 15, 50, 5]);
smallesrTwoNumbers([3, 0, 10, 4, 7, 3]);

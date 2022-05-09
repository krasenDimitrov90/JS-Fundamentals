function sequenceOfPosNegativeNums(arr) {
  let arrayOfNumbers = arr;
  let arrayL = arrayOfNumbers.length;
  let newArr = [];
  for (let i = 0; i < arrayL; i++) {
    let currentNum = Number(arrayOfNumbers[i]);
    if (currentNum >= 0) {
      newArr.push(currentNum);
    } else {
      newArr.unshift(currentNum);
    }
  }
  let newArrL = newArr.length;
  for (let i = 0; i < newArrL; i++) {
    console.log(newArr[i]);
  }
}
sequenceOfPosNegativeNums(["7", "-2", "8", "9"]);
sequenceOfPosNegativeNums(["3", "-2", "0", "-1"]);

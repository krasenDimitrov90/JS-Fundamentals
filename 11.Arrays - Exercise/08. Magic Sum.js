function uniquePairs(arr, num) {
  let arrayNumbers = arr;
  let specialNumber = num;
  let arrayL = arrayNumbers.length;
  for (let i = 0; i < arrayL; i++) {
    let currentNum = arrayNumbers[i];
    for (let j = i + 1; j < arrayL; j++) {
      if (currentNum + arrayNumbers[j] === specialNumber) {
        console.log(`${currentNum} ${arrayNumbers[j]}`);
      }
    }
  }
}
uniquePairs([1, 7, 6, 2, 19, 23], 8);
uniquePairs([14, 20, 60, 13, 7, 19, 8], 27);
uniquePairs([1, 2, 3, 4, 5, 6], 6);

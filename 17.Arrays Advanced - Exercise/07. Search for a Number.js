function searchNum(arrNums, searchNumArr) {
  let arrayOfNumbers = arrNums;
  let arrayOfSearcingNum = searchNumArr;
  let numsToTakeOfTheArr = arrayOfSearcingNum[0];
  let numsToDel = arrayOfSearcingNum[1];
  let numToSearch = arrayOfSearcingNum[2];
  let modifyArrOfNums = arrayOfNumbers.splice(0, numsToTakeOfTheArr);
  modifyArrOfNums.splice(0,numsToDel);
  
  let counter = 0;
  for (const el of modifyArrOfNums) {
      if (el === numToSearch) {
        counter++;
      }
  }
  console.log(`Number ${numToSearch} occurs ${counter} times.`);
}
searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNum([7, 1, 5, 8, 2, 7], [3, 1, 5]);

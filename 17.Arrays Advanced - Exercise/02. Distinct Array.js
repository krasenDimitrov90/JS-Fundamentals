function repeatingElementsRemove(arr) {
  let arrayOfNums = arr;
  let arrayOfNumsL = arrayOfNums.length;
  //let modifyArray = arrayOfNums.slice();
  for (let i = 0; i < arrayOfNumsL; i++) {
    let currentElement = arrayOfNums[i];
    for (let j = i + 1; j < arrayOfNumsL; j++) {
      let repeatEl = arrayOfNums[j];
      if (repeatEl === currentElement) {
        arrayOfNums.splice(j, 1);
        j--;
        arrayOfNumsL--;
      }
    }
  }
  console.log(arrayOfNums.join(' '));
}
repeatingElementsRemove([1,1,1,0,0]);
repeatingElementsRemove([1, 2, 3, 4, 3]);
repeatingElementsRemove([7, 8, 9, 7, 2, 3, 4, 1, 2]);
repeatingElementsRemove([20, 8, 12, 13, 4, 4, 8, 5]);

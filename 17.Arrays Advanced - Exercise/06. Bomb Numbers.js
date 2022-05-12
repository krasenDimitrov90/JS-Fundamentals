function deleteArrToLeftAndRight(input1, input2) {
  let bombNum = input2[0];
  let numsForRemoving = input2[1];
  let arrForDetonating = input1;
  
  while (arrForDetonating.includes(bombNum)) {
    let indexOfBombNum = arrForDetonating.indexOf(bombNum);
    let startNum = indexOfBombNum - numsForRemoving;
    let elForRemoving = numsForRemoving * 2 + 1;
    if (startNum < 0) {
      startNum = 0;
    }
    arrForDetonating.splice(startNum, elForRemoving);
  }

  let sum = arrForDetonating.reduce((a, b) => a + b, 0);
  console.log(sum);
}
deleteArrToLeftAndRight([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
deleteArrToLeftAndRight([1, 4, 4, 2, 8, 9, 1], [9, 3]);
deleteArrToLeftAndRight([1, 7, 7, 1, 2, 3], [7, 1]);
deleteArrToLeftAndRight([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

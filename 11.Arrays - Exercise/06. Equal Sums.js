function equalSums(arr) {
  let array = arr;

  let arrayL = array.length;
  let corectIndex = 0;
  let isNumber = false;
  if (arrayL === 1) {
    console.log("0");
    return;
  }
  for (let i = 0; i < arrayL; i++) {
    let index = i;
    let leftSum = 0;
    let rightSum = 0;
    for (let j = index + 1; j < arrayL; j++) {
      rightSum += array[j];
    }
    for (let j = 0; j < index; j++) {
      leftSum += array[j];
    }
    if (rightSum === leftSum) {
      isNumber = true;
      corectIndex = i;
    }
  }
  if (isNumber) {
    console.log(corectIndex);
  } else {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

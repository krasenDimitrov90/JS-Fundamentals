function oddPositionOfArray(arr) {
  let array = arr;
  let arrayL = array.length;
  let newArr = array.map((a) => a * 2);
  let arrOfOddPosition = [];
  let newArrL = newArr.length;
  for (let i = 0; i < newArrL; i++) {
    if (i % 2 !== 0) {
      arrOfOddPosition.unshift(newArr[i]);
    }
  }
  console.log(arrOfOddPosition.join(" "));
}
oddPositionOfArray([10, 15, 20, 25]);
oddPositionOfArray([3, 0, 10, 4, 7, 3]);

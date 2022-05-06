function solve(arr) {
  let array = arr;
  let newArr = [];
  let arrayL = array.length;
  let maxNumber

  for (let i = array.length - 1; i >= 0; i--) {
    let currentNum = Number(array[i]);
    if (i === array.length - 1) {
      newArr.push(currentNum);
      maxNumber = currentNum
      continue;
    }

    if (currentNum > maxNumber) {
      newArr.push(currentNum);
      maxNumber = currentNum
    }
  }
  let reverseArr = newArr.reverse();
  console.log(reverseArr.join(' '));
}
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);

function sequenceOf3Numbers(firstNum, secondNum) {
  let newArrl = firstNum;
  let numbersForSum = secondNum;
  let newArr = [1];
  for (let i = 0; i < newArrl - 1; i++) {
    let newNum = 0;
    for (let j = 0; j < numbersForSum; j++) {
      if (j > newArr.length - 1) {
        break;
      }
      let currentNum = newArr[i - j];
      newNum += currentNum;
    }
    newArr.push(newNum);
  }
  console.log(newArr.join(" "));
}
sequenceOf3Numbers(6, 3);
sequenceOf3Numbers(8, 2);

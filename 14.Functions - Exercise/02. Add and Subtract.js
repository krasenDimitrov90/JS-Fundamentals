function calculating(firstNum, secondNum, thirdNum) {
    function sumOfTwoNums(a, b) {
        let sum = a + b
        return sum;
    }
    function subtract(a, b) {
        let result = a - b;
        return result;
    }
    let sum = sumOfTwoNums(firstNum, secondNum)
    let result = subtract(sum, thirdNum)
    console.log(result);
}
calculating(23,6,10)
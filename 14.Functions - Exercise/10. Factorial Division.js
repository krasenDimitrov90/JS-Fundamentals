function solve(num1 , num2) {
    
let firstArr = Array.from(Array(num1), (_, index) => index + 1);
let secondArr = Array.from(Array(num2), (_, index) => index + 1);

let firsSum = firstArr.reduce((acc , el) => acc *= el )
let secondSum = secondArr.reduce((acc , el) => acc *= el )

let result = firsSum / secondSum;
console.log(result.toFixed(2));
}
solve(5,2)
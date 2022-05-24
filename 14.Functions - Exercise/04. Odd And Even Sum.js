function sumNumbers(input) {
    let number = input
    let arraOfDigits = Array.from(String(number), Number);

let oddSum = oddNumbersSum(arraOfDigits)
let evenSum = evenNumbersSum(arraOfDigits)

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


    function oddNumbersSum(arraOfDigits) {
        let oddSum = arraOfDigits.reduce((previousValue, currentValue) => {
            if (currentValue % 2 !== 0) {
               return previousValue += currentValue
           }
           return previousValue
       },0)
       return oddSum
    }

    function evenNumbersSum(arraOfDigits) {
        let evenSum = arraOfDigits.reduce((previousValue, currentValue) => {
            if (currentValue % 2 === 0) {
               return previousValue += currentValue
           }
           return previousValue
       },0)
       return evenSum
    }
}
sumNumbers(3495892137259234)
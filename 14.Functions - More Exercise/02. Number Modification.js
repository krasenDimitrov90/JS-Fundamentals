// function solve(num) {
//     let arraOfDigits = Array.from(String(num), Number);
//     let isAvarageFive = false
//     while (!isAvarageFive) {
//         let currentSum = 0;
//         let arraOfDigitsL = arraOfDigits.length;
//         for (let i = 0; i < arraOfDigitsL; i++) {
//             currentSum += arraOfDigits[i];
//         }
//         if ((currentSum / arraOfDigitsL) > 5) {
//             isAvarageFive = true
//         } else {
//             arraOfDigits.push(9);
//         }
//     }

//     console.log(arraOfDigits.join(''));
// }


// with recursion
function solve(num) {
    let numToStr = num.toString();
    let avarage = numToStr
        .split('')
        .map(Number)
        .reduce((acc , x) => acc + x ,0)
    if (avarage / numToStr.length > 5) {
        console.log(numToStr);
        return
    }
    numToStr += 9;
    solve(Number(numToStr))
}

solve(101)
solve(5835)
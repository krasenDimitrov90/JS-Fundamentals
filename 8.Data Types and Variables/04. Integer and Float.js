function solve(firstNum , secondNum , thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let text = sum % 1 === 0 ? 
        "Integer ":
        "Float";
    console.log(`${sum} - ${text}`);
}
solve(9, 100, 1.1)
solve(100, 200, 303)
function solve(input) {
    let elementsToCalculate = input.split(/\s+/g)
    let arrWithNumbers = [];

    for (const el of elementsToCalculate) {
        let number = +el.match(/\d+/g);
        let firstChar = el[0];
        let lastChar = el[el.length - 1];
        let firstCharNum = firstChar.toUpperCase().charCodeAt(0) - 64;
        let lastCharNum = lastChar.toUpperCase().charCodeAt(0) - 64;

        if (firstChar === firstChar.toUpperCase()) {
            number /= firstCharNum;
        } else {
            number *= firstCharNum;
        }

        if (lastChar === lastChar.toUpperCase()) {
            number -= lastCharNum;
        } else {
            number += lastCharNum;
        }

        arrWithNumbers.push(number);
    }

    let sum = arrWithNumbers.reduce((acc, el) => acc += el, 0);

    console.log(sum.toFixed(2));
}
solve('a0A')
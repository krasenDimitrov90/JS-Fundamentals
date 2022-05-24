function palindromArrays(input) {
    for (const num of input) {
        let arrOfDigits = Array.from(String(num), Number);
        let reverseArr = arrOfDigits.slice(0).reverse();
        console.log(JSON.stringify(arrOfDigits) === JSON.stringify(reverseArr));
    }
}
palindromArrays([123,323,421,121])
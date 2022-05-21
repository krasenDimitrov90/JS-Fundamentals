function uniquePINCodes(input) {
    let firstSymbol = input[0];
    let secondSymbol = input[1];
    let symbolNotToWrite = input[2];
    let thirdSymbol = '';
    let num1Char = firstSymbol.charCodeAt(0)
    let num2Char = secondSymbol.charCodeAt(0)
    let cahrNotToWriteNum = symbolNotToWrite.charCodeAt(0)
    let text = '';
    let counter = 0;
    for (let i = num1Char; i <= num2Char; i++) {
        for (let j = num1Char; j <= num2Char; j++) {
            for (let k = num1Char; k <= num2Char; k++) {
                firstSymbol = String.fromCharCode(i)
                secondSymbol = String.fromCharCode(j)
                thirdSymbol = String.fromCharCode(k)
                if (firstSymbol !== symbolNotToWrite &&
                    secondSymbol !== symbolNotToWrite &&
                    thirdSymbol !== symbolNotToWrite) {
                    text += firstSymbol + secondSymbol + thirdSymbol +' ';
                    counter++
                }
            }
        }
        
    }
    
    console.log(text);
    console.log(counter);
}
uniquePINCodes(['f','k','h'])
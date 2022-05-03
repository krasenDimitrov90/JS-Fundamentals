function solve(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let firstSymbol = String.fromCharCode(97 + i);
                let secondSymbol = String.fromCharCode(97 + j);
                let thirdSymbol = String.fromCharCode(97 + k);
                console.log(`${firstSymbol}${secondSymbol}${thirdSymbol}`);
            }
        }
    }
}
solve('3')
solve(2)
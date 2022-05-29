function phoneNumber(input) {
    let str = input[0];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNumbers = [];
    let validNumber = null;
    while ((validNumber = pattern.exec(str)) !== null) {
        validNumbers.push(validNumber[0]);

    }
    console.log(validNumbers.join(', '));
}
phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
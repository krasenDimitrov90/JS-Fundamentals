function passValidator(input) {

    let isLengthInLine = lengthPassword(input);
    let isWriteLetters = consistWriteCharacters(input);
    let isEnoughDigits = enoughDigits(input);

    if (isLengthInLine && isWriteLetters && isEnoughDigits) {
        console.log(`Password is valid`);
    } else {
        if (!isLengthInLine) {
            console.log(`Password must be between 6 and 10 characters`);
        }
        if (!isWriteLetters) {
            console.log(`Password must consist only of letters and digits`);
        }
        if (!isEnoughDigits) {
            console.log(`Password must have at least 2 digits`);
        }
    }
    function lengthPassword(input) {
        let isLengthInLine = false;
        if (input.length >= 6 && input.length <= 10) {
            isLengthInLine = true;
        }
        return isLengthInLine;
    }

    function consistWriteCharacters(input) {
        let isWriteLetters = true;
        if (! /^[a-zA-Z0-9]+$/.test(input)) {
            isWriteLetters = false;
        }
        return isWriteLetters
    }

    function enoughDigits(input) {
        let isEnoughDigits = true;
        let digits = input.replace(/[^0-9]/g, '').length;
        if (digits < 2) {
            isEnoughDigits = false;
        }
        return isEnoughDigits;
    }
}
passValidator('Pa$s$s')
function ASCII(firstChar, secondChar) {

    function charachters(firstChar, secondChar) {
        let num1 = firstChar.charCodeAt(0)
        let num2 = secondChar.charCodeAt(0)
        let min = Math.min(num1, num2)
        let max = Math.max(num1, num2)
        let result = '';
        for (let i = min + 1; i < max; i++) {
            let char = String.fromCharCode(i)
            result += char + ' ';
        }
        return result;
    }

    let result = charachters(firstChar, secondChar)
    console.log(result);

}
ASCII('#', ':')
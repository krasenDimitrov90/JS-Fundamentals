function deleteRepeatingChars(str) {
    let strAssString = str.split('');
    let result = [];
    let strAssStringL = strAssString.length;
    for (let i = 0; i < strAssStringL; i++) {
        let char = strAssString[i];
        if (char !== strAssString[i - 1]) {
            result.push(char)
        }
    }
    console.log(result.join(''));
}
deleteRepeatingChars('aaaaabbbbbcdddeeeedssaa')
function passGenerator(input) {
    let spcialWord = input.pop();
    let text = input[0]
        .concat(input[1])
        .split('');
    let textL = text.length;
    let spcialWordL = spcialWord.length;
    spcialWord = spcialWord.split('');
    let specialWordIndex = 0;


    for (let i = 0; i < textL; i++) {
        let currentChar = text[i];
        if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' ||
            currentChar === 'o' || currentChar === 'u') {
            text[i] = spcialWord[specialWordIndex].toUpperCase();
            specialWordIndex++
            if (specialWordIndex === spcialWordL) {
                specialWordIndex = 0;
            }
        }
    }
    text = text
        .reverse()
        .join('');
    console.log(`Your generated password is ${text}`);
}
passGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)
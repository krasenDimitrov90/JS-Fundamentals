function countAString(str , wordToCount) {
    let strAsArr = str.split(' ');
    let counter = 0
    for (let el of strAsArr) {
        if (el === wordToCount) {
            counter++;
        }
    }
    console.log(counter);
}
countAString('softuni is great place for learning new programming languages',
'softuni'

)
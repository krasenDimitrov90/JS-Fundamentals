function replaceEmptySpaces(input) {
    let text = input[0];
    let words = input[1];
    let regExp = /_+/g;
    
    while (text.includes('_')) {
        let blindWord = regExp.exec(text);
        let blindWordL = blindWord[0].length;
        for (let word of words) {
            let wordL = word.length;
            if (wordL === blindWordL) {
                text = text.replace(blindWord , word)
            }
        }
    }
    console.log(text);
    
}
replaceEmptySpaces(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)
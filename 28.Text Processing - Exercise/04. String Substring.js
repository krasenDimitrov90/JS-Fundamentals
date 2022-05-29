function findAWord(wordToFind , text) {
    text = text
        .toLowerCase()
        .split(' ');

    
    for (let word of text) {
        if (word === wordToFind) {
            console.log(word);
            return;
        }
    }

    console.log(`${wordToFind} not found!`);
}
findAWord('python',
'JavaScript is the best programming language'

)
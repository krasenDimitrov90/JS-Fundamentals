function findHashWords(text) {
    let regExp = /#[A-Za-z]+\b/g;
    let words = text.match(regExp);
    let result = [];
    for (let word of words) {
        let newWord = word.substring(1)
        result.push(newWord)
    }
    result.forEach((el) => console.log(el))
}
findHashWords('Nowadays everyone uses # to tag a #special word in #socialMedia')
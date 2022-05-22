function solve(input) {
    let words = {};
    for (const word of input) {
        let num = 0;
        if (words.hasOwnProperty(word)) {
            words[word] += 1 
        }else {
            num++;
            words[word] = num;
        }
    }
    let wordsEntries = Object.entries(words);
    wordsEntries.sort((valueA , valueB) => valueB[1] - valueA[1])
    wordsEntries.forEach(el => console.log(`${el[0]} -> ${el[1]} times`))
}
solve(["Here", "is", "the", "first", 
"sentence", "Here", "is", "another", "sentence",
 "And", "finally", "the", "third", "sentence"])
function mirrorWords(input) {

    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g
    if (input[0].match(pattern) === null) {

        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
        return;
    }

    let match = input[0].match(pattern);
    let counter = 0;
    let wordsMatched = [];

    for (let el of match) {
        let tokens = el.match(/\w+/g)
        let word1 = tokens.shift();
        let word2 = tokens.shift();

        if (word1 === reverse(word2)) {

            let text = word1 + ' ' + '<=>' + ' ' + word2;
            wordsMatched.push(text);

        } 
    }
    let matchL = match.length;
    let wordsMatchedL = wordsMatched.length;
    if (matchL > 0 && wordsMatchedL > 0) {

        console.log(`${matchL} word pairs found!`);
        console.log(`The mirror words are:`);
        console.log(wordsMatched.join(', '));

    } else if (matchL > 0 && wordsMatchedL === 0) {

        console.log(`${matchL} word pairs found!`);
        console.log(`No mirror words!`);

    } 

    function reverse(word) {
        return word = word
            .split('')
            .reverse()
            .join('');
    }
}

mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
)
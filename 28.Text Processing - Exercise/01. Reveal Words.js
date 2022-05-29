function revealTheStars(words, text) {
    words = words.split(', ');
    text = text.split(' ');


    for (let word of words) {
        let wordL = word.length;
        for (let el of text) {
            if (el[0] === '*' && el.length === wordL) {
                let index = text.indexOf(el);
                text[index] = word;
            }
        }
    }
    console.log(text.join(' '));
}
revealTheStars('great, learning',
    'softuni is ***** place for ******** new programming languages'
)
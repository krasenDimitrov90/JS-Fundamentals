function solve (input) {
    let dictionary = {};

    let wordsWithDefinitions = input.shift().split(' | ');
    let wordsToTest = input.shift().split(' | ');
    let command = input.shift();

    for (let line of wordsWithDefinitions) {
        let [word, definition] = line.split(': ');
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [];
        }
        dictionary[word].push(definition);
    }

    switch (command) {
        case 'Test':
            wordsToTest.forEach(word => {
                if (dictionary.hasOwnProperty(word)) {
                    console.log(word + ':');
                    dictionary[word].forEach(definition => {
                        console.log('-' + definition);
                    })
                }
            })
            break;
    
        case 'Hand Over':
            let words = Object.keys(dictionary);
            console.log(words.join(' '));
            break;
    }
}

solve((["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"])
)

solve((["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"])
)
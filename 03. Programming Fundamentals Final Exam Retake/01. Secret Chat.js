function stringManipulating(input) {
    let concealedMessage = input.shift();

    while (input[0] !== 'Reveal') {
        let tokens = input
            .shift()
            .split(':|:')
        let command = tokens.shift();

        if (command === 'InsertSpace') {

            let index = +tokens.shift();
            concealedMessage = concealedMessage.slice(0, index) + ' ' + concealedMessage.slice(index);
            console.log(concealedMessage);

        } else if (command === 'Reverse') {

            let strToReverse = tokens.shift();
            if (concealedMessage.includes(strToReverse)) {

                concealedMessage = concealedMessage.replace(strToReverse ,'')

                strToReverse = strToReverse
                    .split('')
                    .reverse()
                    .join('');

                concealedMessage += strToReverse;
                console.log(concealedMessage);
            } else {
                console.log(`error`);
            }

        } else if (command === 'ChangeAll') {

            let strToReplce = tokens.shift();
            let newStr = tokens.shift();
            while (concealedMessage.includes(strToReplce)) {
                concealedMessage = concealedMessage.replace(strToReplce , newStr)
            }
            console.log(concealedMessage);

        }

    }
    console.log(`You have a new text message: ${concealedMessage}`);
}

stringManipulating([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
)
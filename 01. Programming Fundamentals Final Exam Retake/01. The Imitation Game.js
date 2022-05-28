function codeDecoder(input) {
    
    let codeMassage = input.shift().split('');
    let tokens = input.shift();

    while (tokens !== "Decode") {
        tokens = tokens.split('|');
        let command = tokens[0];

        if (command === 'Move') {
            let countElements = +tokens[1];
            let elementsToMove = codeMassage.splice(0,countElements);
            codeMassage.push(...elementsToMove);

        } else if (command === 'Insert') {
            let index = +tokens[1];
            let elementToInsert = tokens[2];
            codeMassage.splice(index,0,elementToInsert);

        } else if (command === 'ChangeAll') {
            let currentSymbol = tokens[1];
            let replacedSymbol = tokens[2];
            codeMassage.forEach((element , index) => {
                if (element === currentSymbol) {
                    codeMassage[index] = replacedSymbol;
                }
            });
        }

        tokens = input.shift();
    }

    console.log(`The decrypted message is: ${codeMassage.join('')}`);
}
codeDecoder([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  
  )
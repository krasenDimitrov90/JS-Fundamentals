function compositors(input) {
    class Compositor {
        constructor (piece , composer , key) {
            this.piece = piece;
            this.composer = composer;
            this.key = key;
            this.print = () => {
                console.log(`${this.piece} -> Composer: ${this.composer}, Key: ${this.key}`)
            }
        }
    }

    let number = +input.shift();
    let compositorsList = [];

    for (let i = 0; i < number; i++) {
        let [piece , composer , key] = input.shift().split('|');
        let currentComposer = new Compositor (piece , composer , key);
        compositorsList.push(currentComposer);
    }

    while (input[0] !== 'Stop') {

        let tokens = input.shift().split('|');
        let command = tokens.shift();

        if (command === 'Add') {

            let [currentPiece , currentComposer , currentKey] = tokens;
            if (compositorsList.some(e => e.piece === currentPiece)) {
                console.log(`${currentPiece} is already in the collection!`);

            } else {
                let objPiece = new Compositor (currentPiece , currentComposer , currentKey);
                compositorsList.push(objPiece);
                console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);

            }

        } else if (command === 'Remove') {

            let currentPiece = tokens.pop();
            if (!compositorsList.some(e => e.piece === currentPiece)) {
                console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);

            } else {
                
                let objIndex = compositorsList.findIndex((obj => obj.piece === currentPiece));
                compositorsList.splice(objIndex,1)
                console.log(`Successfully removed ${currentPiece}!`);
                
            }

        } else if (command === 'ChangeKey') {

            let [currentPiece , currentKey] = tokens;
            if (!compositorsList.some(e => e.piece === currentPiece)) {
                console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);

            } else {
                let objIndex = compositorsList.findIndex((obj => obj.piece === currentPiece));
                compositorsList[objIndex].key = currentKey;
                console.log(`Changed the key of ${currentPiece} to ${currentKey}!`);
            }

        }
    }
    compositorsList.forEach(obj => obj.print());
}


compositors([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )
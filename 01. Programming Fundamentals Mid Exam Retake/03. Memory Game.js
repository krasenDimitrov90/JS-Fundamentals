function memoryGames(input) {
    let arrToPlay = input.shift().split(' ');
    let tokens = input.shift();
    let moves = 0;
    while (tokens !== "end") {
        let arrToPlayL = arrToPlay.length;
        let isValidNumbers = (num) => num < arrToPlayL && num >= 0
        let indicies = tokens.split(' ')
        let [index1, index2] = indicies

        if (!indicies.every(isValidNumbers) || index1 === index2) {
            moves++;
            let arrMidle = Math.floor(arrToPlayL / 2);
            let parasite = '-'+ moves + 'a'
            arrToPlay.splice(arrMidle, 0, parasite, parasite)
            console.log(`Invalid input! Adding additional elements to the board`);
            
        } else {
            
            let firstSymbol = arrToPlay[index1]
            let secondSymbol = arrToPlay[index2]
            if (firstSymbol === secondSymbol) {
                arrToPlay.splice(arrToPlay.indexOf(firstSymbol), 1)
                arrToPlay.splice(arrToPlay.indexOf(secondSymbol), 1)
                console.log(`Congrats! You have found matching elements - ${firstSymbol}!`);
                moves++;
            } else {
                console.log('Try again!');
                moves++;
            }
        }
        if (arrToPlay.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }

        tokens = input.shift();
    }
    console.log('Sorry you lose :(');
    console.log(arrToPlay.join(' '));
}
memoryGames([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    

)
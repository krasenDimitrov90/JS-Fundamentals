function memoryGames(input) {
    let arrToPlay = input.shift().split(' ');
    let tokens = input.shift();
    let moves = 0;
    while (tokens !== "end") {
        let arrToPlayL = arrToPlay.length;
        let isValidNumbers = (num) => num < arrToPlayL && num >= 0

        if (!tokens.split(' ').every(isValidNumbers)) {
            let arrMidle = Math.floor(arrToPlayL / 2);
            arrToPlay.splice(arrMidle, 0, '-2a', '-2a')
            console.log(`Invalid input! Adding additional elements to the board`);
            moves++;
        } else {
            let [index1, index2] = tokens.split(' ')
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
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]

)
function cardGame(input) {
    let playersCardsAndPoints = {};
    for (const line of input) {
        let tokens = line.split(': ');
        let player = tokens.shift();
        let cards = tokens.shift().split(', ');
        let cardPoints = 0;
        let cardNum = 0;
        let cardPower = 0;
        for (const card of cards) {
            if (card.length === 3) {
                cardNum = 10;
            } else if (card.length === 2) {
                let cardFirstSymbol = card[0];
                switch (cardFirstSymbol) {
                    case 'J':
                        cardNum = 11;
                        break;
                    case 'Q':
                        cardNum = 12;
                        break;
                    case 'K':
                        cardNum = 13;
                        break;
                    case 'A':
                        cardNum = 14;
                        break;
                    default:
                        cardNum = Number(cardFirstSymbol);
                        break;
                }
            }
            let cardLastSymbol = card[card.length - 1];
            switch (cardLastSymbol) {
                case 'S':
                    cardPower = 4;
                    break;
                case 'H':
                    cardPower = 3;
                    break;
                case 'D':
                    cardPower = 2;
                    break;
                case 'C':
                    cardPower = 1;
                    break;
            }
            cardPoints = cardNum * cardPower;
        if (!playersCardsAndPoints.hasOwnProperty(player)) {
            playersCardsAndPoints[player] = {};
        }
        if (!playersCardsAndPoints[player].hasOwnProperty(card)) {
            playersCardsAndPoints[player][card] = cardPoints;
        }
        }
    }
    let players = Object.entries(playersCardsAndPoints)
    for (const player of players) {
        let cards = Object.entries(player[1]);
        let sum = 0;
        
        for (const card of cards) {
            sum += card[1]
        }
        console.log(`${player[0]}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)
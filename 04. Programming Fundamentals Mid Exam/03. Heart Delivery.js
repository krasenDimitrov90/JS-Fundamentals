function solve(input) {
    let neighborhood = input.shift().split('@').map(Number)
    let neighborhoodL = neighborhood.length;
    let posision = 0;
    let posisionToDecrease = 0

    let tokens = input.shift();

    while (tokens !== "Love!") {
        tokens = tokens.split(' ')
        let JumpIndex = +tokens[1];
        posisionToDecrease = posision + JumpIndex;

        if (posisionToDecrease > neighborhoodL - 1) {
            posisionToDecrease = 0;

        }
        if (neighborhood[posisionToDecrease] === 0) {
            console.log(`Place ${posisionToDecrease} already had Valentine's day.`);

        } else {
            neighborhood[posisionToDecrease] -= 2;
            if (neighborhood[posisionToDecrease] === 0) {
                console.log(`Place ${posisionToDecrease} has Valentine's day.`);
            }
        }


        posision = posisionToDecrease;
        tokens = input.shift();
    }

    let sum = neighborhood.reduce((acc, el) => {
        if (el !== 0) {
            acc++
        }
        return acc;
    }, 0)

    console.log(`Cupid's last position was ${posision}.`);

    let isAllZero = varuable => varuable === 0;

    if (neighborhood.every(isAllZero)) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${sum} places.`);
    }

}
solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])

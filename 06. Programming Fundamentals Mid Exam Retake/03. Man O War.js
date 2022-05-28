function shipBattles(input) {

    let pirateShipStatus = input.shift()
        .split('>')
        .map(Number);
    let warShipStatus = input.shift()
        .split('>')
        .map(Number);
    let maxHealth = +input.shift();

    let tokens = input.shift()
    let isPiratesWon;
    let isWarShipWon;

    while (tokens !== 'Retire') {
        tokens = tokens.split(' ')
        let action = tokens[0];
        if (action === 'Fire') {
            let index = +tokens[1];
            let damage = +tokens[2];
            if (warShipStatus[index] !== undefined) {
                isPiratesWon = fire(index, damage, isPiratesWon)

                if (isPiratesWon) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            }
        } else if (action === 'Defend') {
            let startIndex = +tokens[1];
            let endIndex = +tokens[2];
            let damage = +tokens[3];
            if (pirateShipStatus[startIndex] !== undefined &&
                pirateShipStatus[endIndex] !== undefined) {
                isWarShipWon = defend(startIndex, endIndex, damage, isWarShipWon)

                if (isWarShipWon === true) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    return;
                }
            }
        } else if (action === 'Repair') {
            let index = +tokens[1];
            let health = +tokens[2];

            if (pirateShipStatus[index] !== undefined) {
                repair(index, health, maxHealth)
            }

        } else if (action === 'Status') {
            status(maxHealth)
        }

        tokens = input.shift()
    }

    let piratesShipSum = pirateShipStatus.reduce((sum, el) => {
        return sum += el;
    }, 0)

    let warShipSum = warShipStatus.reduce((sum, el) => {
        return sum += el;
    }, 0)

    console.log(`Pirate ship status: ${piratesShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
    console.log(pirateShipStatus);

    function fire(index, damage, isPiratesWon) {

        warShipStatus[index] -= damage;

        if (warShipStatus[index] <= 0) {
            isPiratesWon = true;
            return isPiratesWon
        }
    }

    function defend(startIndex, endIndex, damage, isWarShipWon) {

        for (let el of pirateShipStatus) {
            let index = pirateShipStatus.indexOf(el);
            if (index >= startIndex && index <= endIndex) {
                if (el - damage <= 0) {
                    isWarShipWon = true;
                    return isWarShipWon;
                } else {

                    pirateShipStatus[index] -= damage;
                }
            }
        }
    }

    function repair(index, health, maxHealth) {

        let currentHealth = pirateShipStatus[index];
        if ((currentHealth + health) > maxHealth) {
            pirateShipStatus[index] = maxHealth;
        } else {
            pirateShipStatus[index] = currentHealth + health;
        }
    }

    function status(maxHealth) {
        let minHealth = maxHealth * 0.20;
        let shipsNeedsRepair = pirateShipStatus.reduce((sum, el) => {
            if (el < minHealth) {
                sum++;
            }
            return sum;
        }, 0)

        console.log(`${shipsNeedsRepair} sections need repair.`);
        
    }
}
shipBattles(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 71",
    "Status",
    "Retire"])


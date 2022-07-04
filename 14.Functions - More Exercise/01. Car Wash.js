function carCleaningState(input) {

    let cleanliness = 0;
    let actions = {
        soap(value) {
            return value += 10;
        },
        water(value) {
            return value += value * 0.20;
        },
        vacuumCleaner(value) {
           return value += value * 0.25;
        },
        mud(value) {
           return value -= value * 0.10;
        }
    }

    for (let action of input) {
        switch (action) {
            case 'soap':
                cleanliness = actions.soap(cleanliness);
                break;
            case 'water':
                cleanliness = actions.water(cleanliness);
                break;
            case 'vacuum cleaner':
                cleanliness = actions.vacuumCleaner(cleanliness);
                break;
            case 'mud':
                cleanliness = actions.mud(cleanliness);
                break;
        }
    }

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

carCleaningState(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
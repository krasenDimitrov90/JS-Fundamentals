function printPlantsInfo(input) {

    let number = +input.shift();

    let plants = [];
    for (i = 0; i < number; i++) {

        let [plant, newRarity] = input
            .shift()
            .split('<->');

            newRarity = +newRarity
        
        if (plants.some(el => el.name === plant)) {
            let index = plants.findIndex(el => el.name)
            plants[index].rarity = newRarity;
        } else {

            let newPlant = {
                name: plant,
                rarity: newRarity,
                raiting: []
            }
            plants.push(newPlant);
        }
    }

    while (input[0] !== 'Exhibition') {
        let tokens = input
            .shift()
            .split(/: | - /)
        
        let command = tokens.shift();
        let plant = tokens.shift();

        if (!plants.some(el => el.name === plant)) {

            console.log(`error`);
        } else {

            if (command === 'Rate') {

                let newRaiting = +tokens.shift();
                let index = plants.findIndex(el => el.name === plant);
                plants[index].raiting.push(newRaiting);
                
    
            } else if (command === 'Update') {
    
                let newRarity = +tokens.shift();
                let index = plants.findIndex(el => el.name === plant);
                plants[index].rarity = newRarity;
    
    
            } else if (command === 'Reset') {
    
                let index = plants.findIndex(el => el.name === plant);
                plants[index].raiting = [];
                
            }
        }
    }
    console.log(`Plants for the exhibition:`);
    plants.forEach(el => {
        let averageRaiting = average(el.raiting)
        console.log(`- ${el.name}; Rarity: ${el.rarity}; Rating: ${averageRaiting.toFixed(2)}`);
    })

    function average(arr) {
        if (!arr.length) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}

printPlantsInfo(["3",
"Candelabra<->10",
"Candelabra<->20",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])


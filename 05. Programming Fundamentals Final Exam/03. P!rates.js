function townsToPlunder(input) {

    let towns = [];
    while (input[0] !== "Sail") {

        let tokens = input
            .shift()
            .split('||');
        let town = tokens.shift();
        let [people, gold] = tokens.map(Number);
        let data = {
            townName: town,
            population: people,
            goldQuantity: gold
        };
        if (towns.some(el => el.townName === town)) {
        let indexOfTown = towns.findIndex(el => el.townName === town);
            towns[indexOfTown].population += people;
            towns[indexOfTown].goldQuantity += gold;
        } else {
            towns.push(data);
        }
        
    }

    while (input[0] !== 'End') {
        let tokens = input
            .shift()
            .split('=>');
        let command = tokens.shift();
        let currentTown = tokens.shift();
        let indexOfTown = towns.findIndex(town => town.townName === currentTown);
        if (command === 'Plunder') {
            let [peopleToKill, goldToPlunder] = tokens.map(Number);
            let cuurentPopulation = towns[indexOfTown].population;
            let currentGoldQuantity = towns[indexOfTown].goldQuantity;
            if ((cuurentPopulation - peopleToKill === 0) ||
                (currentGoldQuantity - goldToPlunder === 0)) {
                console.log(`${currentTown} plundered! ${goldToPlunder} gold stolen, ${peopleToKill} citizens killed.`);
                towns.splice(indexOfTown, 1);
                console.log(`${currentTown} has been wiped off the map!`);
            } else {
                towns[indexOfTown].population -= peopleToKill;
                towns[indexOfTown].goldQuantity -= goldToPlunder;
                console.log(`${currentTown} plundered! ${goldToPlunder} gold stolen, ${peopleToKill} citizens killed.`);
            }

        } else if (command === 'Prosper') {
            let goldToAdd = +tokens.shift();
            if (goldToAdd < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                towns[indexOfTown].goldQuantity += goldToAdd;
                console.log(`${goldToAdd} gold added to the city treasury. ${currentTown} now has ${towns[indexOfTown].goldQuantity} gold.`);
            }
        }
    }

    let townsL = towns.length
    if (townsL === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${townsL} wealthy settlements to go to:`);
        for (let data of towns) {
            let currentTown = data.townName;
            let population = data.population;
            let gold = data.goldQuantity;
            console.log(`${currentTown} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    }
}

townsToPlunder(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

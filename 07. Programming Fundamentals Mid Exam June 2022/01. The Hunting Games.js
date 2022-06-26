function solve(input) {
    let [days , countOfPlayers , groupEnergy] = input.splice(0,3).map(Number);
    let [waterForPlayerPerDay , foodForPlayerPerDay] = input.splice(0,2).map(Number);
    let totalWaterSupply = waterForPlayerPerDay * countOfPlayers * days;
    let totalFoodSupply = foodForPlayerPerDay * countOfPlayers * days;

    let isEnoughEnergy = true;

    for (let i = 1; i <= days; i++) {

        let energyLoss = Number(input.shift());
        if (energyLoss >= groupEnergy) {
            isEnoughEnergy = false;
            break;
        } else if (energyLoss < groupEnergy) {
            groupEnergy -= energyLoss;
            if (i % 2 === 0) {
                groupEnergy += (groupEnergy * 0.05)
                totalWaterSupply -= (totalWaterSupply * 0.30);
            }
            if (i % 3 === 0) {
                totalFoodSupply -= (totalFoodSupply / countOfPlayers);
                groupEnergy += (groupEnergy * 0.10)

            }
        }
    }

    if (isEnoughEnergy) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFoodSupply.toFixed(2)} food and ${totalWaterSupply.toFixed(2)} water.`);
    }
}

solve(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])


function solve(input) {
    let energy = +input.shift()
    let wins = 0;
    let isEnergyLeft = true;
    let token = input.shift();
    while (token !== "End of battle") {
        let distance = +token;
        if (energy - distance < 0) {
            isEnergyLeft = false;
            break;
        } else {
            energy -= distance;
            wins++;
            if (wins % 3 === 0) {
                energy += wins;
            }
        }
        token = input.shift();
    }
    if (!isEnergyLeft) {
        console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
    } else {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    }
}
solve((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
)
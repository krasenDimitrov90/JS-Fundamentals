function printShotTargets(input) {
    let arrOfTargets = input.shift().split(' ').map(Number);
    let index = 0;
    let command = input[index];
    let arrOfTargetsL = arrOfTargets.length;
    let shotCounter = 0;
    while (command !== "End") {
        let targetIndex = Number(command);
        if (targetIndex <= arrOfTargetsL - 1) {
            shotCounter++;
            let shotPower = arrOfTargets[targetIndex];
            arrOfTargets.splice(targetIndex,1,-1);
            arrOfTargets = arrOfTargets.map((el) => {
                if (el === -1) {
                    return el = -1
                } else if (el > shotPower){
                    return el - shotPower;
                }else {
                    return el + shotPower;
                }
            })
        }
        index++;
        command = input[index];
    }
    console.log(`Shot targets: ${shotCounter} -> ${arrOfTargets.join(' ')}`);
}
printShotTargets ()
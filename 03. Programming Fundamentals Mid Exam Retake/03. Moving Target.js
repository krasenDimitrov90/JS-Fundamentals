function shootingTargets(input) {
    let targetArr = input.shift().split(' ').map(Number);

    while ((tokens = input.shift()) !== "End") {
        let [command , index , power] = tokens.split(' ');
        index = +index;
        power = +power;
        let targetArrL = targetArr.length;
        if (index > targetArrL - 1) {
            if (command === 'Add') {
                console.log('Invalid placement!');
                continue;
            }
            continue;
        }
        if (command === 'Shoot') {
            let targetToShoot = targetArr[index]
            if (targetToShoot - power <= 0) {
                targetArr.splice(index,1)
            }else {
                targetToShoot -= power;
                targetArr[index] = targetToShoot;
            }
        } else if (command === 'Add') {
            targetArr[index] += power;
        } else if (command === 'Strike') {
            let radius = power;
            if ((index - radius < 0) || (index + radius > targetArrL - 1)) {
                console.log(`Strike missed!`);
                continue;
            }
            let targetsToRemove = power * 2 + 1;
            let indexToStart = index - radius;
            targetArr.splice(indexToStart,targetsToRemove)
        }
    }
    console.log(targetArr.join('|'));
    
}
shootingTargets(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]
)
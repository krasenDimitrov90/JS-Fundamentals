function liftWagons(input) {
    let people = +input.shift();
    let wagonsSpace = input.shift().split(' ').map(Number)
    let newArr = wagonsSpace.map(x => {

        while (x < 4 && people > 0) {
            x++
            people--

        }
        return x
    })
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(newArr.join(' '));

    } else {
        let isThereSpaceLeft = newArr.every((wagon) => wagon === 4)
        if (isThereSpaceLeft) {
            console.log(newArr.join(' '));
        } else {
            console.log("The lift has empty spots!");
            console.log(newArr.join(' '));
        }
    }


}
liftWagons([
    "0",
    "0"
]
)

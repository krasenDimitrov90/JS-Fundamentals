function solve(input) {

    let x1 = input[0]
    let y1 = input[1]
    let x2 = input[2]
    let y2 = input[3]

    let integerCheker = {
        isFirstCheck: (x, y) => {
            return Number.isInteger(Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)))
        },
        isSecondCheck: () => {
            return Number.isInteger(Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)))
        },
        isTirdCheck: () => {
            return Number.isInteger(Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)))
        }
    }
    
    if (integerCheker.isFirstCheck()) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (integerCheker.isSecondCheck()) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);

    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (integerCheker.isTirdCheck()) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve([3, 0, 0, 4])
solve([2, 1, 1, 1])

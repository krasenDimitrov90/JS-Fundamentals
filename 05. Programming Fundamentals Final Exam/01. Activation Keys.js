function activationKey(input) {

    let actKey = input.shift();
    while (input[0] !== 'Generate') {

        let tokens = input
            .shift()
            .split('>>>');
        let command = tokens.shift();

        if (command === 'Contains') {
            let strToFind = tokens.pop();
            if (actKey.includes(strToFind)) {
                console.log(`${actKey} contains ${strToFind}`);
            } else {
                console.log(`Substring not found!`);
            }

        } else if (command === 'Flip') {
            let caseLowOrUp = tokens.shift();
            let [startIndex , endIndex] = tokens.map(Number);
            if (caseLowOrUp === 'Upper') {
                let strToUpCase = actKey.slice(startIndex , endIndex).toUpperCase();
                actKey = actKey.slice(0,startIndex) + strToUpCase + actKey.slice(endIndex);
                console.log(actKey);

            } else if (caseLowOrUp === 'Lower') {
                let strToLowCase = actKey.slice(startIndex , endIndex).toLowerCase();
                actKey = actKey.slice(0,startIndex) + strToLowCase + actKey.slice(endIndex);
                console.log(actKey);
            }

        } else if (command === 'Slice') {
            let [startIndex , endIndex] = tokens.map(Number);
            actKey = actKey.slice(0,startIndex) + actKey.slice(endIndex);
            console.log(actKey);
        }
    }
    console.log(`Your activation key is: ${actKey}`);
}

activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

function solve(input) {
    
    let masages = [];

    while (input[0] !== 'end') {
        let tokens = input.shift().split(' ');
        let command = tokens.shift();

        if (command === 'Chat') {
            masages.push(tokens.pop());

        } else if (command === 'Delete') {
            let masage = tokens.pop();
            if (masages.includes(masage)) {
                let index = masages.findIndex(el => el === masage);
                masages.splice(index,1);
            }

        } else if (command === 'Edit') {
            let [masage , newMasage] = tokens;
            
            if (masages.includes(masage)) {
                let index = masages.findIndex(el => el === masage);
                masages[index] = newMasage;
            }

        } else if (command === 'Pin') {

            let masage = tokens.pop();
            if (masages.includes(masage)) {
                let index = masages.findIndex(el => el === masage);
                masages.splice(index,1);
                masages.push(masage);
            }

        } else if (command === 'Spam') {
            masages.push(...tokens);
        }
    }

    console.log(masages.join('\n'));
}

solve(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])



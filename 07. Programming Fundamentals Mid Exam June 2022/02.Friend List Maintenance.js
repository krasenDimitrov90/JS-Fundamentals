function solve(input) {

    let friendsList = input.shift().split(', ');

    let line = input.shift();

    while (line !== 'Report') {
        
        let tokens = line.split(' ')
        let command = tokens.shift();

        if (command === 'Blacklist') {
            let name = tokens.pop();
            if (friendsList.includes(name)) {
                let index = friendsList.findIndex(el => el === name)
                friendsList[index] = 'Blacklisted';
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
            
        } else if (command === 'Error') {

            let index = Number(tokens.pop());
            if (friendsList.length > index && index > -1) {
                let currentName = friendsList[index];
                if (currentName !== 'Blacklisted' && currentName !== 'Lost') {
                    friendsList[index] = 'Lost';
                    console.log(`${currentName} was lost due to an error.`);
                } 
            }

        } else if (command === 'Change') {
            let [index , newName] = tokens;
            index = Number(index);

            if (friendsList.length > index && index > -1) {
                let currentName = friendsList[index];
                friendsList[index] = newName;
                console.log(`${currentName} changed his username to ${newName}.`);
            }
        }
        line = input.shift();
    }

    let blacklist = friendsList.filter(el => el === 'Blacklisted');
    let lostNames = friendsList.filter(el => el === 'Lost');
    let blackListL = 0;
    let lostNamesL = 0;
    if (blacklist.length > 0) {
        blackListL = blacklist.length;
    }
    if (lostNames.length > 0) {
        lostNamesL = lostNames.length;
    }

    console.log(`Blacklisted names: ${blackListL}`);
    console.log(`Lost names: ${lostNamesL}`);
    console.log(friendsList.join(' '));

}

solve(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])




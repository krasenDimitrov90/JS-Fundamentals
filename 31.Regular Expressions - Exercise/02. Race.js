function solve(input) {

    let namePattern = /([A-Za-z]+)/g;
    let numPattern = /([0-9])/g;
    let tokens = input
        .shift()
        .split(', ');
    let participants = {};

    for (let name of tokens) {
        participants[name] = 0;
    }

    let name; 
    let score;

    tokens = input.shift();
    while (tokens !== 'end of race') {

        let currentParticipant = '';  

        while ((name = namePattern.exec(tokens)) !== null) {
            currentParticipant = currentParticipant.concat(name[0]);
        }

        if (participants.hasOwnProperty(currentParticipant)) {
            while ((score = numPattern.exec(tokens)) !== null) {
                participants[currentParticipant] += Number(score[0]);
            }
        }

        tokens = input.shift();
    }

    let sortedParticipants = Object.entries(participants);
    sortedParticipants.sort((a , b) => b[1] - a[1])

    
    let firstPlaceName = sortedParticipants[0][0];
    let secondPlaceName = sortedParticipants[1][0];
    let thirdPlaceName = sortedParticipants[2][0];
    
    console.log(`1st place: ${firstPlaceName}`);
    console.log(`2nd place: ${secondPlaceName}`);
    console.log(`3rd place: ${thirdPlaceName}`);


}
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

)
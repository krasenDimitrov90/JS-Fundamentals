function solve(input) {
    let str = input.shift();
    let patern = /(@|#)+(?<color>[a-z]{3,})(@|#)+([^a-zA-Z0-9]*)\/+(?<num>\d+)\/+/g;
    let arr = [...str.matchAll(patern)]
    if (arr !== []) {
        arr.forEach(line => {
            let color = line.groups['color'];
            let count = line.groups['num'];
            console.log(`You found ${count} ${color} eggs!`);
        })
    }
    
}


solve(['#@##@red@#//@rEd@/2/#@@////10/'])
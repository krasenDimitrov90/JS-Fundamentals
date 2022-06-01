function calculateTravelPoints(input) {

    let pattern = /(=|\/)(?<dest>[A-Z][A-Za-z]{2,})\1/g
    let match;
    
    let destinations = [];
    while ((match = pattern.exec(input)) !== null) {
        destinations.push(match.groups['dest']);
        
    }

    let sum = destinations.reduce((acc , el) => acc += el.length ,0)
    
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}

calculateTravelPoints('ThisIs some InvalidInput')
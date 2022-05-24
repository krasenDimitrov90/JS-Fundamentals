function resources(input) {
    let resourcesList = {};
    let resourcesListL = Number(input.length);

    for (let i = 0; i < resourcesListL; i += 2) {
        let material = input[i];
        let quantity = Number(input[i + 1]);

        if (!resourcesList.hasOwnProperty(material)) {
            resourcesList[material] = 0;
        }
        resourcesList[material] += quantity;
    }
    let entries = Object.entries(resourcesList);
    entries.forEach(a => console.log(`${a[0]} -> ${a[1]}`))
}
resources([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
)
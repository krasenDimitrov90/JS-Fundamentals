function parseJSON(input) {
    let dictionary = {};
    for (const line of input) {
        let obj = JSON.parse(line)
        let entries = Object.entries(obj);
        let key = entries[0][0];
        let value = entries[0][1];
        dictionary[key] = value;
    }
    let sorted = Object.entries(dictionary);
    sorted.sort((a,b) => a[0].localeCompare(b[0]))
    sorted.forEach(el => console.log(`Term: ${el[0]} => Definition: ${el[1]}`))
    
    
}
parseJSON([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )
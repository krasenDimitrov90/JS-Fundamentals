function convertJSONToObject(input) {
    let person = JSON.parse(input);
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    
}
convertJSONToObject('{"name": "George", "age": 40, "town": "Sofia"}')